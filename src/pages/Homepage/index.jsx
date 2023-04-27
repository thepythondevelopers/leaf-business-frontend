import React from 'react'
import Header from '../../components/Header/Header'

const Homepage = () =>{
    return(
    <>
    <Header/>

    <section id="hero" class="hero">
    <div class="container position-relative my-5">
      <div class="row gy-5 justify-content-left" data-aos="fade-in">
        <div class="col-lg-6 order-2 order-lg-1 d-flex caption flex-column justify-content-left text-left">
          <h2>Make plans with your<br />
            <span class="green-text">next customer</span>
          </h2>
          <p> People come to Leaf to make plans with the people and places they love, including businesses like yours.
            Maximize your advertising ROI by reaching users at the moment they plan to go out.</p>
          <div class="d-flex justify-content-left justify-content-lg-left">
            <a href="#" class="btn-custom-blu">Promote your business</a>
          </div>
        </div>
        <div class="col-lg-6 order-1 order-lg-2 d-flex flex-column justify-content-center text-center">

        </div>
      </div>
    </div>
  </section>


  <main id="main">
    <section class="content-area curved-bg pb-0">
      <div class="container">
        <div class="row gy-4 justify-content-between">
          <div class="col-lg-6">
            <img src="/assets/img/devices.png" class="img-fluid rounded-4 mb-4" alt=""/>
          </div>

          <div class="col-lg-6 text-white">
            <h2 class="mb-4">Quick and simple
              execution</h2>

            <p class="mb-5 text-white">There’s no keyword research or design work needed. We’ll create, launch, and
              optimize your promotion within the app. Set it and forget it.</p>
            <a href="#" class="btn-light">Start a free trial</a>
          </div>
        </div>
      </div>
    </section>
    
    <section class="content-area pt-0">

      <div class="container">
        <div class="row pb-2 justify-content-between">

          <div class="col-lg-6 pt-5">
            <h2>Data that helps your
              business run</h2>

            <p class="mb-4">Understand how visitors interact with your brick & mortar - from plan creation to checkout.
              Make your business better with actionable feedback from visitors. Better manage slow times with stats
              around optional days & times for larger groups.</p>
            <a href="#" class="btn-custom-blu">Start a free trial</a>
          </div>
          <div class="col-lg-6">
            <img src="/assets/img/img-1.png" class="img-fluid rounded-4 mb-4" alt=""/>
          </div>
        </div>
      </div>
    </section>
 
    <section class="content-area curved-bg-btm pt-0 pb-5">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-lg-6">
            <img src="/assets/img/img-2.png" class="img-fluid rounded-4 mb-4" alt=""/>
          </div>

          <div class="col-lg-6 text-white pt-3">
            <h2 class="mb-4 pt-5 mt-5">People come to leaf
              to make plans</h2>

            <p class="mb-5 text-white">Have better certainly about your marketing spend with fixed-priced promotions.
              Upfront pricing starts at as little as $0.60 a day. So whether you promote your brick & mortar for a month
              or a full year, the rate remains the same.</p>
            <a href="#" class="btn-light">View Pricing</a>
          </div>
        </div>
      </div>
    </section>

    <section class="content-area py-5 bg-lighter">
      <h2 class="text-center">Pricing</h2>

      <div class="container test">
        <div class="row">
          <div class="col-md-12">
            <div class="tab-container-one">
              <div class="row justify-content-center">
                <div class="col-md-3 bg-white radius mb-5">
                  <ul class="nav nav-tabs border-0 text-center" id="myTab" role="tablist">
                    <li class="nav-item active"><a class="nav-link active" href="#month" role="tab"
                        aria-controls="month" data-bs-toggle="tab">Monthly</a></li>
                    <li class="nav-item"><a class="nav-link" href="#year" role="tab" aria-controls="year"
                        data-bs-toggle="tab">Annually </a></li>
                  </ul>
                </div>

              </div>

              <div class="tab-content">
                <div class="tab-pane active" id="month" role="tabpanel" aria-labelledby="month-tab">
                  <div class="container py-4">
           
                    <div class="row justify-content-center">
                      <div class="col-4 py-2">

                      </div>
                      <div class="col-2 py-2 head-p bg-white me-1 text-center">
                        <a class="trial w-100 text-center" href="#">BASIC</a>
                      </div>
                      <div class="col-3 py-2 head-p bg-white me-1 text-center">
                        <span class="recmndd">Recommended</span>
                        <a class="btn fw-bold w-100 text-center bg-white text-black" href="#">PROFESSIONAL</a>
                      </div>
                      <div class="col-2 py-2 head-p bg-white text-center">
                        <a class="trial w-100 text-center" href="#">PREMIUM</a>
                      </div>
                    </div>
                  
                    <div class="row justify-content-center">
                      <div class="col-4 py-2 title-row text-white">
                        <h4 class="mt-2">Features</h4>
                      </div>
                      <div class="col-2 py-2 prc bg-white me-1 text-center">
                        <h3>$19.99 <sub>/Month</sub></h3>
                      </div>
                      <div class="col-3 py-2 prc bg-white me-1 text-center">
                        <h3>$49.99 <sub>/Month</sub></h3>
                      </div>
                      <div class="col-2 py-2 prc bg-white text-center">
                        <h3>$99.99 <sub>/Month</sub></h3>
                      </div>
                    </div>
                    <div class="row justify-content-center">
                      <div class="col-4 py-2 title-row text-white light-col">
                        <p>In-App Promotion <img src="assets/img/q.svg" title="Q" alt="info" /></p>
                      </div>
                      <div class="col-2 py-2 prc bg-gray me-1 text-center">
                        <img src="assets/img/check.svg" title="" alt="" />
                      </div>
                      <div class="col-3 py-2 prc bg-gray me-1 text-center">
                        <img src="assets/img/check.svg" title="" alt="" />
                      </div>
                      <div class="col-2 py-2 prc bg-gray text-center">
                        <img src="assets/img/check.svg" title="" alt="" />
                      </div>
                    </div>
                 
                    <div class="row justify-content-center">
                      <div class="col-4 py-2 title-row text-white">
                        <p>App Homepage Ad Placement <img src="assets/img/q.svg" title="Q" alt="info" /></p>
                      </div>
                      <div class="col-2 py-2 prc bg-white me-1 text-center">
                        <img src="assets/img/x.svg" title="" alt="" />
                      </div>
                      <div class="col-3 py-2 prc bg-white me-1 text-center">
                        <img src="assets/img/x.svg" title="" alt="" />
                      </div>
                      <div class="col-2 py-2 prc bg-white text-center">
                        <img src="assets/img/check.svg" title="" alt="" />
                      </div>
                    </div>
                   
                    <div class="row justify-content-center">
                      <div class="col-4 py-2 title-row text-white light-col">
                        <p>Add A Promotional Message <img src="assets/img/q.svg" title="Q" alt="info" /></p>
                      </div>
                      <div class="col-2 py-2 prc bg-gray me-1 text-center">
                        <img src="assets/img/x.svg" title="" alt="" />
                      </div>
                      <div class="col-3 py-2 prc bg-gray me-1 text-center">
                        <img src="assets/img/x.svg" title="" alt="" />
                      </div>
                      <div class="col-2 py-2 prc bg-gray text-center">
                        <img src="assets/img/check.svg" title="" alt="" />
                      </div>
                    </div>
                   
                    <div class="row justify-content-center">
                      <div class="col-4 py-2 title-row text-white">
                        <p>Real-time User Interaction Data <img src="assets/img/q.svg" title="Q" alt="info" /></p>
                      </div>
                      <div class="col-2 py-2 prc bg-white me-1 text-center">
                        <img src="assets/img/check.svg" title="" alt="" />
                      </div>
                      <div class="col-3 py-2 prc bg-white me-1 text-center">
                        <img src="assets/img/check.svg" title="" alt="" />
                      </div>
                      <div class="col-2 py-2 prc bg-white text-center">
                        <img src="assets/img/check.svg" title="" alt="" />
                      </div>
                    </div>
                
                    <div class="row justify-content-center">
                      <div class="col-4 py-2 title-row text-white light-col">
                        <p>Custom Ad Headline <img src="assets/img/q.svg" title="Q" alt="info" /></p>
                      </div>
                      <div class="col-2 py-2 prc bg-gray me-1 text-center">
                        <img src="assets/img/x.svg" title="" alt="" />
                      </div>
                      <div class="col-3 py-2 prc bg-gray me-1 text-center">
                        <img src="assets/img/x.svg" title="" alt="" />
                      </div>
                      <div class="col-2 py-2 prc bg-gray text-center">
                        <img src="assets/img/check.svg" title="" alt="" />
                      </div>
                    </div>
                    
                    <div class="row justify-content-center">
                      <div class="col-4 py-2 title-row text-white">
                        <p>Add Events to Community
                          Calendar <img src="assets/img/q.svg" title="Q" alt="info" /></p>
                      </div>
                      <div class="col-2 py-2 prc bg-white me-1 text-center">
                        <img src="assets/img/x.svg" title="" alt="" />
                      </div>
                      <div class="col-3 py-2 prc bg-white me-1 text-center">
                        <img src="/assets/img/x.svg" title="" alt="" />
                      </div>
                      <div class="col-2 py-2 prc bg-white text-center">
                        <img src="/assets/img/check.svg" title="" alt="" />
                      </div>
                    </div>
                   
                    <div class="row justify-content-center">
                      <div class="col-4 py-2 title-row text-white light-col">
                        <p>Send Custom Offers <img src="/assets/img/q.svg" title="Q" alt="info" /></p>
                      </div>
                      <div class="col-2 py-2 prc bg-gray me-1 text-center">
                        <img src="/assets/img/x.svg" title="" alt="" />
                      </div>
                      <div class="col-3 py-2 prc bg-gray me-1 text-center">
                        <img src="/assets/img/x.svg" title="" alt="" />
                      </div>
                      <div class="col-2 py-2 prc bg-gray text-center">
                        <h5 class="text-light">Coming soon</h5>
                      </div>
                    </div>
                  
                    <div class="row justify-content-center">
                      <div class="col-4 py-2 title-row text-white">
                        <p class="mt-2">30-Days Free Trial <img src="assets/img/q.svg" title="Q" alt="info" /></p>
                      </div>
                      <div class="col-2 py-2 prc bg-white me-1 text-center bott-p">
                        <a class="outlined w-100 text-center" href="#">Promote</a>
                      </div>
                      <div class="col-3 py-2 prc bg-white me-1 text-center bott-p">
                        <a class="outlined w-100 text-center" href="#">Start 30-Day Free Trial</a>
                      </div>
                      <div class="col-2 py-2 prc bg-white text-center bott-p">
                        <a class="outlined w-100 text-center" href="#">Start 30-Day Free Trial</a>
                      </div>
                    </div>
            
                  </div>
                </div>
                <div class="tab-pane" id="year" role="tabpanel" aria-labelledby="year-tab">
                  <div class="container py-4">

                    <div class="row justify-content-center">
                      <div class="col-4 py-2">

                      </div>
                      <div class="col-2 py-2 head-p bg-white me-1 text-center">
                        <a class="trial w-100 text-center" href="#">BASIC</a>
                      </div>
                      <div class="col-3 py-2 head-p bg-white me-1 text-center">
                        <span class="recmndd">Recommended</span>
                        <a class="btn fw-bold w-100 text-center bg-white text-black" href="#">PROFESSIONAL</a>
                      </div>
                      <div class="col-2 py-2 head-p bg-white text-center">
                        <a class="trial w-100 text-center" href="#">PREMIUM</a>
                      </div>
                    </div>
      
                    <div class="row justify-content-center">
                      <div class="col-4 py-2 title-row text-white">
                        <h4 class="mt-2">Features</h4>
                      </div>
                      <div class="col-2 py-2 prc bg-white me-1 text-center">
                        <h3>$199.99 <sub>/Year</sub></h3>
                      </div>
                      <div class="col-3 py-2 prc bg-white me-1 text-center">
                        <h3>$499.99 <sub>/Year</sub></h3>
                      </div>
                      <div class="col-2 py-2 prc bg-white text-center">
                        <h3>$999.99 <sub>/Year</sub></h3>
                      </div>
                    </div>
         
                    <div class="row justify-content-center">
                      <div class="col-4 py-2 title-row text-white light-col">
                        <p>In-App Promotion <img src="assets/img/q.svg" title="Q" alt="info" /></p>
                      </div>
                      <div class="col-2 py-2 prc bg-gray me-1 text-center">
                        <img src="/assets/img/check.svg" title="" alt="" />
                      </div>
                      <div class="col-3 py-2 prc bg-gray me-1 text-center">
                        <img src="/assets/img/check.svg" title="" alt="" />
                      </div>
                      <div class="col-2 py-2 prc bg-gray text-center">
                        <img src="/assets/img/check.svg" title="" alt="" />
                      </div>
                    </div>
                 
                    <div class="row justify-content-center">
                      <div class="col-4 py-2 title-row text-white">
                        <p>App Homepage Ad Placement <img src="assets/img/q.svg" title="Q" alt="info" /></p>
                      </div>
                      <div class="col-2 py-2 prc bg-white me-1 text-center">
                        <img src="assets/img/x.svg" title="" alt="" />
                      </div>
                      <div class="col-3 py-2 prc bg-white me-1 text-center">
                        <img src="assets/img/x.svg" title="" alt="" />
                      </div>
                      <div class="col-2 py-2 prc bg-white text-center">
                        <img src="assets/img/check.svg" title="" alt="" />
                      </div>
                    </div>
      
                    <div class="row justify-content-center">
                      <div class="col-4 py-2 title-row text-white light-col">
                        <p>Add A Promotional Message <img src="assets/img/q.svg" title="Q" alt="info" /></p>
                      </div>
                      <div class="col-2 py-2 prc bg-gray me-1 text-center">
                        <img src="assets/img/x.svg" title="" alt="" />
                      </div>
                      <div class="col-3 py-2 prc bg-gray me-1 text-center">
                        <img src="assets/img/x.svg" title="" alt="" />
                      </div>
                      <div class="col-2 py-2 prc bg-gray text-center">
                        <img src="assets/img/check.svg" title="" alt="" />
                      </div>
                    </div>
         
                    <div class="row justify-content-center">
                      <div class="col-4 py-2 title-row text-white">
                        <p>Real-time User Interaction Data <img src="assets/img/q.svg" title="Q" alt="info" /></p>
                      </div>
                      <div class="col-2 py-2 prc bg-white me-1 text-center">
                        <img src="assets/img/check.svg" title="" alt="" />
                      </div>
                      <div class="col-3 py-2 prc bg-white me-1 text-center">
                        <img src="assets/img/check.svg" title="" alt="" />
                      </div>
                      <div class="col-2 py-2 prc bg-white text-center">
                        <img src="assets/img/check.svg" title="" alt="" />
                      </div>
                    </div>
                
                    <div class="row justify-content-center">
                      <div class="col-4 py-2 title-row text-white light-col">
                        <p>Custom Ad Headline <img src="assets/img/q.svg" title="Q" alt="info" /></p>
                      </div>
                      <div class="col-2 py-2 prc bg-gray me-1 text-center">
                        <img src="assets/img/x.svg" title="" alt="" />
                      </div>
                      <div class="col-3 py-2 prc bg-gray me-1 text-center">
                        <img src="assets/img/x.svg" title="" alt="" />
                      </div>
                      <div class="col-2 py-2 prc bg-gray text-center">
                        <img src="assets/img/check.svg" title="" alt="" />
                      </div>
                    </div>
             
                    <div class="row justify-content-center">
                      <div class="col-4 py-2 title-row text-white">
                        <p>Add Events to Community
                          Calendar <img src="assets/img/q.svg" title="Q" alt="info" /></p>
                      </div>
                      <div class="col-2 py-2 prc bg-white me-1 text-center">
                        <img src="assets/img/x.svg" title="" alt="" />
                      </div>
                      <div class="col-3 py-2 prc bg-white me-1 text-center">
                        <img src="assets/img/x.svg" title="" alt="" />
                      </div>
                      <div class="col-2 py-2 prc bg-white text-center">
                        <img src="assets/img/check.svg" title="" alt="" />
                      </div>
                    </div>
                
                    <div class="row justify-content-center">
                      <div class="col-4 py-2 title-row text-white light-col">
                        <p>Send Custom Offers <img src="assets/img/q.svg" title="Q" alt="info" /></p>
                      </div>
                      <div class="col-2 py-2 prc bg-gray me-1 text-center">
                        <img src="assets/img/x.svg" title="" alt="" />
                      </div>
                      <div class="col-3 py-2 prc bg-gray me-1 text-center">
                        <img src="assets/img/x.svg" title="" alt="" />
                      </div>
                      <div class="col-2 py-2 prc bg-gray text-center">
                        <h5 class="text-light">Coming soon</h5>
                      </div>
                    </div>
                    
                    <div class="row justify-content-center">
                      <div class="col-4 py-2 title-row text-white">
                        <p class="mt-2">30-Days Free Trial <img src="assets/img/q.svg" title="Q" alt="info" /></p>
                      </div>
                      <div class="col-2 py-2 prc bg-white me-1 text-center bott-p">
                        <a class="outlined w-100 text-center" href="#">Promote</a>
                      </div>
                      <div class="col-3 py-2 prc bg-white me-1 text-center bott-p">
                        <a class="outlined w-100 text-center" href="#">Start 30-Day Free Trial</a>
                      </div>
                      <div class="col-2 py-2 prc bg-white text-center bott-p">
                        <a class="outlined w-100 text-center" href="#">Start 30-Day Free Trial</a>
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
  </main>
  

  <footer id="footer" class="footer">
    <div class="container">
      <div class="row gy-3 text-center">
        <div class="col-lg-12 footer-links">
          <img src="assets/img/logo-white.png" title="Leaf" alt="" />
        </div>
        <hr class="bg-white" />
        <div class="col-lg-12 footer-links text-white">
          <p>Copyright 2023 Leaf for Business. All rights reserved.</p>
        </div>
      </div>
      </div>
  </footer>


</>
)
}


export default Homepage