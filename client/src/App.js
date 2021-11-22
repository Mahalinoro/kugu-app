import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Authentication from "./components/authentication";

const App = () => {
  return (
    <div>
        <Navbar />
        <Authentication />
        <Routes>
            <Route exact path="/">
            </Route>
        </Routes>
        <Footer />
     
    </div>
  );
};

export default App;