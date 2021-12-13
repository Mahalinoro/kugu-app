import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
// import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../assets/css/cart.css'; 


const Cart = () => {
    const navigation = useNavigate();
    const [state, setstate] = React.useState({
        isEmpty: true
    })

    const { user, isAuthenticated } = useAuth0();

    React.useEffect(() => {
        setstate({...state, isEmpty: false});
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    let content;
    if(state.isEmpty && isAuthenticated){
            content = (
                <div className="cart-empty">
                    <img alt="open-box" src="/images/open-box.png"></img>
                    <p className="text-semibold-20">Oops! Your Cart is Empty</p>
                    <p className="text-light-20">Looks like you haven’t added anything in your cart yet</p>
                    <button className="text-medium-16 btn-cart">Your cart is empty!</button>
                </div>
            );
        }else if (!state.isEmpty && isAuthenticated){
            content = (
                <div className='cart-bg'>
                <div className="text-color cart">
                <div className="my-cart">
                    <p className="text-medium-24">My Cart</p>
                    <div className="divider"></div>

                    <div className="cart-item-card">
                        <div className="cart-item-pic" style={{backgroundImage: "url(/images/cup4.jpg)"}}></div>

                        <div className="cart-item-text">
                            <p className="text-medium-16">Item Name</p>
                            <p className="text-bold-16">Price</p>
                            
                        </div>

                        <div>               
                            <button className="cart-item-btn text-medium-24">X</button>
                        </div>

                    </div>

                    <div className="cart-item-card">
                        <div className="cart-item-pic" style={{backgroundImage: "url(/images/cup4.jpg)"}}></div>

                        <div className="cart-item-text">
                            <p className="text-medium-16">Item Name</p>
                            <p className="text-bold-16">Price</p>
                            
                        </div>

                        <div>               
                            <button className="cart-item-btn text-medium-24">X</button>
                        </div>

                    </div>

                    <div className="cart-item-card">
                        <div className="cart-item-pic" style={{backgroundImage: "url(/images/cup4.jpg)"}}></div>

                        <div className="cart-item-text">
                            <p className="text-medium-16">Item Name</p>
                            <p className="text-bold-16">Price</p>
                            
                        </div>

                        <div>               
                            <button className="cart-item-btn text-medium-24">X</button>
                        </div>

                    </div>

                </div>

                <div className="order-summary">
                    <p className="text-medium-24">Order Summary</p>
                    <div className="divider"></div>

                    <div className="order-total">
                        <p className="text-regular-16">Subtotal</p>
                        <p className="text-regular-16">0.0 RWF</p>
                    </div>

                    <div className="order-total">
                        <p className="text-regular-16">Delivery</p>
                        <p className="text-regular-16">0.0 RWF</p>
                    </div>

                    <div className="order-total">
                        <p className="text-bold-16">Total to pay</p>
                        <p className="text-bold-16">0.0 RWF</p>
                    </div>

                    <button className="btn-checkout text-medium-16" onClick={() => navigation("/cart/checkout")}>Check out</button>
                </div>
                
            </div>
            </div>

            )
        }
        else{
            content = (
                <div>
                    <p>You need to login to view cart</p>
                </div>
            )
        }
        return (
            content
        )
}

export default Cart;
