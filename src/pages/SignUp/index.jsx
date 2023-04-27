import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { createUser} from "../../config/functions"
import { useNavigate } from 'react-router-dom';

const SignUp = () =>{

    const [checkMessage, setCheckMessage] = useState('')

    const navigate = useNavigate()

    const { register, watch ,  handleSubmit , reset, formState: { errors } } = useForm();

    const onSubmit = (data) =>{
        console.log(data);
        createUser(data).then((response)=>{
            if(response.status == 400 || response.status == 401 ) {
                setCheckMessage(response.message)
                return
            //    return console.log(response.message); 
            }
            setCheckMessage(response.message)
            reset({ name: '' , business_name: '', email: '', password: '', confirmPassword: ''});
            setTimeout(()=>{
                navigate('/login')
            },3000)
       
        }).catch((error)=>{
            // console.log(error.message);
            setCheckMessage(error.message)
        })
    }

    // console.log(API)

  return (
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
                            <h1 className="h1 text-gray-900 mb-1">Let's Get Started</h1>
                            <p className=" mb-4">Create your free business account</p>
                        </div>
                        <form className="user" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group row">
                                <div className="col-sm-12 mb-3 mb-sm-0">
                                    <img src="/assets/img/name.svg" />
                                    <input type="text" className="form-control form-control-user" id="exampleFirstName"
                                        placeholder="Name" {...register("name", 
                                        { required: "Full Name is required.", 
                                        validate: (val) => {
                                          if (!/^[^-\s][a-zA-Z0-9_\s-]+$/.test(val)) {
                                          return "First Spaces are not allowed";
                                          }
                                      }  
                                      })}/>
                                </div> 
                                {errors.name && <span className="login-error">{errors.name.message}</span>}
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-12 mb-3 mb-sm-0">
                                    <img src="/assets/img/name.svg" />
                                    <input type="text" className="form-control form-control-user" id="businessName"
                                        placeholder="Business Name" {...register("business_name", 
                                        { required: "Business Name is required.", 
                                        validate: (val) => {
                                          if (!/^[^-\s][a-zA-Z0-9_\s-]+$/.test(val)) {
                                          return "First Spaces are not allowed";
                                          }
                                      }  
                                      })}/>
                                </div> 
                                {errors.business_name && <span className="login-error">{errors.business_name.message}</span>}
                            </div>
                            <div className="form-group">
                                <img src="/assets/img/email.svg" />
                                <input type="email" className="form-control form-control-user" id="exampleInputEmail"
                                    placeholder="Email Address" {...register("email", 
                                    { required: "Email is required.",  
                                      pattern: { value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, message: "Please Enter a Valid Email."
                                      }
                                    })}/>
                                    {errors.email && <span className='login-error'>{errors.email.message}</span>}
                            </div>
                            <div className="form-group">
                                <img src="/assets/img/pass.svg" />
                                    <input type="password" className="form-control form-control-user"
                                        id="exampleInputPassword" placeholder="Password" {...register("password", { 
                                            required: "Password is required.",
                                            pattern: {
                                              value: /^\S*$/,
                                              message: "No spaces Allowed in Password"
                                              },
                                            minLength: { value: 6, message: "Minimum lenght is 6.",                                           
                                          }, 
                                          })} />  
                                          {errors.password && <span className='login-error'>{errors.password.message}</span>}                               
                            </div>
                            <div className="form-group">
                                <img src="/assets/img/pass.svg" />
                                    <input type="password" className="form-control form-control-user"
                                        id="exampleRepeatPassword" placeholder="Confirm Password"  {...register("confirmPassword", 
                                        { required: "Password is required.", 
                                              validate: (val) => {
                                                if (watch('password') != val) {
                                                  return "Your passwords do no match";
                                                }
                                              } , 
                                                })}/>
                                                {errors.confirmPassword && <span className='login-error'>{errors.confirmPassword.message}</span>}
                            </div>
                            {checkMessage && <span className='login-error'>{checkMessage}</span>}
                            <input type="submit" value="Sign Up"  className="trial text-center"/>                                                        
                        </form>                        
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
  )
}


export default SignUp