import React from 'react';

const View = ({ company }) => {
  const handleDownload = () => {
    window.open(company.pdf, '_blank');
  };

  const styles = {
    container: {
      
      fontSize:'20px',
      padding: '20px',
      backgroundColor: '',
      borderRadius: '4px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    title: {
      fontSize: '50px',
      marginBottom: '10px',
    },
    list: {
      listStyleType: 'disc',
      marginLeft: '20px',
      marginBottom: '20px',
    },
    item: {
      marginBottom: '10px',
    },
    button: {
      backgroundColor: '',
      color: '#fff',
      border: 'none',
      padding: '8px 12px',
      fontSize: '10px',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{company.title} Skills</h2>
      <ul style={styles.list}>
        {company.skills.split('\n').map((skill) => (
          <li key={skill} style={styles.item}>{skill}</li>
        ))}
      </ul>
      <h2>Interview Preparation Resources</h2><br/>
      <button
        style={styles.button}
        onClick={handleDownload}
        className="V"
      >
        Download PDF
      </button>
    </div>
  );
};

export default View;

// import React, { useState } from 'react';

// function View({ companies }) {
//   const [searchTerm, setSearchTerm] = useState('');

//   const filteredCompanies = companies.filter(company => {
//     return company.companyName.toLowerCase().includes(searchTerm.toLowerCase());
//   });

//   return (
//     <div>
//       <label>
//         Search by Company Name:
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </label>

//       {filteredCompanies.map(company => (
//         <div key={company.id}>
//           <h3>{company.companyName}</h3>
//           <p>Skills: {company.skills}</p>
//           {/* Display other company details */}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default View;

