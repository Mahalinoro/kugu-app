import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/css/home.css'; 
import '../assets/css/item.css';


export default class Home extends React.Component{
    render() {
        return (
            <div className="text-color home">
                <div className="home-hero">
                    <div className="hero-card">
                        <p className="text-regular-18">Welcome to Kugu, a one-stop shop for all things second-hand.</p>
                        <div className="divider-card"></div>
                        <NavLink to="/" className="hero-btn text-regular-16">How it Works?</NavLink>
                    </div>
                </div>
                
                <div className="item-display">
                    <div className="item-categories">
                        <div className='category'>
                            <button className="category-btn btn-active">
                                <i>
                                    <svg className="svg-active" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g>
                                        <rect fill="none" height="24" width="24"/></g><g><g>
                                        <path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h6v-6h2v6h6v-8h3L19,9.3z M17,18h-2v-6H9v6H7v-7.81l5-4.5l5,4.5V18z"/>
                                        <path d="M10,10h4c0-1.1-0.9-2-2-2S10,8.9,10,10z"/></g></g>
                                    </svg>
                                </i>
                            </button>
                            <span className="text-regular-16 primary-color">Household Items</span>
                        </div>

                        <div className='category'>
                            <button className="category-btn">
                                <i>
                                   <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g>
                                       <rect fill="none" height="24" width="24"/>
                                       <path d="M21.6,18.2L13,11.75v-0.91c1.65-0.49,2.8-2.17,2.43-4.05c-0.26-1.31-1.3-2.4-2.61-2.7C10.54,3.57,8.5,5.3,8.5,7.5h2 C10.5,6.67,11.17,6,12,6s1.5,0.67,1.5,1.5c0,0.84-0.69,1.52-1.53,1.5C11.43,8.99,11,9.45,11,9.99v1.76L2.4,18.2 C1.63,18.78,2.04,20,3,20h9h9C21.96,20,22.37,18.78,21.6,18.2z M6,18l6-4.5l6,4.5H6z"/></g>
                                   </svg>
                                </i>
                            </button>
                            <span className="text-regular-16">Clothes & Shoes</span>

                        </div>

                        <div className='category'>
                            <button className="category-btn">
                                <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                        <path d="M0 0h24v24H0V0z" fill="none"/>
                                        <path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"/>
                                    </svg>
                                </i>
                            </button>
                            <span className="text-regular-16">Electronics</span>
                        </div>
                    </div>

                    <div className="divider "></div>

                    <div className="item-carousel">
                        <div className="item-wrapper">
                            {this.props.items.map(item => (
                                <div className="item-card">
                                <div className="item-pic" style={{ backgroundImage: `url(`+ item.img + `)`}}></div>

                                <div className="first-row">
                                    <div>
                                        <p className="text-bold-16">{item.price}</p>
                                    </div>
                                    <div>
                                        <i className="mr-flag">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.36 6L12.76 8H18V14H14.64L14.24 12H7V6H12.36ZM14 4H5V21H7V14H12.6L13 16H20V6H14.4L14 4Z" fill="black"/>
                                            </svg>
                                        </i>
                                        <i>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                                <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/>
                                            </svg>
                                        </i>
                                    </div>
                                </div>

                                <div className="second-row">
                                    <div>
                                        <p className="text-regular-16">{item.name}</p>
                                    </div>

                                    <div>
                                        <p className="text-light-16">Vendor Name</p>
                                    </div>
                                </div>
                            </div>
                            ))}
                              
                        </div>
                    </div>

                    
                </div>


            </div>
        )
    }
}