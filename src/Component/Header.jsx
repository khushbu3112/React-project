import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Header() {

  const redirect = useNavigate();
  const logout = () => {
    localStorage.removeItem('userid');
    localStorage.removeItem('username');
    toast.success('Logout Success !');
    return redirect('/');
  }
  return (
    <div>

      {/* ***** Header Area Start ***** */}
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* ***** Logo Start ***** */}
                <a href="index.html" className="logo">
                  <img src="assets/images/logo.png" />
                </a>
                {/* ***** Logo End ***** */}
                {/* ***** Menu Start ***** */}
                <ul className="nav">
                  <li className="scroll-href-section"><a href="/" className="active">Home</a></li>
                  <li className="scroll-href-section"><a href="#men">Men's</a></li>
                  <li className="scroll-href-section"><a href="#women">Women's</a></li>
                  <li className="scroll-href-section"><a href="#kids">Kid's</a></li>
                  <li className="submenu">
                    <a href="javascript:void(0)">Pages</a>
                    <ul>
                      <li><a href="/about">About Us</a></li>
                      <li><a href="/product">Products</a></li>
                      <li><a href="/single_product">Single Product</a></li>
                      <li><a href="/contact">Contact Us</a></li>

                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="javascript:void(0)">Features</a>
                    <ul>
                      <li><a href="#">Features Page 1</a></li>
                      <li><a href="#">Features Page 2</a></li>
                      <li><a href="#">Features Page 3</a></li>
                      <li><a rel="nofollow" href="https://templatemo.com/page/4">Template Page 4</a></li>
                    </ul>
                  </li>
                  <li className="scroll-href-section"><a href="#explore">Explore</a></li>
                  {/* <li><a href="/login">Login</a></li>
                  <li><a href="/signup">Signup</a></li> */}
                  <li><a href="/profile">Profile</a></li>


                  {/* Login section  */}
                  <div className="user_option">
                    {(() => {
                      if (localStorage.getItem("userid")) {
                        return (
                          <>
                            <Link to="/profile">
                              <i className="fa fa-user" aria-hidden="true" />
                              <span>{localStorage.getItem("")}</span>
                            </Link>
                            <a href="javascript:void(0)" onClick={logout}>
                              <span>Logout</span>
                            </a>
                          </>
                        );
                      } else {
                        return (
                          <>
                            <Link to="/login">
                              <i className="fa fa-user mt-3 " aria-hidden="true" />
                              <span>Login</span>
                            </Link>
                          </>
                        );
                      }
                    })()}

                    <NavLink href>
                      {/* <i className="fa fa-shopping-bag" aria-hidden="true" /> */}
                    </NavLink>
                    <form className="form-inline ">
                      <button className="btn nav_search-btn " type="submit">
                        <i className="fa fa-search ml-5 mb-5 " aria-hidden="true" />
                      </button>
                    </form>
                  </div>

                  {/* login section end  */}
                </ul>

                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
                {/* ***** Menu End ***** */}
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* ***** Header Area End ***** */}

    </div>

  )
}

export default Header

