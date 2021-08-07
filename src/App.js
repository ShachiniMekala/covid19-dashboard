import React,{useEffect,useState} from 'react';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';
import Local from './pages/local/local';
import Global from './pages/global/global';
import Navbar from './components/Navbar/Navbar';
import './App.css';

const App = ()=>{
const [data,setData]=useState([]);

useEffect(()=>{
  getData();
},[]);

const getData = async ()=>{
  const response=await fetch(`https://www.hpb.health.gov.lk/api/get-current-statistical`)
  const data_recv = await response.json();
  setData(data_recv.data);
  console.log(data_recv);
}
return(
  <Router>
    <Navbar/>
    <main className="pages">
      <Switch>
      <Route path="/" exact>
      <Local new_deaths={data.local_new_deaths} total_deaths={data.local_deaths} new_cases={data.local_new_cases} total_cases={data.local_total_cases} active_cases={data.local_active_cases} recoveries={data.local_recovered} last_updated={data.update_date_time} />
      </Route>
      <Route path="/global" exact>
      <Global new_deaths={data.global_new_deaths} total_deaths={data.global_deaths} new_cases={data.global_new_cases} total_cases={data.global_total_cases} recoveries={data.global_recovered} last_updated={data.update_date_time} />
      </Route>
      <Redirect to="/" />
      </Switch>
    </main>
  </Router>
);

}

export default App;
