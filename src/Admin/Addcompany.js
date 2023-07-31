import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from '../api/axios'
import './Addcompany.css';

function ReviewForm() {
  const [companyName, setCompanyName] = useState("");
  const [testerName, setTestername] = useState("");
  const [skills, setSkills] = useState("");
  const [cutoffMark, setCutoffMark] = useState("");
  const [eligibility, setEligibility] = useState("");
  const [reflink, setReflink] = useState("");
  const [intro, setIntro] = useState("");
  const [errmsg,setErrmsg] =useState("")

  const history = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
        const Review = {companyName,testerName,skills,cutoffMark,intro,eligibility,reflink}
        const response=await axios.post('/companies',Review)
        // history.push("/review");
        console.log(response.data)
        setErrmsg("")
    }catch(error){
      setErrmsg("error occured")
    }
  };

  return (
   <div>
      <h1 className="add"> Company Details</h1>
      <form className=" addform" onSubmit={handleSubmit}>
        <p>{errmsg}</p>
        <label className="adminlab">
          CompanyName:
          <input
            type="texts"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </label>
        <label  className="adminlab">
          TesterName:
          <input
            type="texts"
            value={testerName}
            onChange={(e) => setTestername(e.target.value)}
          />
        </label>
        <label className="adminlab">
          Cutoff Mark:
          <input
            type="texts"
            value={cutoffMark}
            onChange={(e) => setCutoffMark(e.target.value)}
          />
        </label>
         <label className="adminlab">
          Eligibility:
          <input
            type="texts"
            value={eligibility}
            onChange={(e) => setEligibility(e.target.value)}
          />
        </label> 
        <label className="adminlab">
          Skills:
          <input
            type="texts"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
        </label> 
        <label  className="adminlab">
          Details:
          <textarea
            value={intro}
            onChange={(e) => setIntro(e.target.value)}
          />
        </label>
        <label  className="adminlab">
          Reference Link:
          <input
            type="text"
            value={reflink}
            onChange={(e) => setReflink(e.target.value)}
          />
        </label>
        <button className="Ad">Submit</button>
      </form>
    </div>
  );
}

export default ReviewForm;
