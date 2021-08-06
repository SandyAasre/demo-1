import "./App.css";
import Header from "./Header/Header";
import React from "react";
import Product from "./Product/Product";
import Home from "./Home/Home";
import Checkout from "./Checkout/Checkout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login/Login";
import Cart from "./cart/cart";
import SimpleModal from "./CustomModal/CustomModal";

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/product" exact component={Product} />
        <Route path="/login" exact component={Login} />
        <Route path="/checkout" exact component={Checkout} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/model" exact component={SimpleModal} />
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
