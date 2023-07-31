import React from 'react';
import axios from '../api/axios'
import { useNavigate } from 'react-router-dom';

const SingleCompany = ({ selectedStudentCompany }) => {
    const { companyName, testerName, skills, cutoffMark, intro, eligibility, reflink } = selectedStudentCompany;


    return (
        <div>
            <h2>{companyName}</h2>
            <p>Tester Name: {testerName}</p>
            <p>Skills: {skills}</p>
            <p>Cutoff Mark: {cutoffMark}</p>
            <p>Introduction: {intro}</p>
            <p>Eligibility: {eligibility}</p>
            <p>Reference Link: <a href={reflink}>{reflink}</a></p>
        </div>
    );
};

export default SingleCompany;
