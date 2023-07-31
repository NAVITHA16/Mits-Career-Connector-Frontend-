import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import predictor from './predictor.png';
import review from './review.png';
import student from './student.png';
import company1 from './company1.png';
import './home.css';
import logo from './logo.png';

const Home = () => {
  const navigate = useNavigate();

  const handleCompanyClick = () => {
    navigate('/Company');
  };

  const handleReviewClick = () => {
    navigate('/Review');
  };

  return (
    <div className="curved-rectangles-container">
      <div className="fixed-taskbar">
        <nav className="navbar">
          <nav style={{ background: '', height: '130px' }}>
            <div style={{ background: '', padding: '10px', marginRight: '1000px' }}>
              <img src={logo} alt="Logo" style={{ height: '100px', filter: 'brightness(0) invert(2)' }} />
            </div>
            {/* Other navbar content */}
          </nav>
          <ul className="nav">
            <li className="nav-item">
              <Link to="/home" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link active">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Company" className="nav-link active">
                Company
              </Link>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="curved-rectangle curved-rectangle-1">
        <img src={predictor} alt="Analyser" className="image" />
        <h1 className="sub">ANALYSER</h1>
        <p className="p1">
          Check if you are eligible for a particular company based on your AMCAT or COCUBES scores.
        </p>
        <Link to="/Analyser">
          <button className="buttons">View</button>
        </Link>
      </div>

      <div className="curved-rectangle curved-rectangle-2">
        <img src={company1} alt="company1" className="image" />
        <h1 className="sub">COMPANY</h1>
        <p className="p4">Check detailed information of a company and their background</p>
        <button className="buttons" onClick={handleCompanyClick}>
          View
        </button>
      </div>

      <div className="curved-rectangle curved-rectangle-3">
        <img src={review} alt="Student review" className="image" />
        <h1 className="sub">STUDENT REVIEW</h1>
        <p className="p3">
          Read seniors reviews on recruitment procedures to gain valuable insights and prepare for interviews, enabling
          you to be well-prepared for the job opportunities.
        </p>
        <Link to="/Display">
          <button className="buttons">View</button>
        </Link>
      </div>

      <div className="curved-rectangle curved-rectangle-4">
        <img src={student} alt="Forum" className="image" />
        <h1 className="sub">FORUM</h1>
        <p className="p2">
          Share your reviews and experiences with companies you've been placed in, providing valuable insights into their
          recruitment procedures for younger students.
        </p>
        <Link to="/review">
          <button className="buttons">View</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
