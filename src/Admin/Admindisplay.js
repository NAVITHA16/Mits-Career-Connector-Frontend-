import React, { useEffect, useState } from 'react';
import './Admindisplay.css';
import axios from '../api/axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

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


  const formatDate = (dateString) => {
    const options = {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };

    const date = new Date(dateString);
    const formattedDate = date.toLocaleString('en-US', options);
    return formattedDate;
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete('/reviews', { data: { id } });
      setReviews((reviews) => reviews.filter((booking) => booking._id !== id));
      
    }
    catch (err) {
      console.log(`Error:${err.message}`);
    }
  }

  const filteredReviews = reviews
    .filter((review) =>
      review.companyName?.toLowerCase().includes(searchCompany.toLowerCase())
    )
    .sort((a, b) => new Date(b.currentDate) - new Date(a.currentDate));

  return (
    <div className="response-containeradmin">
      <h2 className="headingsad">Students Review</h2>
      <div className="search-containeradmin ">
        <label  htmlFor="companySearch">Search by Company:</label>
        <input
          id="companySearch"
          type="text"
          value={searchCompany}
          onChange={handleSearchChange}
          className='searchadmin'
        />
      </div>
      {filteredReviews.map((review) => (
        <div className="response-boxadmin" key={review._id}>
          <div className="response-header">
            <h3 className="name">{review.studentName}</h3>
          </div>
          <div className="response-header1">
            <h4 className="company">{review.companyName}</h4>
          </div>
          {/* <div className="response-header2">
            <p className="date">{formatDate(review.currentDate)}</p>
          </div> */}
          <p className="description">{review.reviewText}</p>
          <div className="response-header2">
            <div className="delete-button">
              <FontAwesomeIcon
                icon={faTrash}
                className="delete-icon"
                size={60}
                onClick={() => handleDelete(review._id)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Display;