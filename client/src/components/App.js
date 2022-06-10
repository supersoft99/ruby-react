import '../App.css';
import {BrowserRouter, Routes, Route,} from "react-router-dom";

import Login from './Login';
import Doctor from './Doctor'
// import Patient from './Patient'
// import Chart from './Chart'
import Quiz from './Quiz'
import { useState, useEffect } from 'react';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // useEffect(() => {
  //   fetch('/auth')
  //   .then((res) => {
  //     if (res.ok) {
  //       res.json()
  //       .then((user) => {
  //         setIsAuthenticated(true);
  //         setCurrentUser(user);
  //         console.log("doctor authenticated")
  //       });
  //     }
  //   });
  // }, []);

  if (!isAuthenticated) return <Login error={'please login'} setIsAuthenticated={setIsAuthenticated} setCurrentUser={setCurrentUser} />;
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Login setCurrentUser={setCurrentUser}  setIsAuthenticated={setIsAuthenticated}/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        {/* <Route path="/chart" element={<Chart currentUser={currentUser}/>}></Route> */}
       { currentUser.role === "doctor" ?
        <Route path="/doctor" element={<Doctor currentUser={currentUser} />}></Route>
        :
        <Route path="/quiz" element={<Quiz currentUser={currentUser} />}></Route>}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;