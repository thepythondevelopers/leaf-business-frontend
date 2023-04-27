import React from 'react'

const Dashboard = () =>{
    return(
        <>
        <section> 
         
            <nav class="navbar navbar-expand navbar-dark topbar static-top shadow py-3">
              
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                
                <div class="sidebar-brand-text mx-3"><img src="/assets/img/logo.svg" alt="" title=""/></div>
            </a>
            <div class="text-center d-none d-md-inline">
                <button class="border-0 hamburger" id="sidebarToggle"><img src="/assets/img/menu-alt.svg" /></button>
            </div>
            
                <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                    <i class="fa fa-bars"></i>
                </button>

           
                <ul class="navbar-nav ml-auto">              
                    <li class="nav-item dropdown no-arrow d-sm-none">
                        <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-search fa-fw"></i>
                        </a>
                  
                        <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                            aria-labelledby="searchDropdown">
                            <form class="form-inline mr-auto w-100 navbar-search">
                                <div class="input-group">
                                    <input type="text" class="form-control bg-light border-0 small"
                                        placeholder="Search for..." aria-label="Search"
                                        aria-describedby="basic-addon2"/>
                                    <div class="input-group-append">
                                        <button class="btn btn-primary" type="button">
                                            <i class="fas fa-search fa-sm"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li>

                    <li class="nav-item dropdown no-arrow mx-1">
                        <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-bell fa-fw"></i>
                          
                            <span class="badge badge-danger badge-counter">3+</span>
                        </a>
                       
                        <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                            aria-labelledby="alertsDropdown">
                            <h6 class="dropdown-header">
                                Alerts Center
                            </h6>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="mr-3">
                                    <div class="icon-circle bg-primary">
                                        <i class="fas fa-file-alt text-white"></i>
                                    </div>
                                </div>
                                <div>
                                    <div class="small text-gray-500">December 12, 2019</div>
                                    <span class="font-weight-bold">A new monthly report is ready to download!</span>
                                </div>
                            </a>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="mr-3">
                                    <div class="icon-circle bg-success">
                                        <i class="fas fa-donate text-white"></i>
                                    </div>
                                </div>
                                <div>
                                    <div class="small text-gray-500">December 7, 2019</div>
                                    $290.29 has been deposited into your account!
                                </div>
                            </a>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="mr-3">
                                    <div class="icon-circle bg-warning">
                                        <i class="fas fa-exclamation-triangle text-white"></i>
                                    </div>
                                </div>
                                <div>
                                    <div class="small text-gray-500">December 2, 2019</div>
                                    Spending Alert: We've noticed unusually high spending for your account.
                                </div>
                            </a>
                            <a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                        </div>
                    </li>
              
                    <li class="nav-item dropdown no-arrow mx-1">
                        <a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-envelope fa-fw"></i>
                           
                            <span class="badge badge-danger badge-counter">7</span>
                        </a>
            
                        <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                            aria-labelledby="messagesDropdown">
                            <h6 class="dropdown-header">
                                Message Center
                            </h6>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="dropdown-list-image mr-3">
                                    <img class="rounded-circle" src="/assets/img/undraw_profile_1.svg" alt="..."/>
                                    <div class="status-indicator bg-success"></div>
                                </div>
                                <div class="font-weight-bold">
                                    <div class="text-truncate">Hi there! I am wondering if you can help me with a
                                        problem I've been having.</div>
                                    <div class="small text-gray-500">Emily Fowler · 58m</div>
                                </div>
                            </a>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="dropdown-list-image mr-3">
                                    <img class="rounded-circle" src="/assets/img/undraw_profile_2.svg" alt="..."/>
                                    <div class="status-indicator"></div>
                                </div>
                                <div>
                                    <div class="text-truncate">I have the photos that you ordered last month, how
                                        would you like them sent to you?</div>
                                    <div class="small text-gray-500">Jae Chun · 1d</div>
                                </div>
                            </a>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="dropdown-list-image mr-3">
                                    <img class="rounded-circle" src="/assets/img/undraw_profile_3.svg" alt="..."/>
                                    <div class="status-indicator bg-warning"></div>
                                </div>
                                <div>
                                    <div class="text-truncate">Last month's report looks great, I am very happy with
                                        the progress so far, keep up the good work!</div>
                                    <div class="small text-gray-500">Morgan Alvarez · 2d</div>
                                </div>
                            </a>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="dropdown-list-image mr-3">
                                    <img class="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                        alt="..."/>
                                    <div class="status-indicator bg-success"></div>
                                </div>
                                <div>
                                    <div class="text-truncate">Am I a good boy? The reason I ask is because someone
                                        told me that people say this to all dogs, even if they aren't good...</div>
                                    <div class="small text-gray-500">Chicken the Dog · 2w</div>
                                </div>
                            </a>
                            <a class="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                        </div>
                    </li>

                    <div class="topbar-divider d-none d-sm-block"></div>

      
                    <li class="nav-item dropdown no-arrow">
                        <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            
                            <img class="mr-2 img-profile rounded-circle" src="/assets/img/undraw_profile.svg"/>
                            <span class="mr-2 d-none d-lg-inline text-white-600 small">Douglas McGee</span>
                        </a>
                      
                        <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                            aria-labelledby="userDropdown">
                            <a class="dropdown-item" href="#">
                                <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                Profile
                            </a>
                            <a class="dropdown-item" href="#">
                                <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                Settings
                            </a>
                            <a class="dropdown-item" href="#">
                                <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                Activity Log
                            </a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                Logout
                            </a>
                        </div>
                    </li>

                </ul>

            </nav>
          
    </section>

    <div id="wrapper">
        <ul class="pt-4 px-3 navbar-nav bg-white sidebar-light sidebar accordion" id="accordionSidebar"> 
            <li class="nav-item active">
                <a class="nav-link" href="index.html">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Home</span></a>
            </li>  
            <li class="nav-item">
                <a class="nav-link" href="users.html">
                    <i class="fas fa-fw fa-user-alt"></i>
                    <span>Activity</span></a>
            </li>  
            <li class="nav-item">
                <a class="nav-link" href="plans.html">
                    <i class="fas fa-fw fa-list-alt"></i>
                    <span>Business Profile</span></a>
            </li> 
            <li class="nav-item">
                <a class="nav-link" href="notifications.html">
                    <i class="fas fas fa-bell fa-fw"></i>
                    <span>Events</span></a>
            </li>  
            <li class="nav-item">
                <a class="nav-link" href="subscriptions.html">
                    <i class="fas fa-fw fa-table"></i>
                    <span>Offers</span></a>
            </li>   
            <li class="nav-item">
                <a class="nav-link" href="subscriptions.html">
                    <i class="fas fa-fw fa-table"></i>
                    <span>Collections</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="subscriptions.html">
                    <i class="fas fa-fw fa-table"></i>
                    <span>Billing</span></a>
            </li>
            
             <hr style={{borderTop: '1px solid #ddd' , width: '100%'}} />
            <li class="nav-item no-bg">
                <a class="nav-link" href="subscriptions.html">
                    <i class="fas fa-fw fa-table"></i>
                    <span>Settings</span></a>
            </li>

        </ul>
    
        <div id="content-wrapper" class="d-flex flex-column">
           
            <div id="content">    
               
                <div class="container-fluid py-5">

                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h1 mb-0">Pricing</h1>
                        <a href="#">Home > Pricing</a>
                    </div>
                    <section class="content-area py-5 bg-lighter"> 
                  <div class="container test">
                    <div class="row">
                        <div class="col-md-12"> 
                            <div class="tab-container-one">
                              <div class="row justify-content-center">
                                <div class="col-4 bg-white radius mb-5">
                                  <ul class="nav nav-tabs border-0 text-center" id="myTab" role="tablist">
                                    <li class="nav-item active"><a class="nav-link active" href="#month" role="tab" aria-controls="month" data-bs-toggle="tab">Monthly</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#year" role="tab" aria-controls="year" data-bs-toggle="tab">Annually</a></li>
                                </ul>
                                </div>
                
                              </div>
                                
                                <div class="tab-content">
                                    <div class="tab-pane active" id="month" role="tabpanel" aria-labelledby="month-tab">
                                      <div class="container py-4">            
                                        
                                        <div class="row justify-content-center">
                                          <div class="col-3 py-2">
                            
                                          </div>
                                          <div class="col-2 py-2 head-p bg-white me-1 text-center">
                                            <a class="trial w-100 text-center" href="#">BASIC</a>
                                          </div>
                                          <div class="col-3 py-2 head-p bg-white me-1 text-center">
                                            <span class="recmndd">Recommended</span>
                                            <a class="btn fw-bold w-100 text-center bg-white text-black" href="#">PROFESSIONAL</a>
                                          </div>
                                          <div class="col-3 py-2 head-p bg-white text-center">
                                            <a class="trial w-100 text-center" href="#">PREMIUM</a>
                                          </div>
                                        </div>
                                       
                                        <div class="row justify-content-center">
                                          <div class="col-3 py-2 title-row text-white">
                                            <h4 class="mt-2">Features</h4>
                                          </div>
                                          <div class="col-2 py-2 prc bg-white me-1 text-center">
                                            <h3>$19.99 <sub>/Month</sub></h3>
                                          </div>
                                          <div class="col-3 py-2 prc bg-white me-1 text-center">
                                            <h3>$49.99 <sub>/Month</sub></h3>
                                          </div>
                                          <div class="col-3 py-2 prc bg-white text-center">
                                            <h3>$99.99 <sub>/Month</sub></h3>
                                          </div>
                                        </div>
                                       
                                        <div class="row justify-content-center">
                                          <div class="col-3 py-2 title-row text-white light-col">
                                            <p>In-App Promotion <img src="/assets/img/q.svg" title="Q" alt="info" /></p>
                                          </div>
                                          <div class="col-2 py-2 prc bg-gray me-1 text-center">
                                            <img src="/assets/img/check.svg" title="" alt="" />
                                          </div>
                                          <div class="col-3 py-2 prc bg-gray me-1 text-center">
                                            <img src="/assets/img/check.svg" title="" alt="" />
                                          </div>
                                          <div class="col-3 py-2 prc bg-gray text-center">
                                            <img src="/assets/img/check.svg" title="" alt="" />
                                          </div>
                                        </div>
                                       
                                        <div class="row justify-content-center">
                                          <div class="col-3 py-2 title-row text-white">
                                            <p>App Homepage Ad Placement <img src="/assets/img/q.svg" title="Q" alt="info" /></p>
                                          </div>
                                          <div class="col-2 py-2 prc bg-white me-1 text-center">
                                            <img src="/assets/img/x.svg" title="" alt="" />
                                          </div>
                                          <div class="col-3 py-2 prc bg-white me-1 text-center">
                                            <img src="/assets/img/x.svg" title="" alt="" />
                                          </div>
                                          <div class="col-3 py-2 prc bg-white text-center">
                                            <img src="/assets/img/check.svg" title="" alt="" />
                                          </div>
                                        </div>
                                      
                                        <div class="row justify-content-center">
                                          <div class="col-3 py-2 title-row text-white light-col">
                                            <p>Add A Promotional Message <img src="/assets/img/q.svg" title="Q" alt="info" /></p>
                                          </div>
                                          <div class="col-2 py-2 prc bg-gray me-1 text-center">
                                            <img src="/assets/img/x.svg" title="" alt="" />
                                          </div>
                                          <div class="col-3 py-2 prc bg-gray me-1 text-center">
                                            <img src="/assets/img/x.svg" title="" alt="" />
                                          </div>
                                          <div class="col-3 py-2 prc bg-gray text-center">
                                            <img src="/assets/img/check.svg" title="" alt="" />
                                          </div>
                                        </div>
                                        
                                        <div class="row justify-content-center">
                                          <div class="col-3 py-2 title-row text-white">
                                            <p>Real-time User Interaction Data <img src="/assets/img/q.svg" title="Q" alt="info" /></p>
                                          </div>
                                          <div class="col-2 py-2 prc bg-white me-1 text-center">
                                            <img src="/assets/img/check.svg" title="" alt="" />
                                          </div>
                                          <div class="col-3 py-2 prc bg-white me-1 text-center">
                                            <img src="/assets/img/check.svg" title="" alt="" />
                                          </div>
                                          <div class="col-3 py-2 prc bg-white text-center">
                                            <img src="/assets/img/check.svg" title="" alt="" />
                                          </div>
                                        </div>
                                        
                                        <div class="row justify-content-center">
                                          <div class="col-3 py-2 title-row text-white light-col">
                                            <p>Custom Ad Headline <img src="/assets/img/q.svg" title="Q" alt="info" /></p>
                                          </div>
                                          <div class="col-2 py-2 prc bg-gray me-1 text-center">
                                            <img src="/assets/img/x.svg" title="" alt="" />
                                          </div>
                                          <div class="col-3 py-2 prc bg-gray me-1 text-center">
                                            <img src="/assets/img/x.svg" title="" alt="" />
                                          </div>
                                          <div class="col-3 py-2 prc bg-gray text-center">
                                            <img src="/assets/img/check.svg" title="" alt="" />
                                          </div>
                                        </div>
                                        
                                        <div class="row justify-content-center">
                                          <div class="col-3 py-2 title-row text-white">
                                            <p>Add Events to Community
                                              Calendar <img src="/assets/img/q.svg" title="Q" alt="info" /></p>
                                          </div>
                                          <div class="col-2 py-2 prc bg-white me-1 text-center">
                                            <img src="/assets/img/x.svg" title="" alt="" />
                                          </div>
                                          <div class="col-3 py-2 prc bg-white me-1 text-center">
                                            <img src="/assets/img/x.svg" title="" alt="" />
                                          </div>
                                          <div class="col-3 py-2 prc bg-white text-center">
                                            <img src="/assets/img/check.svg" title="" alt="" />
                                          </div>
                                        </div>
                                        
                                        <div class="row justify-content-center">
                                          <div class="col-3 py-2 title-row text-white light-col">
                                            <p>Send Custom Offers <img src="/assets/img/q.svg" title="Q" alt="info" /></p>
                                          </div>
                                          <div class="col-2 py-2 prc bg-gray me-1 text-center">
                                            <img src="/assets/img/x.svg" title="" alt="" />
                                          </div>
                                          <div class="col-3 py-2 prc bg-gray me-1 text-center">
                                            <img src="/assets/img/x.svg" title="" alt="" />
                                          </div>
                                          <div class="col-3 py-2 prc bg-gray text-center">
                                            <h5 class="text-light">Coming soon</h5>
                                          </div>
                                        </div>
                                    
                                        <div class="row justify-content-center">
                                          <div class="col-3 py-2 title-row text-white">
                                            <p class="mt-2">30-Days Free Trial <img src="/assets/img/q.svg" title="Q" alt="info" /></p>
                                          </div>
                                          <div class="col-2 py-2 prc bg-white me-1 text-center bott-p">
                                            <a class="outlined w-100 text-center" href="#">Promote</a>
                                          </div>
                                          <div class="col-3 py-2 prc bg-white me-1 text-center bott-p">
                                            <a class="outlined w-100 text-center" href="#">Start 30-Day Free Trial</a>
                                          </div>
                                          <div class="col-3 py-2 prc bg-white text-center bott-p">
                                            <a class="outlined w-100 text-center" href="#">Start 30-Day Free Trial</a>
                                          </div>
                                        </div>
                                       
                                        <div class="row justify-content-center">
                                          <div class="col-3 py-2 text-white"> 
                                          </div>
                                          <div class="col-2 py-2 me-1 text-center ">
                                            <i><span class="text-red">*</span>Cancel Anytime</i>
                                          </div>
                                          <div class="col-3 py-2 me-1 text-center ">
                                            <i><span class="text-red">*</span>Cancel Anytime</i>
                                          </div>
                                          <div class="col-3 py-2 text-center ">
                                            <i><span class="text-red">*</span>Cancel Anytime</i>
                                          </div>
                                        </div>
                                 
                                      </div></div>
                                    <div class="tab-pane" id="year" role="tabpanel" aria-labelledby="year-tab">
                                      <div class="container py-4">
                                        <div class="row justify-content-center">
                                          <div class="col-3 py-2">
                            
                                          </div>
                                          <div class="col-2 py-2 head-p bg-white me-1 text-center">
                                            <a class="trial w-100 text-center" href="#">BASIC</a>
                                          </div>
                                          <div class="col-3 py-2 head-p bg-white me-1 text-center">
                                            <span class="recmndd">Recommended</span>
                                            <a class="btn fw-bold w-100 text-center bg-white text-black" href="#">PROFESSIONAL</a>
                                          </div>
                                          <div class="col-3 py-2 head-p bg-white text-center">
                                            <a class="trial w-100 text-center" href="#">PREMIUM</a>
                                          </div>
                                        </div>
                                   
                                        <div class="row justify-content-center">
                                          <div class="col-3 py-2 title-row text-white">
                                            <h4 class="mt-2">Features</h4>
                                          </div>
                                          <div class="col-2 py-2 prc bg-white me-1 text-center">
                                            <h3>$199.99 <sub>/Year</sub></h3>
                                          </div>
                                          <div class="col-3 py-2 prc bg-white me-1 text-center">
                                            <h3>$499.99 <sub>/Year</sub></h3>
                                          </div>
                                          <div class="col-3 py-2 prc bg-white text-center">
                                            <h3>$999.99 <sub>/Year</sub></h3>
                                          </div>
                                        </div>
                                       
                                        <div class="row justify-content-center">
                                          <div class="col-3 py-2 title-row text-white light-col">
                                            <p>In-App Promotion <img src="/assets/img/q.svg" title="Q" alt="info" /></p>
                                          </div>
                                          <div class="col-2 py-2 prc bg-gray me-1 text-center">
                                            <img src="/assets/img/check.svg" title="" alt="" />
                                          </div>
                                          <div class="col-3 py-2 prc bg-gray me-1 text-center">
                                            <img src="/assets/img/check.svg" title="" alt="" />
                                          </div>
                                          <div class="col-3 py-2 prc bg-gray text-center">
                                            <img src="/assets/img/check.svg" title="" alt="" />
                                          </div>
                                        </div>
                                     
                                        <div class="row justify-content-center">
                                          <div class="col-3 py-2 title-row text-white">
                                            <p>App Homepage Ad Placement <img src="/assets/img/q.svg" title="Q" alt="info" /></p>
                                          </div>
                                          <div class="col-2 py-2 prc bg-white me-1 text-center">
                                            <img src="/assets/img/x.svg" title="" alt="" />
                                          </div>
                                          <div class="col-3 py-2 prc bg-white me-1 text-center">
                                            <img src="/assets/img/x.svg" title="" alt="" />
                                          </div>
                                          <div class="col-3 py-2 prc bg-white text-center">
                                            <img src="/assets/img/check.svg" title="" alt="" />
                                          </div>
                                        </div>
                                       
                                        <div class="row justify-content-center">
                                          <div class="col-3 py-2 title-row text-white light-col">
                                            <p>Add A Promotional Message <img src="/assets/img/q.svg" title="Q" alt="info" /></p>
                                          </div>
                                          <div class="col-2 py-2 prc bg-gray me-1 text-center">
                                            <img src="/assets/img/x.svg" title="" alt="" />
                                          </div>
                                          <div class="col-3 py-2 prc bg-gray me-1 text-center">
                                            <img src="/assets/img/x.svg" title="" alt="" />
                                          </div>
                                          <div class="col-3 py-2 prc bg-gray text-center">
                                            <img src="/assets/img/check.svg" title="" alt="" />
                                          </div>
                                        </div>
                                    =
                                        <div class="row justify-content-center">
                                          <div class="col-3 py-2 title-row text-white">
                                            <p>Real-time User Interaction Data <img src="/assets/img/q.svg" title="Q" alt="info" /></p>
                                          </div>
                                          <div class="col-2 py-2 prc bg-white me-1 text-center">
                                            <img src="/assets/img/check.svg" title="" alt="" />
                                          </div>
                                          <div class="col-3 py-2 prc bg-white me-1 text-center">
                                            <img src="/assets/img/check.svg" title="" alt="" />
                                          </div>
                                          <div class="col-3 py-2 prc bg-white text-center">
                                            <img src="/assets/img/check.svg" title="" alt="" />
                                          </div>
                                        </div>
                                   
                                        <div class="row justify-content-center">
                                          <div class="col-3 py-2 title-row text-white light-col">
                                            <p>Custom Ad Headline <img src="/assets/img/q.svg" title="Q" alt="info" /></p>
                                          </div>
                                          <div class="col-2 py-2 prc bg-gray me-1 text-center">
                                            <img src="/assets/img/x.svg" title="" alt="" />
                                          </div>
                                          <div class="col-3 py-2 prc bg-gray me-1 text-center">
                                            <img src="/assets/img/x.svg" title="" alt="" />
                                          </div>
                                          <div class="col-3 py-2 prc bg-gray text-center">
                                            <img src="/assets/img/check.svg" title="" alt="" />
                                          </div>
                                        </div>
                                  
                                        <div class="row justify-content-center">
                                          <div class="col-3 py-2 title-row text-white">
                                            <p>Add Events to Community
                                              Calendar <img src="/assets/img/q.svg" title="Q" alt="info" /></p>
                                          </div>
                                          <div class="col-2 py-2 prc bg-white me-1 text-center">
                                            <img src="/assets/img/x.svg" title="" alt="" />
                                          </div>
                                          <div class="col-3 py-2 prc bg-white me-1 text-center">
                                            <img src="/assets/img/x.svg" title="" alt="" />
                                          </div>
                                          <div class="col-3 py-2 prc bg-white text-center">
                                            <img src="/assets/img/check.svg" title="" alt="" />
                                          </div>
                                        </div>
                                    
                                        <div class="row justify-content-center">
                                          <div class="col-3 py-2 title-row text-white light-col">
                                            <p>Send Custom Offers <img src="/assets/img/q.svg" title="Q" alt="info" /></p>
                                          </div>
                                          <div class="col-2 py-2 prc bg-gray me-1 text-center">
                                            <img src="/assets/img/x.svg" title="" alt="" />
                                          </div>
                                          <div class="col-3 py-2 prc bg-gray me-1 text-center">
                                            <img src="/assets/img/x.svg" title="" alt="" />
                                          </div>
                                          <div class="col-3 py-2 prc bg-gray text-center">
                                            <h5 class="text-light">Coming soon</h5>
                                          </div>
                                        </div>
                                     
                                        <div class="row justify-content-center">
                                          <div class="col-3 py-2 title-row text-white">
                                            <p class="mt-2">30-Days Free Trial <img src="/assets/img/q.svg" title="Q" alt="info" /></p>
                                          </div>
                                          <div class="col-2 py-2 prc bg-white me-1 text-center bott-p">
                                            <a class="outlined w-100 text-center" href="#">Promote</a>
                                          </div>
                                          <div class="col-3 py-2 prc bg-white me-1 text-center bott-p">
                                            <a class="outlined w-100 text-center" href="#">Start 30-Day Free Trial</a>
                                          </div>
                                          <div class="col-3 py-2 prc bg-white text-center bott-p">
                                            <a class="outlined w-100 text-center" href="#">Start 30-Day Free Trial</a>
                                          </div>
                                        </div>
                                  
                                        <div class="row justify-content-center">
                                          <div class="col-3 py-2 text-white"> 
                                          </div>
                                          <div class="col-2 py-2 me-1 text-center ">
                                            <i><span class="text-red">*</span>Cancel Anytime</i>
                                          </div>
                                          <div class="col-3 py-2 me-1 text-center ">
                                            <i><span class="text-red">*</span>Cancel Anytime</i>
                                          </div>
                                          <div class="col-3 py-2 text-center ">
                                            <i><span class="text-red">*</span>Cancel Anytime</i>
                                          </div>
                                        </div>
                                      </div>  
                                    </div>
                                </div>
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
 
    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>

    
    <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <a class="btn btn-primary" href="login.html">Logout</a>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default Dashboard
