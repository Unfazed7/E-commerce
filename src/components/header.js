import React from 'react';
import {NavLink, Link} from "react-router-dom";
import {BsSearch} from "react-icons/bs";


const header = () => {
  return (
    <>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white">Yaari.</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group ">
                <input type="text"
                       className="form-control py-2"
                       placeholder="Search Product Here...."
                       aria-label="Search Product Here...."
                       aria-describedby="basic-addon2"/> 
              <span className="input-group-text p-3" id="basic-addon2">
                <BsSearch className="fs-6"/>
              </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src="images/compare.svg" alt="compare"/>
                    <p className="mb-0">Compare <br/> Products</p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src="images/wishlist.svg" alt="wishlist"/>
                    <p className="mb-0">Favourite <br/>Wishlist</p>
                  </Link>
                </div>
                <div>
                  <Link to="../components/login.js" className="d-flex align-items-center gap-10 text-white">
                    <img src="images/user.svg" alt="User"/>
                    <p className="mb-0">Log in <br/> My Account</p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src="images/cart.svg"alt="Cart"/>
                    <div className="d-flex flex-column">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">₹500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="row">
          <div className="col-12">
           <div className="menu-bottom d-flex align-items-center gap-30">
            <div>
             <div class="dropdown">
                      <button class="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                              type="button" 
                              data-bs-toggle="dropdown" 
                              aria-expanded="false">
                        <img src="images/menu.svg" alt="Menu"/> 
                        <span className="me-5 d-inline-block">Shop Categories</span>
                      </button>
              <ul className="dropdown-menu">
              <li><Link className="dropdown-item text-white" to="#">Action</Link></li>
              <li><Link className="dropdown-item text-white" to="#">Another action</Link></li>
              <li><Link className="dropdown-item text-white" to="#">Something else here</Link></li>
              </ul>
            </div>
          </div>
              <div className="menu-links">
                <div className="d-flex align-items-center gap-30 text-white">
                  <NavLink className="text-white" to="/pages/home.js"> Home </NavLink>
                  <NavLink className="text-white" to="/pages/about.js"> Our Stores </NavLink>
                  <NavLink className="text-white" to="/pages/contact.js"> Blogs </NavLink>
                </div>
              </div>
             </div>          
            </div>
          </div>
      </header>
    </>
  )
}

export default header
