import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/css/item.css'; 


export default class ItemDetails extends React.Component{
    render() {
        return (
            <div className="item-container">
                <div className="item-details">
                    <div className="item-photo" style={{backgroundImage: "url(/images/cup.jpg)"}}>
                        {/* <img className="it-pic" alt="cup" src={cup}></img> */}
                    </div>

                    <div className="item-description text-color">
                        <p className="heading-28">Item Details | <span className="text-light-28">Category</span></p>
                        <p className="text-light-20">Item Name</p>
                        <p className="text-semibold-20">Price</p>
                        <p className="text-medium-20">Description</p>
                        <p className="text-light-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <p className="text-medium-20">Condition</p>
                        <p className="text-light-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className="text-medium-20">Vendor</p>
                        <div className="vendor-profile">
                            <div className="vendor-picture" style={{backgroundImage: "url(/images/profile.jpg)"}}>
                                {/* <img alt="profile" src={profile}></img> */}
                            </div>

                            <div>
                                <p className="text-light-16 rem">Name</p>
                                <NavLink to="/" className="text-light-16 primary-color" >View Profile</NavLink>
                            </div>
                        </div>

                        <div className="divider"></div>
                        <button className="btn-item btn-cart text-medium-16">Add to Cart</button>
                        <button className="btn-item btn-fav text-medium-16">Add to Favorites</button>
                    </div>
                </div>

                <div className="similar-items">
                    <p className="heading-28">Similar Items</p>

                    <div className="similar-container">
                        <div className="item-wrapper">
                            <div className="item-card">
                                <div className="item-pic" style={{backgroundImage: "url(/images/cup6.jpg)"}}></div>

                                <div className="first-row">
                                    <div>
                                        <p className="text-bold-16">Price</p>
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
                                        <p className="text-regular-16">Title</p>
                                    </div>

                                    <div>
                                        <p className="text-light-16">Vendor Name</p>
                                    </div>
                                </div>
                            </div>

                             <div className="item-card">
                                <div className="item-pic" style={{backgroundImage: "url(/images/cup5.jpg)"}}></div>

                                <div className="first-row">
                                    <div>
                                        <p className="text-bold-16">Price</p>
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
                                        <p className="text-regular-16">Title</p>
                                    </div>

                                    <div>
                                        <p className="text-light-16">Vendor Name</p>
                                    </div>
                                </div>
                            </div>

                             <div className="item-card">
                                <div className="item-pic" style={{backgroundImage: "url(/images/cup3.jpg)"}}></div>

                                <div className="first-row">
                                    <div>
                                        <p className="text-bold-16">Price</p>
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
                                        <p className="text-regular-16">Title</p>
                                    </div>

                                    <div>
                                        <p className="text-light-16">Vendor Name</p>
                                    </div>
                                </div>
                            </div>

                             <div className="item-card">
                                <div className="item-pic" style={{backgroundImage: "url(/images/cup2.jpg)"}}></div>

                                <div className="first-row">
                                    <div>
                                        <p className="text-bold-16">Price</p>
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
                                        <p className="text-regular-16">Title</p>
                                    </div>

                                    <div>
                                        <p className="text-light-16">Vendor Name</p>
                                    </div>
                                </div>
                            </div>

                             <div className="item-card">
                                <div className="item-pic" style={{backgroundImage: "url(/images/cup1.jpg)"}}></div>

                                <div className="first-row">
                                    <div>
                                        <p className="text-bold-16">Price</p>
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
                                        <p className="text-regular-16">Title</p>
                                    </div>

                                    <div>
                                        <p className="text-light-16">Vendor Name</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{textAlign:'center'}}>
                            <button className="similar-btn text-medium-16">Load More</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}