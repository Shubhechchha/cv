import React from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';



const Navbar = () => {
  return (
    <>
      <nav className='light-blue darken-4'>
        <div className='container'>
          <div className='nav-wrapper'>
            <Link to = '/' className='brand-logo'>
              CV
            </Link>
            <Link to = '/' data-target = "side-nav" className='sidenav-trigger'> 
            <i className='material-icons'>menu</i>
            </Link>
            <ul className='right hide-on-med-and-down'>
              <li>
                <Link to='/'>
                  <i className='fas fa-home'></i> Home
                </Link>
                </li>
                <li>
                <Link to='/Skills'>
                  <i className='fas fa-copy'></i> Skills
                </Link>
                </li>
                <li>
                <Link to='/Experience'>
                  <i className='fas fa-id-badge'></i> Experience
                </Link>
                </li>
              <li>
                <Link to='/Education'>
                  <i className='fas fa-graduation-cap'></i> Education
                </Link> 
               </li> 
            </ul> 
          </div>
        </div>
      </nav>
      <ul className='sidenav' id="side-nav">
              <li>
                <Link to='/'>
                  <i className='fas fa-home'></i> Home
                </Link>
                </li>
                <li>
                <Link to='/Skills'>
                  <i className='fas fa-copy'></i> Skills
                </Link>
                </li>
                <li>
                <Link to='/Experience'>
                  <i className='fas fa-id-badge'></i> Experience
                </Link>
                </li>
              <li>
                <Link to='/Education'>
                  <i className='fas fa-graduation-cap'></i> Education
                </Link> 
               </li> 
            </ul> 
    </>
  );
}

export default Navbar