import React, { useState } from 'react'

const PlaceorderBtn = ({handleChange}) => {
  const [placed,setPlaced]=useState(false)
  const handlClick=()=>{
    setPlaced(!placed)
    handleChange(placed)
  }
  const handleCancel=()=>{
    setPlaced(!placed)
    handleChange(placed)
  }
  return (
    <div>
    {/* use className and data-cy as given in problem */}
   <button className="place_order_button" disabled={placed===true} onClick={ handlClick}>{placed?"Order Placed":"Place Order"}</button>
  {placed? <button className="cancel_order_button" onClick={handleCancel}>Cancel Order</button>:null}
    </div>
  )
}

export default PlaceorderBtn