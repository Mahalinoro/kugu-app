import  axios from 'axios';
import React, { useEffect, useState, lazy, Suspense } from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes, useLocation } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Spinner from "./components/spinner";
import { useAuth0 } from '@auth0/auth0-react';

// chunck application
const ItemDetails = lazy(() => import('./pages/item-details'));
const Home = lazy(() => import('./pages/landing-page'));
const Sell = lazy(() => import('./pages/sell'));
const Cart = lazy(() => import('./pages/cart'));
const ProfilePage = lazy(() => import('./pages/profile-page'));
const Checkout = lazy(() => import('./pages/checkout'));


const App = () => {
  const [items, setItems] = useState([]);
  const { user, isAuthenticated } = useAuth0();  
  const query = new URLSearchParams(useLocation().search);
  const id = query.get("id");

  useEffect(() => {
      const getItems = async () => {
      try {
        const {data} = await axios.get('/items')
        setItems(data);
      } catch (err) {
        console.error(err);
      }
    };
    getItems();
  }, []);


  return (
    <div>
        <Navbar />
          { /* display spinner when page is loading */ }
          <Suspense fallback={<Spinner />}>
            <Routes>
                <Route exact path="/" element={<Home items={items}/>}></Route>
                <Route exact path="/item-details" element={<ItemDetails id={id}/>}></Route>
                <Route exact path="/sell" element={<Sell user={user} isAuthenticated={isAuthenticated}/>}></Route>
                <Route exact path="/cart" element={<Cart />}></Route>
                <Route exact path="/cart/checkout" element={<Checkout />} />
                <Route exact path="/user/profil" element={<ProfilePage />} />
              </Routes>
            </Suspense>
        <Footer />
    </div>
  );
};

export default App;