import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useState, useEffect} from 'react';
import '../App.css';


function Dashboard() {
  const [stocks, setStocks] = useState([]);
  useEffect(()=>{ 
  const getStock = async () => {
    const response = await axios.get('https://financialmodelingprep.com/api/v3/available-traded/list?apikey=e60c79af5d65d98572ebe4736b8259f5')
  
    

let {data} = response;
data.length = 10;
console.log(data)
setStocks(data);
  };
  getStock();
},[])

const stockList = stocks.map((element, key) =>{
  return (
    <div key={key} className="stocklist">
      <Link className="name"  to={`/Stock/${element.symbol}`}>
 <p className="name">{element.name}</p> </Link>
      <p className="price">${element.price}</p>
      <p>{element.symbol}</p> 
      
    </div>
  );
});
  return (
    <div>
                  <div>
                    <h1>Current Stock List</h1>
                  </div>
                  <div className="table">
                   </div>
                   {stockList}
         
      
   </div>
  )
}

export default Dashboard
