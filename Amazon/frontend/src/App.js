import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import { signout } from './actions/userActions';
import PrivateRouter from './components/PrivateRouter';
import CartCreen from './screen/CartCreen';
import HomeCreen from './screen/HomeCreen';
import OrderCreen from './screen/OrderCreen';
import OrderHistoryCreen from './screen/OrderHistoryCreen';
import PaymentMethodCreen from './screen/PaymentMethodCreen';
import PlaceOderCreen from './screen/PlaceOderCreen';
import ProductCreen from './screen/ProductCreen';
import ProfileCreen from './screen/ProfileCreen';
import RegisterCreen from './screen/RegisterCreen';
import ShippingAddressCreen from './screen/ShippingAddressCreen';
import SigninCreen from './screen/SigninCreen';
function App() {

  const cart = useSelector(state => state.cart);
  const {cartItems} =cart;
  const userSignin = useSelector((state) =>state.userSignin);
  const {userInfo} = userSignin;
  const dispatch = useDispatch();
  const signoutHandle =() =>{
    dispatch(signout());
  }
  return (
    <BrowserRouter>    
      <div className="gird-container">
    <header className="row">
      <div>
        <Link className="brand" to="/"> Amazon</Link>
      </div>
      <div>
        <Link to="/cart"> Cart
        {cartItems.length > 0 && (
          <span className="badge">{cartItems.length}</span>
        )}
        </Link>

        {
          userInfo ?(
            <div className="dropdown">
            <Link to="#">
              {userInfo.name} <i className="fa fa-caret-down"></i> 
            </Link>
            <ul className="dropdown-content">
              <li>
                <Link to="/profile">User Profile </Link>
              </li>

              <li>
                <Link to="/orderhistory" > Order History</Link>
              </li>
              <li>
              <Link to="#signout" onClick={signoutHandle}>
                Sign Out
              </Link>
              </li>
           
            </ul>
            </div>
          ) :
          (
            <Link to="/signin"> Singin </Link>
          )
        }
      {userInfo && userInfo.isAdmin  && (
        <div className="dropdown">
          <Link to ='/#admin'>
            Admin {''} <i className="fa fa-caret-down" > </i> </Link>
            <ul className="dropdown-content">
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/productlist">Product</Link>
              </li>
              <li>
                <Link to="/orderlist">Orders</Link>
              </li>
              <li>
                <Link to="/userlist">Users</Link>
              </li>
            </ul>
          </div>
      )}
      </div>
    </header>
    <main>

      <Route path="/cart/:id?" component ={CartCreen}  ></Route>
      <Route path="/signin" component ={SigninCreen}  ></Route>
      <Route path="/shipping" component ={ShippingAddressCreen}  ></Route>
      <Route path="/payment" component ={PaymentMethodCreen}  ></Route>
      <Route path="/placeorder" component ={PlaceOderCreen}  ></Route>
      <Route path="/register" component ={RegisterCreen}  ></Route>
      <Route path="/orderhistory" component ={OrderHistoryCreen}  ></Route>
      <PrivateRouter path="/profile" component ={ProfileCreen}  ></PrivateRouter>
      <Route path="/product/:id" component ={ProductCreen}  ></Route>
      <Route path="/order/:id" component ={OrderCreen} exact></Route>
      <Route path="/" component ={HomeCreen} exact></Route>
   
    </main>
    <footer className="row center"> All right reserved</footer>
  </div>
  </BrowserRouter>

  );
}

export default App;
