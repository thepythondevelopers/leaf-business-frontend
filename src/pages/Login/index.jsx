import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginUser } from '../../config/functions';


const Login = () =>{

    const { register: login, handleSubmit : loginSubmit , reset :resetLogin, formState: { errors: loginErrors } } = useForm();

    const [checkMessage, setCheckMessage] = useState('')

    const navigate = useNavigate()

    const login_submit = (data)=>{
        
        loginUser(data).then((response)=>{
            if(response.status == 404 || response.status == 401 ) {
                setCheckMessage(response.message)
                return
            //    return console.log(response.message); 
            }
            setCheckMessage(response.message)
            resetLogin({email: '', password: ''});
            setTimeout(()=>{
                navigate('/dashboard')
            },3000)
       
        }).catch((error)=>{
            // console.log(error.message);
            setCheckMessage(error.message)
        })
    }

    return(        
    
    <div className="container">
        <div className="row text-center justify-content-center py-4">
            <img className="logo-inn" src="/assets/img/logo-in.svg" title="Leaf" alt="" />
        </div>
        <div className="card o-hidden border-0 shadow-lg mb-5">
            <div className="card-body p-0">
                <div className="row">
                    <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                    <div className="col-lg-7">
                        <div className="p-5">
                            <div className="text-center">
                                <h1 className="h1 text-gray-900 mb-1">Sign In</h1>
                                <p className=" mb-4">Login to stay connected.</p>
                            </div>
                            <form className="user" onSubmit={loginSubmit(login_submit)}>
                                <div className="form-group row">
                                    <div className="col-sm-12 mb-3 mb-sm-0">
                                        <img src="/assets/img/name.svg" />
                                        <input type="text" className="form-control form-control-user" 
                                        {...login ("email", 
                                        { required: "Email is required.",  
                                        validate: (val) => {
                                          if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val)) {
                                            return "Please Enter Valid Email Address";
                                          }
                                        } 
                                        })}
                                        placeholder="User Name / Email"/>
                                    </div> 
                                    {loginErrors.email && <span className='login-error'>{loginErrors.email.message}</span>}
                                </div> 
                                
                                <div className="form-group">
                                    <img src="/assets/img/pass.svg" />
                                        <input type="password" className="form-control form-control-user"
                                        {...login("password", { 
                                            required: "Password is required.",
                                            pattern: {
                                              value: /^\S*$/,
                                              message: "No spaces Allowed in Password"
                                              },
                                            minLength: { value: 6, message: "Minimum lenght is 6.",
                                           
                                          }, 
                                          })}  placeholder="Password"/>       
                                          {loginErrors.password && <span className='login-error'>{loginErrors.password.message}</span>}                        
                                </div> 
                                <div className="row">
                                    <div className="col-sm-4 mb-3 mb-sm-0  text-left">
                                        {checkMessage && <span className='login-error'>{checkMessage}</span>}
                                        <input type="submit" value="Login" className="trial text-center"/>                
                                    </div> 
                                    <div className="col-sm-8 mb-3 mb-sm-0 text-right">
                                        <Link to="/forgotpassword" className="mt-3 ">
                                            Forgot Password? Click Here
                                        </Link>
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

export default Login