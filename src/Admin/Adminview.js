import { useNavigate ,Link} from 'react-router-dom';
import './Adminview.css';
// import logo from './logo.png';

const Adminview = () => {
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate('/Admincompany');
  };

  const handleAddClick = () => {
    navigate('/Addcompany');
  };

  return (
    
    <div className="fixed-taskbar">
    <nav className="navbars">
   
      <ul className="navs">
      
        <li className="nav-items">
       
          <Link to="/Adminhome" className="nav-link actives">
            Company
          </Link>
        </li>
       
        <li className="nav-items">
          <Link to="/Display" className="nav-link actives">
            Review
          </Link>
        </li>
        <li className="nav-items">
          <a href="#" className="nav-link">
            Logout
          </a>
        </li>
      </ul>
    </nav>
  
      
    <h1 className="Cheading">COMPANY-DETAILS</h1>
    <div className="Ccontainer2">
        
      <div className="Cbox" onClick={handleViewClick}>
        
        <button className="Ctext">View Company-details</button>
      </div>
      <div className="Cbox" onClick={handleAddClick}>
        <Link to="/Addcompany">
        <button className="Ctext">Add company-details</button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Adminview;
