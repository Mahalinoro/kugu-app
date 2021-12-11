import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/css/item.css'; 


export default class ItemDetails extends React.Component{
    constructor(props) {
      super(props);
      this.state = {isModalOpen: false};
    }

    handleClickModalOpen() {
      this.setState({isModalOpen: true});
    }

     handleClickModalClose() {
      this.setState({isModalOpen: false});
    }

    render() {
        let modal;
        if(this.state.isModalOpen){
            modal = (
                <div className="cart-modal">
                    <div className="modal-container">
                        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M70 36C70 40.4649 69.1206 44.8862 67.4119 49.0112C65.7032 53.1363 63.1988 56.8844 60.0416 60.0416C56.8844 63.1988 53.1363 65.7032 49.0112 67.4119C44.8862 69.1206 40.4649 70 36 70C31.5351 70 27.1138 69.1206 22.9888 67.4119C18.8637 65.7032 15.1156 63.1988 11.9584 60.0416C8.80117 56.8844 6.29675 53.1363 4.58809 49.0112C2.87943 44.8862 2 40.4649 2 36C2 31.535 2.87944 27.1138 4.5881 22.9888C6.29676 18.8637 8.80119 15.1156 11.9584 11.9584C15.1156 8.80117 18.8637 6.29675 22.9888 4.58809C27.1138 2.87943 31.5351 2 36 2C40.465 2 44.8862 2.87944 49.0113 4.5881C53.1363 6.29677 56.8845 8.80119 60.0416 11.9584C63.1988 15.1156 65.7033 18.8637 67.4119 22.9888C69.1206 27.1139 70 31.5351 70 36L70 36Z" stroke="#F5F5F5" stroke-width="4"/>
                            <path d="M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36ZM4.68 36C4.68 53.2976 18.7024 67.32 36 67.32C53.2976 67.32 67.32 53.2976 67.32 36C67.32 18.7024 53.2976 4.68 36 4.68C18.7024 4.68 4.68 18.7024 4.68 36Z" fill="#FAA300"/>
                            <path d="M49.3942 25.2188H47.0538C46.7257 25.2188 46.4143 25.3694 46.2134 25.6272L32.4087 43.115L25.7893 34.7277C25.6892 34.6005 25.5615 34.4977 25.416 34.427C25.2704 34.3562 25.1107 34.3194 24.9489 34.3192H22.6085C22.3842 34.3192 22.2603 34.577 22.3975 34.7511L31.5683 46.3694C31.9969 46.9118 32.8205 46.9118 33.2525 46.3694L49.6051 25.6473C49.7424 25.4766 49.6185 25.2188 49.3942 25.2188Z" fill="#FAA300"/>
                        </svg>
                        <p className="text-light-20">Amazing!</p>
                        <p className="text-light-20">Item successfully added to cart</p>
                        <button onClick={() => {this.handleClickModalClose()}} className="text-medium-16 btn-modal btn-modal-white">Continue Shopping</button>
                        <NavLink to="/cart" className="text-medium-16 btn-modal btn-modal-trans">View Cart</NavLink>
                    </div>
                </div>
            )
        }else{
            modal = (
                <div hidden="true"></div>
            )
        }

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
                        <button className="btn-item btn-cart text-medium-16" onClick={() => {this.handleClickModalOpen()}}>Add to Cart</button>
                        <button className="btn-item btn-fav text-medium-16">Add to Favorites</button>
                    </div>
                </div>

                {modal}

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