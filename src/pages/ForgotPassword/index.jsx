import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const ForgotPassword = () =>{

    const { register: forgotpassword, handleSubmit , reset :resetForgotPassword, formState: { errors: forgotPasswordErrors } } = useForm();


    const [checkMessage, setCheckMessage] = useState('')

    const forgotPasswordSubmit = (data) =>{
        console.log(data);
    }

    return(
        <div class="container">
        <div class="row text-center justify-content-center py-4">
            <img class="logo-inn" src="/assets/img/logo-in.svg" title="Leaf" alt="" />
        </div>
        <div class="card o-hidden border-0 shadow-lg mb-5">
            <div class="card-body p-0">
                <div class="row">
                    <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
                    <div class="col-lg-7">
                        <div class="p-5">
                            <div class="text-center">
                                <h1 class="h1 text-gray-900 mb-1">Forgot Password</h1>
                                <p class=" mb-4">Forgot your Password</p>
                            </div>
                            <form class="user" onSubmit={handleSubmit(forgotPasswordSubmit)}>  
                                <div class="form-group">
                                    <img src="/assets/img/name.svg" />
                                        <input type="text" class="form-control form-control-user"
                                        {...forgotpassword ("email", 
                                        { required: "Email is required.",  
                                        validate: (val) => {
                                          if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val)) {
                                            return "Please Enter Valid Email Address";
                                          }
                                        } 
                                        })} placeholder="Enter Your Email"/>
                                        {forgotPasswordErrors.email && <span className='login-error'>{forgotPasswordErrors.email.message}</span>}
                                </div>
                                <div class="row">
                                    <div class="col-sm-4 mb-3 mb-sm-0  text-left">
                                        {checkMessage && <span className='login-error'>{checkMessage}</span>}
                                        <input type="submit" value="Submit" class="trial text-center"/>                
                                    </div> 
                                </div>                                
                            </form>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ForgotPassword