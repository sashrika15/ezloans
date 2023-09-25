import './App.css';
import React, {Component, useState} from "react";
import NavBar from './components/Navbar';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { AuthProvider } from './components/AuthContext';
import LandingPage from './components/LandingPage';
import { useAuth} from './components/AuthContext';
import Employee from './components/employee/Employee';
import ViewEmployee from './components/employee/ViewEmployee';
import CreateEmployee from './components/employee/CreateEmployee';
import EditEmployee from './components/employee/EditEmployee';
import Item from './components/item/Item';
import CreateItem from './components/item/CreateItem';
import ViewItem from './components/item/ViewItem';
import EmployeeIssue from './components/employeeissue/EmployeeIssue';
import EmployeeCard from './components/employeecard/EmployeeCard';
import ApplyLoan from './components/ApplyLoan';
import Loan from './components/loan/Loan';
import ViewLoan from './components/loan/ViewLoan';
import CreateLoan from './components/loan/CreateLoan';
function App() {
  const [toggle, setToggle] = useState(false);
  const Toggle = () => { 
    if(!isLoggedIn) {
    setToggle(false);
  }
  setToggle(!toggle) }
  const {isLoggedIn, setIsUser} = useAuth();
  const [toggle, setToggle] = useState(false);


  return (
    <AuthProvider>
    <div className="App">
      <div className='row' style = {{
        backgroundImage: "url(/images/landing.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "94vh",
        minWidth: "100vh",
        margin: 0 }}>
       
          <Router>
          { toggle && <div className='col-2 vh-100' style={{padding:0,minHeight: "94vh"}}>
            {/* {isLoggedIn &&
            <Sidebar/>
            } */}
            <Sidebar/>
            </div>}
            <div className='col' style={{padding:0}}>
              <NavBar Toggle={Toggle}/>
              <Routes>
                <Route path="" element={<LandingPage/>}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/employee" element={<Employee/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/loan" element={<Loan/>}/>
                <Route path='/addLoan/:id' element={<CreateLoan/>}></Route>
                <Route path='/viewLoan/:id' element={<ViewLoan/>}></Route>
                <Route path="/additem" element={<Item/>}/>
                <Route path="/employee/:id" element={<ViewEmployee/>}/>
                <Route path="/addEmployee" element={<CreateEmployee/>}/>
                <Route path="/editEmployee/:id" element={<EditEmployee/>}/>
                <Route path="/item" element={<Item/>}/>
                <Route path='/addItem/:id' element={<CreateItem/>}></Route>
                <Route path='/viewItem/:id' element={<ViewItem/>}></Route>
                <Route path='/viewItem/emp/:id' element={<EmployeeIssue/>}></Route>
                <Route path='/viewLoan/emp/:id' element={<EmployeeCard/>}></Route>
                <Route path='/applyLoan' element={<ApplyLoan/>}/>
              </Routes>
            </div>
          
          </Router>
        
      </div>
      <footer className="footer">
        <p>
          &copy; All Rights Reserved to Ezloans
        </p>
        
      </footer>
    </div>
    
    </AuthProvider>
  );
}

export default App;
