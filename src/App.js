
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Navbar from "./components/Navbar";

import Login from './pages/Login';
import Home from './pages/home';
import About from './pages/about';
import SignUp from './pages/Signup';
import Company from './pages/Company';
import Analyser from './pages/Analyser';
import Review from './pages/Review';
import Cocubes from './pages/Cocubes';
import Amcat from "./pages/Amcat";
import Display from "./pages/Display";
import Addcompany from "./Admin/Addcompany";
import Adminhome from "./Admin/Adminhome";
import Admindisplay from "./Admin/Admindisplay";
import Adminlogin from "./Admin/Adminlogin";
import Adminview from './Admin/Adminview';
import Admincompany from './Admin/Admincompany';
// import Unauthorised from "./pages/Unauthorized";

import AdminSingleCompany from "./Admin/AdminSingleCompany";
import SingleCompany from "./pages/SingleCompany";

import { useState } from "react";
// import Admindisplay from "./Admin/Admindisplay";


function App() {

  const [auth, setAuth] = useState({})

  const [adminCompanies, setAdminCompanies] = useState([])

  const [selectedAdminCompany, setSelectedAdminCompany] = useState({})


  const [studentCompanies, setStudentCompanies] = useState([])

  const [selectedStudentCompany, setSelectedStudentCompany] = useState({})



  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Login auth={auth} setAuth={setAuth} />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/unauthorised" element={<Unauthorised />} /> */}
        <Route path="/about" element={<About />} />


        <Route path="/Company" element={<Company studentCompanies={studentCompanies} setStudentCompanies={setStudentCompanies} setSelectedStudentCompany={setSelectedStudentCompany} />} />
        <Route path="/SingleCompany" element={<SingleCompany selectedStudentCompany={selectedStudentCompany} />} />

        <Route path="/analyser" element={<Analyser />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/review" element={<Review auth={auth} />} />
        <Route path="/Cocubes" element={<Cocubes />} />
        <Route path="/Amcat" element={<Amcat />} />
        <Route path="/Display" element={<Display />} />



        <Route path="/Addcompany" element={<Addcompany />} />
        <Route path="/Admindisplay" element={<Admindisplay />} />
        <Route path="/Adminhome" element={<Adminhome />} />
        <Route path="/Adminlogin" element={<Adminlogin />} />
        <Route path="/Adminview" element={<Adminview />} />
        <Route path="/AdminSingleCompany" element={<AdminSingleCompany selectedAdminCompany={selectedAdminCompany} adminCompanies={adminCompanies} setAdminCompanies={setAdminCompanies} />} />
        <Route path="/Admincompany" element={<Admincompany adminCompanies={adminCompanies} setAdminCompanies={setAdminCompanies} setSelectedAdminCompany={setSelectedAdminCompany} />} />

        <Route exact path="/" component={<Home />} />
        <Route path="/about" component={<About />} />
        <Route path="/Company" component={<Company />} />
        <Route path="/Analyser" component={<Analyser />} />
        <Route path="/Review" component={<Review />} />
        <Route path="/Cocubes" component={<Cocubes />} />
        <Route path="/Amcat" component={<Amcat />} />
        <Route path="/Display" component={<Display />} />



        {/* <Route path="/Addcompany" component={<Addcompany/>}/>
        <Route path="/Admindisplay" component={<Admindisplay/>}/>
        <Route path="/Adminhome" component={<Adminhome/>}/>
        <Route path="/Adminlogin" component={<Adminlogin/>}/>
        <Route path="/Adminview"component={<Adminview/>}/>
        <Route path="/Admincompany"component={<Addcompany/>}/> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;