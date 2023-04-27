import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { searchByBusiness } from '../../config/functions';
import { useNavigate } from 'react-router-dom';
import $ from "jquery";
import 'bootstrap';
import UserSidebar from '../../components/Header/UserSidebar';

const Promote = () =>{

    const { register: searchBusiness, handleSubmit : searchBusinessSubmit , reset :resetsearchBusiness, formState: { errors: searchBusinessErrors } } = useForm();

    const navigate = useNavigate()

    const[businessData , setBusinessData] = useState(null)

    const[selectedBusiness , setSelectedBusiness] = useState(null)

    const search_business_submit = (data) =>{
        console.log(data);
        searchByBusiness(data).then((response)=>{
            console.log(response);
            if (response.status == 400) {
                return
            }
            setBusinessData(response)
        }).catch((e)=>{
            console.log(e.message)
        })
    }

   const redirectTonextRoute = () =>{
    navigate(`/promote/${selectedBusiness}`)
    }

    const handleBusinessChange = (e) =>{
        e.preventDefault();
        const data = {
          businessName : e.target.value
        }
        search_business_submit(data)
      
    }
    
    return(
        <>
        <section>
  
        <nav className="navbar navbar-expand navbar-dark topbar static-top shadow py-3">
    
          <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
    
            <div className="sidebar-brand-text mx-3"><img src="/assets/img/logo.svg" alt="" title=""/></div>
          </a>
          <div className="text-center d-none d-md-inline">
            <button className="border-0 hamburger" id="sidebarToggle"><img src="/assets/img/menu-alt.svg" /></button>
          </div>
          <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
            <i className="fa fa-bars"></i>
          </button>
    
          <ul className="navbar-nav ml-auto">
    
            <li className="nav-item dropdown no-arrow d-sm-none">
              <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-search fa-fw"></i>
              </a>
     
              <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                <form className="form-inline mr-auto w-100 navbar-search">
                  <div className="input-group">
                    <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                      aria-label="Search" aria-describedby="basic-addon2"/>
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="button">
                        <i className="fas fa-search fa-sm"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>
    
            <li className="nav-item dropdown no-arrow mx-1">
              <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-bell fa-fw"></i>       
                <span className="badge badge-danger badge-counter">3+</span>
              </a>
              <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="alertsDropdown">
                <h6 className="dropdown-header">
                  Alerts Center
                </h6>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="mr-3">
                    <div className="icon-circle bg-primary">
                      <i className="fas fa-file-alt text-white"></i>
                    </div>
                  </div>
                  <div>
                    <div className="small text-gray-500">December 12, 2019</div>
                    <span className="font-weight-bold">A new monthly report is ready to download!</span>
                  </div>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="mr-3">
                    <div className="icon-circle bg-success">
                      <i className="fas fa-donate text-white"></i>
                    </div>
                  </div>
                  <div>
                    <div className="small text-gray-500">December 7, 2019</div>
                    $290.29 has been deposited into your account!
                  </div>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="mr-3">
                    <div className="icon-circle bg-warning">
                      <i className="fas fa-exclamation-triangle text-white"></i>
                    </div>
                  </div>
                  <div>
                    <div className="small text-gray-500">December 2, 2019</div>
                    Spending Alert: We've noticed unusually high spending for your account.
                  </div>
                </a>
                <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
              </div>
            </li>
            <li className="nav-item dropdown no-arrow mx-1">
              <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-envelope fa-fw"></i>
                <span className="badge badge-danger badge-counter">7</span>
              </a>
              <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="messagesDropdown">
                <h6 className="dropdown-header">
                  Message Center
                </h6>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="dropdown-list-image mr-3">
                    <img className="rounded-circle" src="img/undraw_profile_1.svg" alt="..."/>
                    <div className="status-indicator bg-success"></div>
                  </div>
                  <div className="font-weight-bold">
                    <div className="text-truncate">Hi there! I am wondering if you can help me with a
                      problem I've been having.</div>
                    <div className="small text-gray-500">Emily Fowler · 58m</div>
                  </div>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="dropdown-list-image mr-3">
                    <img className="rounded-circle" src="img/undraw_profile_2.svg" alt="..."/>
                    <div className="status-indicator"></div>
                  </div>
                  <div>
                    <div className="text-truncate">I have the photos that you ordered last month, how
                      would you like them sent to you?</div>
                    <div className="small text-gray-500">Jae Chun · 1d</div>
                  </div>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="dropdown-list-image mr-3">
                    <img className="rounded-circle" src="img/undraw_profile_3.svg" alt="..."/>
                    <div className="status-indicator bg-warning"></div>
                  </div>
                  <div>
                    <div className="text-truncate">Last month's report looks great, I am very happy with
                      the progress so far, keep up the good work!</div>
                    <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                  </div>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="dropdown-list-image mr-3">
                    <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60" alt="..."/>
                    <div className="status-indicator bg-success"></div>
                  </div>
                  <div>
                    <div className="text-truncate">Am I a good boy? The reason I ask is because someone
                      told me that people say this to all dogs, even if they aren't good...</div>
                    <div className="small text-gray-500">Chicken the Dog · 2w</div>
                  </div>
                </a>
                <a className="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
              </div>
            </li>
    
            <div className="topbar-divider d-none d-sm-block"></div>
 
            <li className="nav-item dropdown no-arrow">
              <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
    
                <img className="mr-2 img-profile rounded-circle" src="/assets/img/undraw_profile.svg"/>
                <span className="mr-2 d-none d-lg-inline text-white-600 small">Douglas McGee</span>
              </a>
      
              <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                <a className="dropdown-item" href="#">
                  <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                  Profile
                </a>
                <a className="dropdown-item" href="#">
                  <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                  Settings
                </a>
                <a className="dropdown-item" href="#">
                  <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                  Activity Log
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                  <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                  Logout
                </a>
              </div>
            </li>
    
          </ul>
    
        </nav>
   
      </section>

      <div id="wrapper">
    
      <UserSidebar/>
        <div id="content-wrapper" className="d-flex flex-column">
       
          <div id="content">
        
            <div className="container-fluid py-5">
              <section className="content-area py-5 bg-lighter">
              
                <div className="container test">
                  <div className="row d-sm-flex align-items-center mb-5">
                    <h1 className="h1 mb-0 text-center">Make Plan With Your Next Customer</h1>
                    <p className='text-center'>People come to Leaf to make plans with the people and places they love, including businesses like yours. Maximize your advertising ROI by reaching users at the moment they plan to go out.
                    </p>
                    <div className="row">
                    <div className="col-sm-12 mb-3 mb-sm-0  text-center">
                      <button type="button" className="trial text-left" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Promote Your Business
                      </button>
                    </div> 
                  </div>
                  </div>
                  <div className="row">
                    <div className="col-3">
                      <h2 className="mt-5">Benifit 1</h2>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                      <h2 className="mt-5">Benifit 2</h2>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                    </div>
                    <div className="col-6">
                      <img src="/assets/img/devices.png" alt="" title="" />
                    </div>
                    <div className="col-3">
                      <h2 className="mt-5">Benifit 3</h2>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                      <h2 className="mt-5">Benifit 4</h2>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                    </div>
                  </div>
                 
                </div>
    
              </section>
             <div className="modal fade steps-modal" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">                    
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                           
                      <div className="form-group mb-3"> 
                      <label>Business Name</label>
                            <input type="text" name="businessName"
                            className="form-control form-control-user" id="exampleInputPassword" placeholder="Search Business" onChange={(e)=>{handleBusinessChange(e)}} />    
                            
                     
                      </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="black-btn" data-bs-dismiss="modal">Close</button>
                    <button type="button" onClick={redirectTonextRoute} data-bs-dismiss="modal" className="trial" >Go</button>
                  </div>
                </div>
              </div>
            </div>    
            </div>
    
          </div>
       
          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright 2023 Leaf for Business. All rights reserved.</span>
              </div>
            </div>
          </footer>
    
        </div>
    
    
      </div>

      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>

      <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
              <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
            <div className="modal-footer">
              <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
              <a className="btn btn-primary" href="login.html">Logout</a>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}


export default Promote