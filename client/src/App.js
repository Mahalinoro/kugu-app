import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ItemDetails from "./pages/item-details";
import Home from "./pages/landing-page";


const App = () => {
  return (
    <div>
        <Navbar />
          <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/item-details" element={<ItemDetails />}></Route>
            </Routes>
        <Footer />
     
    </div>
  );
};

export default App;