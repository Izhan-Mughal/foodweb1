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
        // event.preventDefault();

        // // console.log(cookies['cookie-name2']);
        // // // setCookie('cookie-name', 'abcdefgh')


        // return ;
        setLoading(true);        
        event.preventDefault()

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}api/v1/register`, {
                "name" : event.target.name.value,
                "password" : event.target.password.value,
                "phone_number" : event.target.phone_number.value,
                "password_confirmation" : event.target.password_confirmation.value
            });
            if(response.status == 200) {
                setCookie('token', response.data.bearer);
                setCookie('user', response.data.user);
                router.push('/account');
            }

        } catch (error) {
            
            // error handling
            if(!error.response.data) {
                toast.error('Something went wrong')
                return;
            }
            const err = error.response.data;

            if(err.key == 'name') {
                if(err.type == 'string.empty') {
                    toast.error('Name is required')
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
            } else if(err.key == 'password_confirmation') {
                if(err.type == 'string.empty') {
                    toast.error('Confirmation Password is required')
                } else if(err.type == 'any.only') {
                    toast.error('Confirmation Password does not match')
                }

                
            }
            
        }
        
        setLoading(false);

    }




    return (
        <>
            <Layout parent="Home" sub="Pages" subChild="Register">
                <div className="page-content pt-150 pb-150">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2"></div>
                            <div className="col-lg-8">
                                <div className="login_wrap widget-taber-content background-white">
                                    <div className="padding_eight_all bg-white">
                                        <div className="heading_s1">
                                            <h1 className="mb-5">Register</h1>
                                            <p className="mb-30">Already have an account? <Link href="/login"><a>Login here</a></Link></p>
                                        </div>
                                        <form method="post" onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <input type="text" required="" name="name" placeholder="Name*" autoComplete="off"/>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" required="" name="phone_number" placeholder="Phone Number* (e.g 923013454323)" autoComplete="off"/>
                                            </div>
                                            <div className="form-group">
                                                <input required="" type="password" name="password" placeholder="Password*" autoComplete="off"/>
                                            </div>
                                            <div className="form-group">
                                                <input required="" type="password" name="password_confirmation" placeholder="Confirm Password*" autoComplete="off"/>
                                            </div>
                                            
                                            <div className="form-group">
                                                <button type="submit" className="btn btn-heading btn-block hover-up" name="login" disabled={loading}>
                                                {loading && <span className="spinner-border spinner-border-sm mr-5" role="status" aria-hidden="true"></span>}
                                                    Register
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
