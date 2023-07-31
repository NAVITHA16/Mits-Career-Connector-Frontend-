import React from 'react';
import axios from '../api/axios'
import { useNavigate } from 'react-router-dom';

const AdminSingleCompany = ({ selectedAdminCompany, setAdminCompanies ,adminCompanies }) => {
    const { _id, companyName, testerName, skills, cutoffMark, intro, eligibility, reflink } = selectedAdminCompany;

    const navigate = useNavigate();

    const handleDelete = async (id) => {
        try {
            await axios.delete('/companies', { data: { id } });
            setAdminCompanies((adminCompanies) => adminCompanies.filter((adminCompany) => adminCompany._id !== id));
            navigate('/Admincompany')
        }
        catch (err) {
            console.log(`Error:${err.message}`);
        } 
    }

    console.log(selectedAdminCompany)

    return (
        <div>
            <h1>{_id}</h1>
            <h2>{companyName}</h2>
            <p>Tester Name: {testerName}</p>
            <p>Skills: {skills}</p>
            <p>Cutoff Mark: {cutoffMark}</p>
            <p>Introduction: {intro}</p>
            <p>Eligibility: {eligibility}</p>
            <p>Reference Link: <a href={reflink}>{reflink}</a></p>
            <button onClick={() => handleDelete(_id)}>Delete</button>
        </div>
    );
};

export default AdminSingleCompany;
