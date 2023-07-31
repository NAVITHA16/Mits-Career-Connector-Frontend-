import React, { useEffect, useState } from 'react';
import './Display.css';
import axios from '../api/axios';

const Display = () => {
  const [searchCompany, setSearchCompany] = useState('');
  const [reviews, setReviews] = useState([]);
  const [errMsg, setErrMsg] = useState('');

  const handleSearchChange = (event) => {
    setSearchCompany(event.target.value);
  };

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('/reviews');
        setReviews(response.data);
      } catch (error) {
        if (!error?.response) {
          setErrMsg('No response from server');
        } else if (error.response?.status === 500) {
          setErrMsg('An error occurred');
        } else {
          console.log(`Error: ${error.message}`);
        }
      }
    };

    fetchReviews();
  }, []);

  // const formatDate = (dateString) => {
  //   const options = {
  //     month: 'long',
  //     day: 'numeric',
  //     year: 'numeric',
  //     hour: 'numeric',
  //     minute: 'numeric',
  //     hour12: true,
  //   };

  //   const date = new Date(dateString);
  //   const formattedDate = date.toLocaleString('en-US', options);
  //   return formattedDate;
  // };

  const filteredReviews = reviews
    .filter((review) =>
      review.companyName?.toLowerCase().includes(searchCompany.toLowerCase())
    )
    .sort((a, b) => new Date(b.currentDate) - new Date(a.currentDate));

  return (
    <div className="response-containerre">
      <h2 className="headings">STUDENTS REVIEW</h2>
      <div className="search-container">
        <label htmlFor="companySearch">Search by Company:</label>
        <input
          id="companySearch"
          type="text"
          value={searchCompany}
          onChange={handleSearchChange}
        />
      </div>
      {filteredReviews.map((review) => (
        <div className="response-box" key={review._id}>
          <div className="response-header">
            <h3 className="name">{review.studentName}</h3>
            <h4 className="company">{review.companyName}</h4>
          </div>
          <p className="description">{review.reviewText}</p>
         
        </div>
      ))}
    </div>
  );
};

export default Display;