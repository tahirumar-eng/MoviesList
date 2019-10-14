import React from 'react';
import './Navbar.css';
import {NavLink ,Link } from 'react-router-dom';
  const Navbar=()=>{
      return (
        
      <nav className="navbar navbar-expand navbar-light bg-light">
          <Link to="/" className="navbar-brand">Vidly</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" >
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbae-nav">
              <NavLink to="./Movie" className="nav-item nav-link active">Movie</NavLink>
              <NavLink to="/Customer" className="nav-item nav-link ">Customer</NavLink>
              <NavLink to="/rentals" className="nav-item nav-link ">Rentals</NavLink>
              <NavLink to="/login" className="nav-item nav-link ">Login</NavLink>
              <NavLink to="/register" className="nav-item nav-link ">Register</NavLink>


         
          </div>    
          </div> 
      </nav>
  );
  }

 

export default Navbar;
