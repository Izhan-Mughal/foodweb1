import Link from "next/link";
import Layout from "../components/layout/Layout";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import axios from 'axios';
import {useCookies} from 'react-cookie';
import { useRouter } from 'next/router';

function VerifyPhone() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [sending, setSending] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(['token', 'user']);

    const handleSubmit = async (event) => {
        setLoading(true);
        event.preventDefault();

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}api/v1/verify-phone-number`, {
                "token" : event.target.token.value
            });
            if(response.status == 200) {
                console.log(response.data);
                setCookie('user', response.data);
                toast('Successfully verified');
                router.push('/account');
            }

        } catch (error) {
            
            // error handling
            if(!error.response.data) {
                toast.error('Something went wrong')
                return;
            }
            const err = error.response.data;

            if(err.key == 'token') {
                if(err.type == 'token.invalid') {
                    toast.error('Invalid Token')
                }
            } 
            
        }
        
        setLoading(false);

    }

    const sendVerificationToken = async () => {
        setSending(true);
        if(cookies.user == undefined) {
            toast.error('Something went wrong')
        }
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}api/v1/send-token`, {
                "phone_number" : cookies.user.phone_number
            });
            if(response.status == 200) {
                toast('Sent Successfully')
            }

        } catch (error) {
            toast.error('Something is went wrong');
        }
        setSending(false);
    }


    useEffect(() => {
        sendVerificationToken();
    }, []);



    return (
        <>
            <Layout parent="Home" sub="Pages" subChild="Verify Phone Number">
                <div className="page-content pt-150 pb-150">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2"></div>
                            <div className="col-lg-8">
                                <div className="login_wrap widget-taber-content background-white">
                                    <div className="padding_eight_all bg-white">
                                        <div className="heading_s1">
                                            <h1 className="mb-5">Verify Phone Number</h1>
                                            <p className="mb-30">Did not receive message yet? <button type="submit" className="btn btn-heading btn-block hover-up btn-sm" disabled={sending} onClick={()=>sendVerificationToken()}>
                                                {sending && <span className="spinner-border spinner-border-sm mr-5" role="status" aria-hidden="true"></span>}
                                                    Resend
                                                </button></p>
                                        </div>
                                        <form method="post" onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <input type="text" required="" name="token" placeholder="Enter 6 digit pin*" autoComplete="off"/>
                                            </div>
                                            
                                            <div className="form-group">
                                                <button type="submit" className="btn btn-heading btn-block hover-up" disabled={loading}>
                                                {loading && <span className="spinner-border spinner-border-sm mr-5" role="status" aria-hidden="true"></span>}
                                                    Verify
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2"></div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default VerifyPhone;
