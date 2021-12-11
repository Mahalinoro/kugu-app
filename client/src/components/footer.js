import React from "react";
 
// We import bootstrap to make our application look better.
// import "bootstrap/dist/css/bootstrap.css";
import '../assets/css/footer.css'; 

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
 
// Here, we display our Footer
const Footer = () => {
  return (
     <footer>
         <div className="footer-flex">
           <div className="footer-logo">
              <NavLink to="/" className="logo">© Kugu</NavLink>
           </div>

           <div className="footer-items">
              <div className="footer-ite text-light-16">
                <NavLink to="/" className="text-color">Privacy Policy</NavLink>
              </div>                    
              <div className="footer-item text-light-16">
                <NavLink to="/" className="text-color">Terms & Conditions</NavLink>
              </div>
           </div>
         </div>
     </footer>
  );
};
 
export default Footer;