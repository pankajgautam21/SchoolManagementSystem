import React from 'react';
import './App.css';
import Login from './Component/Container/Login/login';
import Username from './Component/Container/Login/username';
import Cal from './Component/Container/Attendance/Calendar';
import Result from './Component/Container/Report Card/Result';
import Firstpage from './Component/Container/HomeCard/firstpage';
import { BrowserRouter as Router,Route } from 'react-router-dom/cjs/react-router-dom.min';
import Calendar from 'react-calendar';
import Page from './Component/Container/HomeWork/Page';
import { TimeTable } from './assests/icon';
import Timetable from './Component/Time Table/TimeTable';

function App() {
  return (
    <Router>
      <Route path="/" exact>
      <Login/>
      </Route>
      <Route path="/card" exact>
      <Firstpage/>
      </Route>
      <Route path="/Attendance" exact>
      <Calendar/>
      </Route>
      <Route path="/Result" element={<Result/>} exact>
      </Route>
      <Route path="/username" exact>
      <Username/></Route>
      <Route path="/result" exact>
     <Result/>
     </Route>
     <Route path="/work" exact>
     <Page/>
     </Route>
     <Route path='/Timetable' exact>
     <Timetable/>
     </Route>
    </Router>
  );
}

export default App;
