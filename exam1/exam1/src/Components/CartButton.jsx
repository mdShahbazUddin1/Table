import React from "react";
import GroceryItem from "./GroceryItem";
const CartButton = (props) => {
   const{increment,derement,count}=props;
  return(
    <>
   {count<1?<GroceryItem/>:<div className = "change_quantity_container" >
    {/* use className and data-cy as given in problem */}
   <button data-cy = "inc_btn" onClick={increment}>+</button>
   <button data-cy = "dec_btn" onClick={derement}>-</button>
   <p className="quantity">{count}</p>
    </div>
}
    </>
  )
};

export default CartButton;
