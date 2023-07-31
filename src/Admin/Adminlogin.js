import { useState, useEffect } from "react";
import "./Adminlogin.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';

function AdminLogin({ adminauth, setadminAuth }) {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);


  const [adminMail, setAdminMail] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');


  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Start loading
      const Admin = {
        adminMail,
        pwd
      }
      const response = await axios.post('/adminauth', Admin,
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );

      // Handle successful login
      navigate('/Adminhome');
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Invalid credentials');
      } else {
        setErrMsg('Login Failed');
      }

    }
  };



  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Email is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  const gotoAdmin = () => {
    navigate('/Adminlogin')
  }


  return (
    <>
      <body className="Body">
        <div className="helo">
          <h4 class="h">MITS CAREER CONNECTOR</h4>
        </div>
        <div className="container">
          <h2>Admin Login</h2>
          <form onSubmit={handleSubmit}>
            <p>{errMsg}</p>
            <div className="ui divider"></div>
            <div className="ui from">
              <div className="field">
                <label className="lab">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={adminMail}
                  onChange={(e) => setAdminMail(e.target.value)}
                />
              </div>
              <p>{formErrors.email}</p>
              <div className="field">
                <label className="lab">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value)}
                />
              </div>
              <p>{formErrors.password}</p>

              <button className="fluid ui button blue">Submit</button>
            </div>
          </form>
        </div>
      </body>
    </>
  );
}

export default AdminLogin;