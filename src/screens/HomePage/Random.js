import { Randomfood } from "./data"
import Rm  from "./Randomitem" 
import './Random.css'

const Randomimage = () => {
        return (
          <div className="re">
            { Randomfood.map((item,index) => (
              <Rm item={item} img={item.img} Foodname={item.Foodname} price={item.price} key={index}  />
            ))}
          </div>
        );
      };

 export default Randomimage