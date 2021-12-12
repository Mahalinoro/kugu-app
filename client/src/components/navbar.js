import React from "react";
 
// We import bootstrap to make our application look better.
// import "bootstrap/dist/css/bootstrap.css";
import '../assets/css/nav.css';

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";

class Navbar extends React.Component{
    constructor(props) {
      super(props);
      this.state = {isLogin: true};
    }

    render(){
        let content;
        if(this.state.isLogin){
            content = (
                <div className="nav-icon nav-log text-regular-16">
                    <div className="nav-avatar" style={{backgroundImage: "url(/images/profile.jpg)"}}></div>
                    <div class="dropdown">
                        <button class="dropbtn text-regular-16">Mahaly
                            <i>
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.59 0.294922L6 4.87492L1.41 0.294922L0 1.70492L6 7.70492L12 1.70492L10.59 0.294922Z" fill="black" fill-opacity="0.25"/>
                                </svg>
                            </i>
                        </button>
                        <div class="dropdown-content">
                            <NavLink to="/" className="text-regular-16 text-color">My Profile</NavLink>
                            <NavLink to="/" className="text-regular-16 text-color">Settings</NavLink>
                            <NavLink to="/" className="text-regular-16 text-color">Logout</NavLink>
                        </div>
                    </div>
                </div>
            );
        }else{
            content = (
            <div className="nav-icon text-regular-16">
                <NavLink to="/" className="nav-button primary-color">Sign Up | Login</NavLink>
            </div> 
            );
        }


        return (
            <nav>
        <div className="nav-container">
            <div className="nav-link-items">
                <div className="logo-item">
                    <NavLink to="/" className="logo">Kugu</NavLink>
                </div>
                <div className="nav-item text-regular-20">
                    <NavLink to="/sell" className="text-color">SELL</NavLink>
                </div>                    
                <div className="nav-item text-regular-20">
                    <NavLink to="/" className="text-color">ABOUT</NavLink>
                </div>
            </div>

            <div className="nav-search">
                <form>
                    <div className="search-box">
                        <input type="search" placeholder="Search for Item" className="search-input text-regular-16"></input>
                        <i aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                <path d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                            </svg>
                        </i>
                    </div>                       
                </form>
            </div>

            <div className="nav-icons-buttons">                    
                <div className="nav-icon">
                    <NavLink to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/>
                        </svg>
                    </NavLink>
                </div>
                    <div className="nav-icon">
                    <NavLink to="/cart">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
                        </svg>
                    </NavLink>
                </div>
                <NavLink to="/user/profile">{content}</NavLink>           
            </div>
        </div>
    </nav>

        )
    }

}
 
  
export default Navbar;