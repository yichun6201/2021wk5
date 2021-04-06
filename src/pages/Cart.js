import {useContext, useEffect} from "react";
import {Layout} from 'antd';
import { setProductDetail } from "../actions";
import { StoreContext } from "../store"
import ShoppingCart from "../components/ShoppingCart";
import CartProduct from "../components/CartProduct";
import NavBar from "../components/NavBar";
const { Header, Content, Footer } = Layout;

function Cart({ match }) {
     const { dispatch } = useContext(StoreContext);   
   return (
      <Layout className="container main-layout">
      <Layout className="bg-gray">
        <NavBar />
      </Layout>
      <Layout className="cart-container main-layout">
         <Layout className="bg-gray">       
            <ShoppingCart />
            <Content className="layout-content">
               <CartProduct />
            </Content>
         </Layout>
      </Layout>
      </Layout>
   );
}

export default Cart;