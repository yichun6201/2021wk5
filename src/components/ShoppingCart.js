import { useContext } from "react";
import { Row, Col } from "antd";
import { Select } from 'antd';
import { StoreContext } from "../store"
import { setProductDetail } from "../actions";

const { Option } = Select;

function ShoppingCart() {
   const { state: { productDetail: { product, qty} }, dispatch } = useContext(StoreContext);

   return (
       
    <div className="cart-header">
        <h1 className="cart-tital">
            SHOPPING CART
        </h1>
        <h1 className="cart-tital-price">
            PRICE
        </h1>
        
    </div>
      
   );
}
export default ShoppingCart;