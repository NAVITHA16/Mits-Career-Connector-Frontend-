import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import './Amcat.css';

const Amcat = () => {
  const [mark, setMark] = useState('');
  const [company, setCompany] = useState('');
  const [eligibility, setEligibility] = useState(false);
  const [improvementNeeded, setImprovementNeeded] = useState(0);

  const checkEligibility = () => {
    const cutoffs = [
      { company: 'NTT Data', min: 1550 },
      { company: 'MindTree', min: 1580 },
      { company: 'Deloitte', min: 1600 },
      { company: 'HCL Technologies', min: 1500 },
      { company: 'LTI', min: 1500 },
      { company: 'Cognizant', min: 1550 },
      { company: 'Sapient', min: 1580 },
      { company: 'Aricent', min: 1560 },
      { company: 'Wipro', min: 1560 },
    ];

    const selectedCompany = cutoffs.find((cutoff) => cutoff.company === company);

    if (selectedCompany) {
      if (mark >= selectedCompany.min) {
        setEligibility(true);
        setImprovementNeeded(0);
      } else {
        setEligibility(false);
        setImprovementNeeded(selectedCompany.min - mark);
      }
    }
  };

  const barChartData = {
    labels: ['Improvement Needed', 'Current Mark'],
    datasets: [
      {
        label: 'Improvement Needed',
        data: [improvementNeeded, mark],
        backgroundColor: ['#CC0000', '#000099'],
        
      },
    ],
  };

  return (
    
    <div className="contain">
        
      <h1 className="amcat">Amcat</h1>
      <label className="labell">Enter your mark:</label>
      <input
        type="number"
        value={mark}
        onChange={(e) => setMark(e.target.value)}
        placeholder="Enter your mark"
        className="inputt"
      />
      <label className="labell"> Select a company:</label>
      <select
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="inputt"
     
     >
        
        <option value="">Select a company</option>
        <option value="NTT Data">NTT Data</option>
        <option value="MindTree">MindTree</option>
        <option value="Deloitte">Deloitte</option>
        <option value="HCL Technologies">HCL Technologies</option>
        <option value="LTI">LTI</option>
        <option value="Cognizant">Cognizant</option>
        <option value="Sapient">Sapient</option>
        <option value="Aricent">Aricent</option>
        <option value="Wipro">Wipro</option>
      </select>
      <button onClick={checkEligibility} className="amb">
        Check Eligibility
      </button>

      {eligibility && <h3 className="message">You are eligible!</h3>}

      {!eligibility && improvementNeeded > 0 && (
        <div className="chart-container">
          <Bar data={barChartData} className="chart" style={{ width: '600px', height: '600px' }} />

          <p className="message">
            You need to improve your mark by {improvementNeeded} to be eligible
          </p>
        </div>
      )}
    </div>
  );
};

export default Amcat;