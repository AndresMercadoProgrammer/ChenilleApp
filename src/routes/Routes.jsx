import React from "react";
import Layout from "../Components/Layout/Layout";
import {
  BrowserRouter,
  Routes as ReactDomRoutes,
  Route,
} from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import { Footer } from "../Components/Footer/Footer";
import { Header } from "../Components/Header/Header";
import { Shop } from "../Pages/Shop/Shop";

import Account from "../Pages/AccountProfile/Account";
import { Cart } from "../Components/Cart/Cart";
import { Contact } from "../Pages/Contact/Contact";
import ScrollToTop from "../Components/ScrollTop/ScrollTop";
import { Login } from "../Pages/Login/Login";
import { Register } from "../Pages/Register/Register";

export const Routes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Cart />
      <Layout>
        <ReactDomRoutes>
          <Route path="*" element={<p>Error</p>} />
          <Route path="/" element={<Home />} />
          <Route path="shop">
            <Route index element={<Shop />} />
            <Route path=":category" element={<Shop />} />
          </Route>

          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="MyAccount" element={<Account />} />
          <Route path="contact" element={<Contact />} />
        </ReactDomRoutes>
      </Layout>
      <Footer />
    </BrowserRouter>
  );
};
