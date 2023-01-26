import Link from "next/link";
import Layout from "../components/layout/Layout";
import { toast } from "react-toastify";
import { useState } from "react";
import axios from 'axios';
import { useRouter } from 'next/router';
import {useCookies} from 'react-cookie';


function Register() {
    const router = useRouter();
    const [cookies, setCookie, removeCookie] = useCookies(['token', 'user']);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {

        // return ;
        setLoading(true);        
        event.preventDefault()

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}api/v1/login`, {
                "phone_number" : event.target.phone_number.value,
                "password" : event.target.password.value
            });
            if(response.status == 200) {
                setCookie('token', response.data.bearer);
                setCookie('user', response.data.user);
                console.log(response.data.user);
                if(response.data.user.role == 2){
                    router.push('/account');
                } else {
                    router.push('/admin');
                }

                // if(response.data.user.phone_number_verified_at != null) {
                //     router.push('/account');
                // } else {
                //     router.push('/verify-phone');
                // }
            }

        } catch (error) {
            
            // error handling
            if(!error.response.data) {
                toast.error('Something went wrong')
                return;
            }
            const err = error.response.data;

            if(err.key == 'credentials') {
                if(err.type == 'credentials.wrong') {
                    toast.error('Wrong Credentials')
                }
            } else if(err.key == 'phone_number') {
                if(err.type == 'string.empty') {
                    toast.error('Phone number is required')
                } else if(err.type == 'user.exists') {
                    toast.error('This phone number is already registered')
                } 
            } else if(err.key == 'password') {
                if(err.type == 'string.empty') {
                    toast.error('Password is required')
                } if(err.type == 'string.min') {
                    toast.error('Password must be atleast 8 characters')
                }
            }
            
        }
        
        setLoading(false);

    }




    return (
        <>
            <Layout parent="Home" sub="Pages" subChild="Login">
                <div className="page-content pt-150 pb-150">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2"></div>
                            <div className="col-lg-8">
                                <div className="login_wrap widget-taber-content background-white">
                                    <div className="padding_eight_all bg-white">
                                        <div className="heading_s1">
                                            <h1 className="mb-5">Login</h1>
                                            <p className="mb-30">Don't have an account? <Link href="/register"><a>Create here</a></Link></p>
                                        </div>
                                        <form method="post" onSubmit={handleSubmit}>
                                            
                                            <div className="form-group">
                                                <input type="text" required="" name="phone_number" placeholder="Phone Number* (e.g 923013454323)" autoComplete="off"/>
                                            </div>
                                            <div className="form-group">
                                                <input required="" type="password" name="password" placeholder="Password*" autoComplete="off"/>
                                            </div>
                                            
                                            <div className="form-group">
                                                <button type="submit" className="btn btn-heading btn-block hover-up" name="login" disabled={loading}>
                                                {loading && <span className="spinner-border spinner-border-sm mr-5" role="status" aria-hidden="true"></span>}
                                                    Login
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

export default Register;
