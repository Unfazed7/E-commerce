import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';

const home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img 
                     src="images/main-banner.jpg"
                     className="img-fluid rounded-3" 
                     alt="main banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>Lightning Deals On</h4>
                  <h5>Men's Oversized</h5>
                  <p>From Rs499 </p>
                  <Link className="button">BUY NOW</Link>
                </div> 
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner-1 position-relative">
                <img 
                     src="images/catbanner-01.jpg"
                     className="img-fluid rounded-3" 
                     alt="main banner"
                />
                <div className="small-banner-content-1 position-absolute">
                  <h4>BEST SALE</h4>
                  <h5>WinterWear</h5>
                  <p>From Rs199</p>
                  
                </div> 
              </div>
              <div className="small-banner-2 position-relative">
                <img 
                     src="images/catbanner-02.jpg"
                     className="img-fluid rounded-3" 
                     alt="main banner"
                />
                <div className="small-banner-content-2 position-absolute">
                  <h4>15% OFF</h4>
                  <h5>Basic Tees</h5>
                  <p>Shop the latest styles </p>
                  
                </div> 
              </div>
              <div className="small-banner-3 position-relative">
                <img 
                     src="images/catbanner-03.jpg"
                     className="img-fluid rounded-3" 
                     alt="main banner"
                />
                <div className="small-banner-content-3 position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>Mens EthnicWear</h5>
                  <p>From Rs999 </p>
                  
                </div> 
              </div>
              <div className="small-banner-4 position-relative ">
                <img 
                     src="images/catbanner-04.jpg"
                     className="img-fluid rounded-3" 
                     alt="main banner"
                />
                <div className="small-banner-content-4 position-absolute">
                  <h4>Big Discounts</h4>
                  <h5>Men's Formals</h5>
                  <p>High-fifelity playback</p>
                  
                </div> 
              </div>
              
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
               <img src="images/service.png" alt="services" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all orders over 1490 Rs</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
               <img src="images/service-02.png" alt="services" />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className="mb-0">Save upto 50%</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
               <img src="images/service-03.png" alt="services" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
               <img src="images/service-04.png" alt="services" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get Factory direct prices</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
               <img src="images/service-05.png" alt="services" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% Protected Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera"/>
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart TV</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="camera"/>
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera"/>
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera"/>
              </div> 
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera"/>
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart TV</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="camera"/>
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera"/>
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera"/>
              </div> 
            </div>   
          </div>
        </div>
      </div>
      </section>
      <section className="marque-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                  <Marquee className="d-flex">
                    <div className="mx-4 w-25">
                      <img src="images/brand-01.png" alt="brand"/>
                    </div>
                    <div className="mx-4 w-25">
                      <img src="images/brand-02.png" alt="brand"/>
                    </div>
                    <div className="mx-4 w-25">
                      <img src="images/brand-03.png" alt="brand"/>
                    </div>
                    <div className="mx-4 w-25">
                      <img src="images/brand-04.png" alt="brand"/>
                    </div>
                    <div className="mx-4 w-25">
                      <img src="images/brand-05.png" alt="brand"/>
                    </div>
                    <div className="mx-4 w-25">
                      <img src="images/brand-06.png" alt="brand"/>
                    </div>
                  </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Featured Collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Latest Blogs</h3>
            </div>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
          </div>
        </div>
      </section>
    </>
  );
};

export default home
