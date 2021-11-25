import React from "react";
 
// We import bootstrap to make our application look better.
// import "bootstrap/dist/css/bootstrap.css";
import '../assets/css/auth.css';

// We import material icons for the page
// import { ShoppingCartOutlinedIcon } from '@mui/icons-material/ShoppingCartOutlined';
// import { FavoriteBorderOutlinedIcon } from '@mui/icons-material/FavoriteBorderOutlined';
// import { SearchOutlinedIcon } from '@mui/icons-material/SearchOutlined';

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
 
class Authentication extends React.Component {
  constructor(props) {
      super(props);
      this.state = {isLogin: false};
  }

  handleClickLogin() {
      this.setState({isLogin: false});
  }

  handleClickSignUp() {
      this.setState({isLogin: true});
  }

  render() {
    let modal;
    if(this.state.isLogin){
        modal = (
        <div className='modal'>
        <div className="login-container">
            <p className="text-medium-36 text-color">Welcome Back!</p>
            <form>
              <div className="email-box">
                  <input type="email" placeholder="Email" className="email-input text-regular-16"></input>
                  <i aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                      <path d="M0 0h24v24H0V0z" fill="none"/>
                      <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
                    </svg>                      
                  </i>
              </div>  

              <div style={{margin: "16px"}}></div>

              <div className="email-box">
                  <input type="password" placeholder="Password" className="email-input text-regular-16"></input>
                  <i aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g fill="none">
                        <path d="M0 0h24v24H0V0z"/><path d="M0 0h24v24H0V0z" opacity=".87"/>
                        </g><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
                      </svg>
                  </i>
              </div>     

              <div style={{margin: "16px"}}></div>

              <input type="submit" className="login-btn text-medium-16" value="Login"></input>
            </form>
            <div style={{margin: "16px"}}></div>
            <NavLink to="/" className="text-regular-16 text-color forgot">forgot your password?</NavLink>
        
            {/* <button>Continue with Google</button>
            <button>Continue with Facebook</button> */}
            <div className="divider"></div>
            <p className="text-regular-16 text-color">Don’t have an account? <button className="signup-btn text-medium-16" onClick={() => {this.handleClickLogin()}}>Sign Up</button></p>
            
        </div>
    </div>

      );

      }else{       
        modal = (
          <div className='modal'>
        <div className="login-container">
            <p className="text-medium-36 text-color">Create An Account</p>
            <form>
               <div className="email-box">
                  <input type="text" placeholder="Name" className="email-input text-regular-16"></input>
                  <i aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                      <path d="M0 0h24v24H0V0z" fill="none"/>
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"/>
                    </svg>                   
                  </i>
              </div>  

              <div style={{margin: "16px"}}></div>

              <div className="email-box">
                  <input type="email" placeholder="Email" className="email-input text-regular-16"></input>
                  <i aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                      <path d="M0 0h24v24H0V0z" fill="none"/>
                      <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
                    </svg>                      
                  </i>
              </div>  

              <div style={{margin: "16px"}}></div>

              <div className="email-box">
                  <input type="password" placeholder="Password" className="email-input text-regular-16"></input>
                  <i aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g fill="none">
                        <path d="M0 0h24v24H0V0z"/><path d="M0 0h24v24H0V0z" opacity=".87"/>
                        </g><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
                      </svg>
                  </i>
              </div>     

              <div style={{margin: "16px"}}></div>

              <input type="submit" className="login-btn text-medium-16" value="Sign Up"></input>
            </form>
            <div style={{margin: "16px"}}></div>
            <NavLink to="/" className="text-regular-16 text-color forgot">forgot your password?</NavLink>

        
            {/* <button>Continue with Google</button>
            <button>Continue with Facebook</button> */}
            <div className="divider"></div>
            <p className="text-regular-16 text-color">Already have an account? <button className="signup-btn text-medium-16" onClick={() => {this.handleClickSignUp()}}>Login</button></p>
            
        </div>
    </div>

        );
      
      
    }
    return (
      modal
    );
  }
}
 
export default Authentication;