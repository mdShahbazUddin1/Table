
import PlaceorderBtn from "./PlaceorderBtn";

const CoffeeItem = ({image, title, price ,Amount,id}) => {
  
  
 const handleChange=(val)=>{
             if(!val){
              console.log(val)
              Amount(price)
             }
             if(val){
              Amount(-price)
             }
 }
  
  return <div>{/* receive image,title,price and other required things as props    */}
  <div className="coffee_card">
   <img src={image} alt={title} />
   <h3>{title}</h3>
   <h5>{price}</h5>
   <PlaceorderBtn  handleChange={handleChange}/>
  </div>
  </div>;
};

export default CoffeeItem;
