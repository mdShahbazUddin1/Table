import React from "react";
import GroceryItem from "./GroceryItem"

const Grocerydetails = () => {
  const[users,setUsers]=React.useState([])
 
  function getData(){
    return  fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-groceries")
     .then((res)=>(
    res.json()
     ))
     }
   
  const handelclick= async ()=>{
    
   try{
   let resp = await getData()
   setUsers(resp.data)
     
  } catch(err){
    console.log(err)
  }
}

  return (
    
    <div >
      <h1>Groceries</h1>
      <button className="get-groceries" onClick={handelclick}>Get-Groceries</button>
      {/* map data to grocery item use className and data-cy as given in problem description  */}
      <div data-cy="container" style={{width:"50%",margin:"auto"}}>
      {users.map((item)=>(
      
      <GroceryItem key={item.id} {...item}/>
      ))}
      </div>
    
     
    </div>
    
  );
};

export default Grocerydetails;
