import { useAuth0 } from '@auth0/auth0-react';
import React, { useState} from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import '../assets/css/cart.css';
import axios from 'axios';

const Cart = () => {
    const navigation = useNavigate();
    const [state, setstate] = React.useState({
        isEmpty: true
    })

    const [cartItems, setCartItems] = useState([]);
    const {isAuthenticated } = useAuth0();

    React.useEffect(() => {
        setstate({ ...state, isEmpty: false });
        const getCartItems = async () => {
            try {
                const data = await axios.get('https://kugu-backend.herokuapp.com/cart/61b34d70defd5a118c4f3486');
                setCartItems(data);
            } catch (err) {
                console.error(err);
            }
        };
        getCartItems();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cartItems])

    let content;
    if (cartItems && isAuthenticated) {
        content = (
            <div className="cart-empty">
                <img alt="open-box" src="/images/open-box.png"></img>
                <p className="text-semibold-20">Oops! Your Cart is Empty</p>
                <p className="text-light-20">Looks like you haven’t added anything in your cart yet</p>
                <button className="text-medium-16 btn-cart">Your cart is empty!</button>
            </div>
        );
    } else if (!cartItems && isAuthenticated) {
        content = (
            <div className='cart-bg'>
                <div className="text-color cart">
                    <div className="my-cart">
                        <p className="text-medium-24">My Cart</p>
                        <div className="divider"></div>
                        {cartItems.items.map(item => (
                            <div className="cart-item-card">
                                <div className="cart-item-pic" style={{ backgroundImage: "url(/images/cup4.jpg)" }}></div>

                                <div className="cart-item-text">
                                    <p className="text-medium-16">{item.name}</p>
                                    <p className="text-bold-16">{item.price}</p>

                                </div>

                                <div>
                                    <button className="cart-item-btn text-medium-24">X</button>
                                </div>

                            </div>
                        ))}






                    </div>

                    <div className="order-summary">
                        <p className="text-medium-24">Order Summary</p>
                        <div className="divider"></div>

                        <div className="order-total">
                            <p className="text-regular-16">Subtotal</p>
                            <p className="text-regular-16">{cartItems.bill} RWF</p>
                        </div>

                        <div className="order-total">
                            <p className="text-regular-16">Delivery</p>
                            <p className="text-regular-16">0.0 RWF</p>
                        </div>

                        <div className="order-total">
                            <p className="text-bold-16">Total to pay</p>
                            <p className="text-bold-16">{cartItems.bill} RWF</p>
                        </div>

                        <button className="btn-checkout text-medium-16" onClick={() => navigation("/cart/checkout")}>Check out</button>
                    </div>

                </div>
            </div>

        )
    }
    else {
        content = (
            <div className="cart-empty">
                <p className="text-medium-20">Oops! You need to log in first to view the cart :(</p>
                <NavLink className="text-medium-16 btn-cart" to="/">Return to Home</NavLink>
            </div>
        )
    }
    return (
        content
    )
}

// return (
//     content
// )


export default Cart;
