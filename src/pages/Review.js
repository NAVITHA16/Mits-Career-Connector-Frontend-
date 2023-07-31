import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from '../api/axios'
import './Review.css';

function ReviewForm() {
  const [studentName, setStudentName] = useState("");
  const [branch, setBranch] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const history = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const Review = { studentName, branch, reviewText, companyName };
      const response = await axios.post('/reviews', Review);
      setStudentName("");
      setBranch("");
      setReviewText("");
      setCompanyName("");
      setSuccessMessage("Successfully submitted");
      setShowSuccessMessage(true);
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  useEffect(() => {
    if (showSuccessMessage) {
      const timer = setTimeout(() => {
        setShowSuccessMessage(false);
        setSuccessMessage("");
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [showSuccessMessage]);

  return (
    <div>
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
      <h1 className="reviewr">Review Form</h1>
      <form className="reviewformr" onSubmit={handleSubmit}>
        {showSuccessMessage && (
          <div className="success-message">{successMessage}</div>
        )}
        <label className="labelr">
          Name:
          <input
            type="textr"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />
        </label>
        <label className="labelr">
          Branch:
          <input
            type="textr"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
          />
        </label>
        <label className="labelr">
          Company:
          <input
            type="textr"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </label>
        <label className="labelr">
          Review:
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
        </label>
        <button className="rb">Submit</button>
      </form>
    </div>
  );
}

export default ReviewForm;