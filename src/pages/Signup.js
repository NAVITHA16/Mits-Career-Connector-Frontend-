import './SignUp.css';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';
import { useState, useEffect } from "react";

function SignUp({register,setRegister}) {
  const initialValues = { mail: "", password: "", username:"",semester:"",branch:"" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  
  const [mail, setMail] = useState('');
  const [pwd, setPwd] = useState('');
  const [semester, setSemester] = useState('');
  const [branch, setBranch] = useState('');
  const [username, setUsername] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const navigate = useNavigate();
  const HandleSubmit=async(e)=>
  {
    // navigate('/home')
    e.preventDefault();
    try {
      // Start loading

      const response = await axios.post(
        '/register',
        JSON.stringify({mail,username, pwd,semester,branch}),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );

      // Handle successful login
      // const accessToken = response?.data?.accessToken;
      // const roles = response?.data?.roles;
      // const username = response?.data?.username;

      // setRegister({ mail, roles, accessToken, username });
      // setMail('');
      // setPwd('');
      // setBranch('');
      // setUsername('');
      // setSemester('');

      navigate('/home');
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing a field');
      } else if (err.response?.status === 401) {
        setErrMsg('Invalid credentials');
      } else {
        setErrMsg('SignUpFailed');
      }
      
    } 
  };
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  
    if (!values.email) {
      errors.mail = "Email is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  return (
  <div className='bodys'>
    <div className="header"><h1 className="names">MITS CAREER CONNECTOR</h1>
    <h2 className='hs'>CREATE ACCOUNT</h2>
    </div>
    <form className="form1" onSubmit={HandleSubmit}>
      <p>{errMsg}</p>
      <label >Name</label>
      <br/>
      <input 
        type="text" 
        placeholder='Enter your name'
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br/>
      <p>{formErrors.username}</p>
      <div>
      <label>Email</label>
      <br/>

      <input 
  type="text" 
  placeholder='Enter your email'
  name="mail"
  value={mail}
  onChange={(e) => setMail(e.target.value)}
  className="my-input"
/>
      <br/>
      </div>
      <p>{formErrors.email}</p>
      <div >
      <label>Password</label>
      <br/>
      <input 
      type="password"
      name="password"
      placeholder='Enter your password'
      value={pwd}
      onChange={(e) => setPwd(e.target.value)}
      className="my-input"
       />
      <br/>
      </div>
      <p>{formErrors.password}</p>
      <div>
      <label className='sem'>Sem</label>
      <br/>
      <select
              name="semester"
              value={semester}
              onChange={(e) => setSemester(e.target.value)}>
        <option>S1</option>
        <option>S2</option>
        <option>S3</option>
        <option>S4</option>
        <option>S5</option>
        <option>S6</option>
        <option>S7</option>
        <option>S8</option> 
      </select>
      <br/>
      
      <label className='branch'>Branch</label>
      <br/>
      <select 
               name="branch"
               value={branch}
               onChange={(e) => setBranch(e.target.value)}>
       <option>CSE</option>
        <option>EC</option>
        <option>EEE</option>
        <option>MECH</option>
        <option>CE</option>
      </select>
      <br/><br/>
      </div>
      
    
      <button className='S' onClick={HandleSubmit}>Submit</button>
    </form>
  </div>
  );
}

export default SignUp;

