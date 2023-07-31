import { useNavigate ,Link} from 'react-router-dom';
import './Analyser.css';

const Analyser = () => {
  const navigate = useNavigate();

  const handleAmcatClick = () => {
    navigate('/amcat');
  };

  const handleCocubesClick = () => {
    navigate('/cocubes');
  };

  return (
    
    <div className="container1">
       <div className="fixed-taskbar">
        <nav className="navbar">
          <ul className="nav">
            <li className="nav-item">
              <Link to="/home" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link active">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Company" className="nav-link active">
                Company
              </Link>
            </li>
            
            <li className="nav-item">
              <a href="#" className="nav-link">
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </div>
      
    <h1 className="heading1">Analyser</h1>
    <div className="container2">
        
      <div className="box" onClick={handleAmcatClick}>
        
        <span className="text">Amcat</span>
      </div>
      <div className="box" onClick={handleCocubesClick}>
        <span className="text">Cocubes</span>
      </div>
    </div>
    </div>
  );
};

export default Analyser;
