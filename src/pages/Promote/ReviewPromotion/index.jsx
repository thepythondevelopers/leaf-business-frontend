import React, { useEffect, useState } from 'react'
import { useParams , useNavigate , useLocation } from 'react-router-dom'
// import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
// import {CardElement} from '@stripe/react-stripe-js';
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';


const ReviewPromotion = () =>{



const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

    let params = useLocation();

    console.log(params.state)

      const navigate = useNavigate()




      const [promotionData , setPromotionData] = useState({
        businessId : params.state.businessId ,
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


      const stripe = useStripe();
      const elements = useElements();
    
      const handleSubmit = async (event) => {
        // We don't want to let default form submission happen here,
        // which would refresh the page.
        event.preventDefault();
    
        if (!stripe || !elements) {
          // Stripe.js has not yet loaded.
          // Make  sure to disable form submission until Stripe.js has loaded.
          console.log("not loaded")
          return;
        }
    
        const card = elements.getElement(CardElement);
        const result = await stripe.createToken(card);
    
        if (result.error) {
          // Show error to your customer.
          console.log(result.error.message);
        } else {
          // Send the token to your server.
          // This function does not exist yet; we will define it in the next step.
          stripeTokenHandler(result.token);
        }
      };

      async function stripeTokenHandler(token) {
        const paymentData = {token: token.id};

        console.log(paymentData);
        return
      
        // Use fetch to send the token ID and any other payment data to your server.
        // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        const response = await fetch('/charge', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(paymentData),
        });
      
        // Return and display the result of the charge.
        return response.json();
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
    
      <ul className="pt-4 px-3 navbar-nav bg-white sidebar-light sidebar accordion" id="accordionSidebar">
        <li className="nav-item active">
          <a className="nav-link" href="index.html">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Home</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="users.html">
            <i className="fas fa-fw fa-user-alt"></i>
            <span>Activity</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="plans.html">
            <i className="fas fa-fw fa-list-alt"></i>
            <span>Business Profile</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="notifications.html">
            <i className="fas fas fa-bell fa-fw"></i>
            <span>Events</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="subscriptions.html">
            <i className="fas fa-fw fa-table"></i>
            <span>Offers</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="subscriptions.html">
            <i className="fas fa-fw fa-table"></i>
            <span>Collections</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="subscriptions.html">
            <i className="fas fa-fw fa-table"></i>
            <span>Billing</span></a>
        </li>
        <hr style={{borderTop: '1px solid #ddd' , width: '100%'}} />
        <li className="nav-item no-bg">
          <a className="nav-link" href="subscriptions.html">
            <i className="fas fa-fw fa-table"></i>
            <span>Settings</span></a>
        </li>
  
      </ul>

    <div id="content-wrapper" class="d-flex flex-column">
   
      <div id="content">
        <div class="container-fluid py-5">
          <section class="content-area py-5 bg-lighter">
        
            <div class="container test">
              <div class="row d-sm-flex align-items-center mb-5">
                <h1 class="h1 mb-0 text-center">Summary</h1>
              </div>
              <div class="row">
                
              <div class="col-md-4 order-md-1">
                  <div class="row justify-content-left">
                  <div class="col-md-4 mb-4">

                    <img class="img-profile summary rounded-circle" src="/assets/img/undraw_profile.svg"/>
                  </div>
                  </div>
                 <p class="mb-4"><strong>Start Day:</strong> {params.state?.start_date}  &nbsp; &nbsp; <strong>End Day:</strong> {params.state?.end_date}</p>
                 <p class="mb-4"><strong>Business Headline:</strong> {params.state?.headline}</p>
                 <p class="mb-4"><strong>Name:</strong> {params.state?.name}</p>
                 <p class="mb-4"><strong>Email:</strong>{params.state?.email}</p>
                 <p class="mb-2"><strong>Action Note:</strong></p>
                 <p>{params.state?.action_note}</p>
                </div>
                <div class="col-md-8 order-md-1">
                    <h4 class="mb-3">Billing address</h4>
                        <form class="needs-validation" novalidate>
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="firstName">First name</label>
            <input type="text" class="form-control" id="firstName" placeholder="" value="" required/>
                <div class="invalid-feedback">
                    Valid first name is required.
                </div>
            </div>
          <div class="col-md-6 mb-3">
            <label for="lastName">Last name</label>
            <input type="text" class="form-control" id="lastName" placeholder="" value="" required/>
                <div class="invalid-feedback">
                Valid last name is required.
                </div>
            </div>
        <div class="mb-3">
          <label for="username">Username</label>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">@</span>
            </div>
            <input type="text" class="form-control" id="username" placeholder="Username" required/>
            <div class="invalid-feedback" style={{width: "100%"}}>
              Your username is required.
            </div>
          </div>
        </div>

        <div class="mb-3">
          <label for="email">Email <span class="text-muted">(Optional)</span></label>
          <input type="email" class="form-control" id="email" placeholder="you@example.com"/>
          <div class="invalid-feedback">
            Please enter a valid email address for shipping updates.
          </div>
        </div>

        <div class="mb-3">
          <label for="address">Address</label>
          <input type="text" class="form-control" id="address" placeholder="1234 Main St" required/>
          <div class="invalid-feedback">
            Please enter your shipping address.
          </div>
        </div>

        <div class="mb-3">
          <label for="address2">Address 2 <span class="text-muted">(Optional)</span></label>
          <input type="text" class="form-control" id="address2" placeholder="Apartment or suite"/>
        </div>

        <div class="row">
          <div class="col-md-5 mb-3">
            <label for="country">Country</label>
            <select class="custom-select d-block w-100" id="country" required>
              <option value="">Choose...</option>
              <option>United States</option>
            </select>
            <div class="invalid-feedback">
              Please select a valid country.
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <label for="state">State</label>
            <select class="custom-select d-block w-100" id="state" required>
              <option value="">Choose...</option>
              <option>California</option>
            </select>
            <div class="invalid-feedback">
              Please provide a valid state.
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <label for="zip">Zip</label>
            <input type="text" class="form-control" id="zip" placeholder="" required/>
            <div class="invalid-feedback">
              Zip code required.
            </div>
          </div>
        </div>
        <hr class="mb-4"/>
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="same-address"/>
          <label class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
        </div>
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="save-info"/>
          <label class="custom-control-label" for="save-info">Save this information for next time</label>
        </div>
        <hr class="mb-4"/>

        <h4 class="mb-3">Payment</h4>

        <div class="d-block my-3">
            <div class="custom-control custom-radio">
                <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required/>
                <label class="custom-control-label" for="credit">Credit card</label>
            </div>
            <div class="custom-control custom-radio">
                <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required/>
                <label class="custom-control-label" for="debit">Debit card</label>
            </div>
            <div class="custom-control custom-radio">
                <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required/>
                <label class="custom-control-label" for="paypal">PayPal</label>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6 mb-3">
                <label for="cc-name">Name on card</label>
                <input type="text" class="form-control" id="cc-name" placeholder="" required/>
                <small class="text-muted">Full name as displayed on card</small>
                <div class="invalid-feedback">
                Name on card is required
                </div>
            </div>
            <div class="col-md-6 mb-3">
                <label for="cc-number">Credit card number</label>
                <input type="text" class="form-control" id="cc-number" placeholder="" required/>
                <div class="invalid-feedback">
                Credit card number is required
                </div>
            </div>
        </div>
            <div class="row">
                <div class="col-md-3 mb-3">
                    <label for="cc-expiration">Expiration</label>
                    <input type="text" class="form-control" id="cc-expiration" placeholder="" required/>
                    <div class="invalid-feedback">
                    Expiration date required
                    </div>
                </div>
                <div class="col-md-3 mb-3">
                    <label for="cc-cvv">CVV</label>
                    <input type="text" class="form-control" id="cc-cvv" placeholder="" required/>
                    <div class="invalid-feedback">
                    Security code required
                    </div>
                </div>
            </div>
            <hr class="mb-4"/>
            <button class="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
            </div>
      </form>
      <form onSubmit={handleSubmit}>
      <CardElement options={CARD_ELEMENT_OPTIONS} />
      <button disabled={!stripe}>Confirm order</button>
        </form>
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

export default ReviewPromotion