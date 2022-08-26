
import {useCart} from "react-use-cart"
import './Random.css'


 const Rm  = (props) => {

const {addItem} =useCart()

return (
    <div >
      <div className="tp">
      <img className="Randomimg" src={props.img} alt='sample'/>
      <div className="bottom">
        <div className="fn">{props.Foodname}</div>
        <div  className="p">₹{props.price} </div>
        <div className="b">
        <button className="ac" onClick={()=> addItem(props.item)}>Add cart</button>
        </div>
        </div>
      </div>
    </div>
  );
};
export default Rm;