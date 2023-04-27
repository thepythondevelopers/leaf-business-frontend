import React, { useEffect, useState } from 'react'
import { useParams , useNavigate } from 'react-router-dom'
import UserSidebar from '../../../components/Header/UserSidebar';
import { RangeDatePicker } from 'react-google-flight-datepicker';
import 'react-google-flight-datepicker/dist/main.css';

const PromoteBusiness = () =>{

    let params = useParams();
    useEffect(() => {
        console.log(params.businessId);
      }, []);

      const navigate = useNavigate()


      const [promotionData , setPromotionData] = useState({
        businessId : params.businessId ,
        start_date : '',
        end_date : '',
        image : {},
        headline : '',
        name : '',
        email : '',
        action_note : ''
      })

      const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;

        console.log(name + value)

        setPromotionData(prevState => ({...prevState , [name] : value }))
      }

      const handleImage = (e) =>{
       console.log(e.target.files[0])

       const value = e.target.files[0]

       console.log(value)

       setPromotionData(prevState => ({...prevState , "image" : value }))

       console.log(Object.keys(e.target.files[0]).length)

      }

      const reviewPay = () =>{
        navigate( `/promote/${params.businessId}/review` ,{state:promotionData})

       // promotionData.state
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

    <div id="content-wrapper" class="d-flex flex-column">
 
    <div id="content">
  
      <div class="container-fluid py-5">
        <section class="content-area py-5 bg-lighter">       
          <div class="container test">
            <div class="row d-sm-flex align-items-center mb-5">
              <h1 class="h1 mb-0 text-center">Create your Promotion</h1>
            </div>
            <div class="row">              
              <div class="col-6 px-4 py-4"> 
                <div class="frame">
                    <div class="frame-content">
                        <div class="row justify-content-left">
                            <div class="col-md-4 mb-4">
                                <img class="img-profile summary rounded-circle" src={Object.keys(promotionData.image).length > 0 ? URL.createObjectURL(promotionData.image) : "/assets/img/action.png"}/>
                            </div>
                        </div>
                            <p class="mb-4"><strong>Start Day: </strong>{promotionData.start_date}</p>
                            <p><strong>End Day: </strong> {promotionData.end_date}</p>
                            <p class="mb-4"><strong>Business Headline:</strong> {promotionData.headline}</p>
                            <p class="mb-4"><strong>Name:</strong> {promotionData.name}</p>
                            <p class="mb-4"><strong>Email:</strong> {promotionData.email}</p>
                            <p class="mb-2"><strong>Action Note:</strong></p>
                            <p>{promotionData.action_note}</p>
                        </div>
                    </div>
                </div>

    <div class="col-6 ">                
       <div class="steps-modal bg-white py-4 px-4">
              <form class="user-steps">               
                <div class="form-group row mb-3">  
                  <label>Promotion Start Date </label>
                  <div class="col-md-6">                    
                        <input type="date" class="form-control form-control-user" name="start_date" 
                        placeholder="Start Date" min="1997-01-01" max="2030-12-31" id="dat" onChange={(e) => handleChange(e)} />
                  </div>
                  <label>Promotion End Date </label>
                  <div class="col-md-6">
                    <input type="date"  class="form-control form-control-user" name="end_date" 
                    placeholder="End Date" min="1997-01-01" max="2030-12-31"  onChange={(e) => handleChange(e)} />
                  </div> 
                </div>
              <div class="form-group row mb-3">  
                <div class="col-md-12"> 
                  <label>Upload Image (JPEG, PNG, GIF, SVG)</label>
                      <input type="file" class="form-control form-control-user" name="img" accept="image/*" onChange={(e)=> handleImage(e)}/>
                </div>                    
              </div>
              <div class="form-group  mb-3"> 
                <label>Add Headline</label>
                <input type="text" onChange={(e) => handleChange(e)} class="form-control form-control-user custom_placeholder" id="exampleInputPassword" placeholder="Join us for Happy Hour every weekday from 4 - 6 pm 🍸" name="headline" />            
            </div>    
            <div class="form-group mb-4"> 
              <label>Action Note</label>
                <textarea class="form-control form-control-user custom_placeholder" onChange={(e) => handleChange(e)} id="exampleFormControlTextarea1" rows="3" name="action_note" placeholder='Don’t forget to submit a Yelp review.'></textarea>
              <i style={{fontSize: "12px"}}>*Max 250 characters</i>             
            </div> 
              <button type="button" class="trial" onClick={()=>reviewPay()}>Review and Pay</button>
            </form>
            <RangeDatePicker
  startDate={new Date()}
  endDate={new Date()}
  // onChange={(startDate, endDate) => onDateChange(startDate, endDate)}
  minDate={new Date(1900, 0, 1)}
  maxDate={new Date(2100, 0, 1)}
  dateFormat="D"
  monthFormat="MMM YYYY"
  startDatePlaceholder="Start Date"
  endDatePlaceholder="End Date"
  disabled={false}
  className="my-own-class-name"
  startWeekDay="monday"
/>
            </div>
          </div>
        </div>
      </div>
    </section>
</div>

    </div>
    <footer class="sticky-footer bg-white">
      <div class="container my-auto">
        <div class="copyright text-center my-auto">
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

export default PromoteBusiness