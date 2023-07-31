import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import './Cocubes.css';

const Analyser = () => {
  const [mark, setMark] = useState('');
  const [company, setCompany] = useState('');
  const [eligibility, setEligibility] = useState(false);
  const [improvementNeeded, setImprovementNeeded] = useState(0);

  const checkEligibility = () => {
    const cutoffs = [
      { company: 'Flipkart', min: 601  },
      { company: 'Adobe', min: 601 },
      { company: 'Mu Sigma', min: 601 },
      { company: 'Yellow Messanger', min: 601 },
      { company: 'Amazon', min: 601 },
      { company: 'Shobha Developers', min: 601 },
      { company: 'Motorola Mobolity', min: 601 },
      { company: 'Adobe systems', min: 601 },
      { company: 'The solar labs', min: 601 },
      { company: 'Smarter Codes', min: 601 },
      { company: 'Airyel Africa', min: 601 },
      { company: 'Akzo Nobel', min:560},
      { company: 'Covert Cart', min:560},
      { company: 'Signal Chip', min:560},
      { company: 'Jaro Education', min:560},
      { company: 'Samsung', min:560},
      { company: 'Exxon Mobil', min:560},
      { company: 'Aurigo', min:560},
      { company: 'LIDO', min:560},
      { company: 'HSBC', min:560},
      { company: 'Wrig Nano System', min:560},
      { company: 'Increff', min:560},
      { company: 'Sprinklr', min:560},
      { company: 'Cloud Magic', min:560},
      { company: 'Optum', min:560},
      { company: 'Philips Innovation Campus', min:560},
      { company: 'Comcast', min:560},
      { company: 'Azcom', min:560},
      { company: 'PlanetSpark', min:560},
      { company: 'Paytm', min:560},
      { company: 'HDFC Life', min:550},
      { company: 'Indus Valley', min:550},
      { company: 'TATA Projects', min:550},
      { company: 'NIIT', min:550},
      { company: 'HFFC', min:550},
      { company: 'Capital First', min:550},
      { company: 'Mindteck', min:550},
      { company: 'Lutron', min:550},
      { company: 'Global Siksha', min:550},
      { company: 'NinjaCart', min:550},
      { company: 'Grofers', min:550},
      { company: 'UST Global', min:550},
      { company: 'AVL', min:550},
      { company: 'Payoda', min:550},
      { company: 'Renault Nissan Technology & Business Centre India Pvt Ltd', min:550},
      { company: 'Lava', min:550},
      { company: 'HDFC Bank', min:550},

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
    
    <div className="containerr">
     <h1 className='cocubes'>Cocubes</h1>
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
        <option value="Flipkart">Flipkart</option>
        <option value="Adobe">Adobe</option>
        <option value="Mu Sigma">Mu Sigma</option>
        <option value="Yellow Messanger">Yellow Messanger</option>
        <option value="Amazon">Amazon</option>
        <option value="Shobha Developers">Shobha Developers</option>
        <option value="Motorola Mobolity">Motorola Mobolity</option>
        <option value="Adobe systems">Adobe systems</option>
        <option value="The solar labs">The solar labs</option>
        <option value="Smarter Codes">Smarter Codes</option>
        <option value="Airyel Africa">Airyel Africa</option>
        <option value="Akzo Nobel">Akzo Nobel</option>
        <option value="Covert Cart">Covert Cart</option>
        <option value="Signal Chip">Signal Chip</option>
        <option value="Jaro Education">Jaro Education</option>
        <option value="Samsung">Samsung</option>
        <option value="Exxon Mobil">Exxon Mobil</option>
        <option value="Aurigo">Aurigo</option>
        <option value="LIDO">LIDO</option>
        <option value="HSBC">HSBC</option>
        <option value="Wrig Nano System">Wrig Nano System</option>
        <option value="Increff">Increff</option>
        <option value="Sprinklr">Sprinklr</option>
        <option value="Cloud Magic">Cloud Magic</option>
        <option value="Optum">Optum</option>
        <option value="Philips Innovation Campus">Philips Innovation Campus</option>
        <option value="Comcast">Comcast</option>
        <option value="Azcom">Azcom</option>
        <option value="PlanetSpark">PlanetSpark</option>
        <option value="Paytm">Paytm</option>
        <option value="HDFC Life">HDFC Life</option>
        <option value="Indus Valley">Indus Valley</option>
        <option value="TATA Projects">TATA Projects</option>
        <option value="NIIT">NIIT</option>
        <option value="HFFC">HFFC</option>
        <option value="Capital First">Capital First</option>
        <option value="Mindteck">Mindteck</option>
        <option value="Lutron">Lutron</option>
        <option value="Global Siksha">Global Siksha</option>
        <option value="NinjaCart">NinjaCart</option>
        <option value="Grofers">Grofers</option>
        <option value="UST Global">UST Global</option>
        <option value="AVL">AVL</option>
        <option value="Payoda">Payoda</option>
        <option value="Renault Nissan Technology & Business Centre India Pvt Ltd">Renault Nissan Technology & Business Centre India Pvt Ltd</option>
        <option value="Lava">Lava</option>
        <option value="HDFC Bank">HDFC Bank</option>
        
      </select>
      <button  onClick={checkEligibility} className="but">
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

export default Analyser;