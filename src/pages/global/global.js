import React from 'react';
import {Card} from 'react-bootstrap';

const Global=({new_deaths,total_deaths,new_cases, total_cases,recoveries,last_updated})=>{
    return(

<div>
<Card.Header className="page-header">COVID-19 Global Analysis Dashboard </Card.Header>

<div className="small-cards-header">Daily Update</div>
<div className="cards">
<div className="small-cards"><div className="count">{new_cases}</div> <div className="description">Cases</div></div>
<div className="small-cards"><div className="count">{new_deaths}</div> <div className="description">Deaths</div></div>
</div>

<div className="small-cards-header">Total</div>
<div className="cards">
<div className="small-cards"><div className="count">{total_cases}</div> <div className="description">Total Cases</div></div>
<div className="small-cards"><div className="count">{recoveries}</div> <div className="description">Recovered</div></div>
<div className="small-cards"><div className="count">{total_deaths}</div> <div className="description">Deaths</div></div>
</div>

<Card.Header className="page-footer">last updated at : {last_updated}</Card.Header>
</div>
    );

}

export default Global;