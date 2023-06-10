import React from "react";
import CartButton from "./CartButton";
const GroceryItem = (props) => {
  // recive name, image, and price as props
  
  const [visible,setVisible]=React.useState(true);
  const[count,setCount]=React.useState(0)
   const clickbtn=()=>{
      setVisible(false)
      setCount(count+1)
   }
   const increment=()=>{
    setCount((prev)=>prev + 1)
   }
   const derement=()=>{
    setCount((prev)=>prev - 1)
   }
   console.log(count)
   const { name, image, price}=props
  return (<>
  <div  className = "grocery_card" >GroceryItem
    
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <h5>{price}</h5>
    {visible? <button data-cy="add_to_cart"  onClick={clickbtn}>Add to Cart</button>:<CartButton count={count} increment={increment}
    derement={derement}/>} 
    
  </div>
  </>
  );
};

export default GroceryItem;
