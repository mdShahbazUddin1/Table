import React, { useState } from "react";
import CoffeeItem from "./CoffeeItem";

const CoffeeDetails = () => {
  const [data,setData]=useState([])
  const [amount,setAmount]=useState(0)
  const fetchData=()=>{
  fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee`)
  .then((res)=>res.json())
  .then((resp)=>{
   setData(resp.data)
   console.log(resp.data)
  })
  .catch((err)=>{
    console.log(err)
  })
  }
 const Amount=(val)=>{
  console.log(val)
   setAmount(val+amount)
 }
  return (
    <div>
      {/* You can use Coffeeitem with className's and data-cy as given in problem description  */}
      <h1>Coffee House</h1>
     {amount?<h6>Total cost:{amount}</h6>:null} 
      {data.length===0? <button className="get-coffee" onClick={fetchData}>Get Coffee</button>:
      <div className="coffee-container" data-cy="container">
         {data.map((item)=>{
          return <CoffeeItem key={item.id}{...item} Amount={Amount}/>
         })}
      </div>}
     
      
    </div>
  );
};

export default CoffeeDetails;
