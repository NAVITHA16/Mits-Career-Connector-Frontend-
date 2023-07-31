import { useState, useEffect } from "react";
import "./login.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';

function Login({auth,setAuth}) {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);


  const [userEmail, setUserEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');


  const navigate = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      // Start loading

      const response = await axios.post(
        '/auth',
        JSON.stringify({ userEmail, pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );

      // Handle successful login
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      const username = response?.data?.username;

      setAuth({ userEmail, roles, accessToken, username });
      setUserEmail('');
      setPwd('');

      navigate('/home');
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


return (
  <>
    <body className="Body">
      <div className="helo">
        <h4 class="h">MITS CAREER CONNECTOR</h4>
      </div>
      <div className="container">
        <h2>User Login</h2>
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
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
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
            <p>Don't have an account? <Link className='Header_Link' to="/SignUp">SignUp</Link></p>
            <p>Admin <Link className="header_Link" to ="/Adminlogin">Admin</Link></p>
          </div>
        </form>
      </div>
    </body>
  </>
);
}

export default Login;
