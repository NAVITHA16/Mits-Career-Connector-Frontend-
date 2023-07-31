import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Adminhome.css';
// import logo from './logo.png';
const Adminhome = () => {
  const navigate = useNavigate();

  const handleCompanyClick = () => {
    navigate('/Company');
  };

  const handleReviewClick = () => {
    navigate('/Review');
  };

  return (
    
    <div className="curved-rectangles-containers">
      <div className="fixed-taskbar">
        <nav className="navbars">
        <nav style={{ background: '', height: '130px' }}>
      <div style={{ background: '', padding: '10px',marginRight:'1000px' }}>
        {/* <img src={logo} alt="Logo" style={{ height: '100px' }} /> */}
      </div>
      {/* Other navbar content */}
    </nav>
          <ul className="navs">
          
            <li className="nav-items">
           
              <Link to="/Adminhome" className="nav-link actives">
                Company
              </Link>
            </li>
           
            <li className="nav-items">
              <Link to="/Display" className="nav-link actives">
                Review
              </Link>
            </li>
            <li className="nav-items">
              <a href="#" className="nav-link">
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="curved-rectangles curved-rectangles-1">
        
        <h1 className="ad"> Company-Details</h1>
        
       
        <Link to ="/Adminview" >
          <button className='AdminH'>View</button>
        </Link>
        </div>

        <div className="curved-rectangles curved-rectangles-2">
          <h1 className="ad">Manage-Review</h1>
         <Link to ="/Admindisplay" >
          <button className='AdminH'>View</button>
        </Link>
        </div>
</div>
  );
};

export default Adminhome;
