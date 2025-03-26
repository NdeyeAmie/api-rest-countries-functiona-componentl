import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
  return (
  <section id="header">
    <Link to="#"><img src="/img/logo.png" class="logo" alt=""/></Link>

    <div>
        <ul id="navbar">
            <li><Link className="active" to="/">Home</Link></li>
            <li><Link to="shop.html">Shop</Link></li>
            <li><Link to="blog.html">Blog</Link></li>
            <li><Link to="/">Linkbout</Link></li>
            <li><Link to="contact.html">Contact</Link></li>
            <li id="lg-bag"><a href="cart.html"><i class='bx bx-cart'></i><span id="count-cart">0</span></a></li>
            <Link to="/" id="close"><i class="fa-solid fa-xmark"></i></Link>
        </ul>
    </div>
    <div id="mobile">
        <i id="bar" class="fas fa-outdent"></i>
        <Link to="/"><i class="fa-solid fa-bag-shopping"></i></Link>
    </div>
</section>

    // {/*// <nav className="navbar navbar-expand-lg bg-body-tertiary">
    // //   <div className="container-fluid">
    //  //     <Link className="navbar-brand" to="/">Navbar</Link>
    // //     <button 
    // //       className="navbar-toggler" 
    // //       type="button" 
    // //       data-bs-toggle="collapse" 
    // //       data-bs-target="#navbarNavAltMarkup" 
    // //       aria-controls="navbarNavAltMarkup" 
    // //       aria-expanded="false" 
    // //       aria-label="Toggle navigation"
    // //     >
    // //       <span className="navbar-toggler-icon"></span>
    // //     </button>
    // //     <div className="collapse navbar-collapse mx-3" id="navbarNavAltMarkup">
    // //       <div className="navbar-nav ">
    // //         <Link className="nav-link active" aria-current="page" to="/">Home</Link>
    // //         <Link className="nav-link" to="/features">Features</Link>
    // //         <Link className="nav-link " to="/pricing">Pricing</Link>
    // //       </div>
    // //     </div>
    // //   </div>
    // // </nav>   */}
  );
};

export default NavBar;
