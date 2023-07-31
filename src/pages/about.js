import React from "react";
import './about.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin,faTwitter,faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';
function AboutPage() {
  

  return (
    
    <body className="AB">
        <div className="fixed-taskbar">
        <nav className="navbar">
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
      <div>
        <h1 className="ab">ABOUT US</h1>
        <div className="about">
          <p className="P">Welcome to Mits Career Connector, an innovative platform designed to help college students navigate the job market and achieve their career goals. 
            Our website is built using React and Node.js, providing a user-friendly interface and a range of powerful features.
            One of our standout features is our predictive tool, which determines if students are eligible for a particular company based on their AMCAT and COCUBES scores. 
            It also shows students how much they need to improve to apply for a position in a specific company, giving them valuable insights and guidance.
            Our website provides detailed information about different companies and their backgrounds, enabling students to make informed decisions when applying for jobs.
            We also offer a forum for students to ask doubts to their seniors, gain insights into interview questions, and the skills required for various companies.
            At Mits Career Connector, we are dedicated to helping college students advance their careers. Our website is an indispensable tool for anyone looking for employment opportunities.
            We strive to provide insightful resources and powerful features that help students achieve their career goals.
            Thank you for choosing Mits Career Connector as your career partner.</p>
        </div>
      </div>

      <footer>
        <div className="contact-details">
          <h2>Contact Us</h2>
          <p>Email: mitscareerconnector@gmail.com</p>
          <p>Phone: 0484-2732111/100</p>
          <p>Address: Muthoot Institute of Technology and Science
            Varikoli P.O, Puthencruz- 682308
</p>
       
        </div>
      
        <div className="K">
           <p1>follow us on</p1>
           </div>
        <div className="social-icons">
        <a href="https://www.instagram.com">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      
      <a href="https://www.linkedin.com">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://www.facebook.com">
        <FontAwesomeIcon icon={faFacebook}/>
      </a>
      <a href="https://www.twitter.com">
        <FontAwesomeIcon icon={faTwitter}/>
      </a>
         </div>
    
      </footer>
    </body>
  );
}

export default AboutPage;
