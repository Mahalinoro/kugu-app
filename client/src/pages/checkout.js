import React from 'react';
import '../assets/css/cart.css'; 
import "./../assets/css/checkout.css";


const CheckoutPage = () => {
    return (
        <div className='checkout-page'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h3 className='checkout-title'>Check out</h3>
                        <div className='checkout-details'>
                            <div className='row'>
                                <div className='col-md-10'>
                                    <p className='text-regular-18'>Address</p>
                                    <p className='text-regular-18'>Add your address</p>
                                </div>
                                <div className='col-md-2'>
                                    <button className="cart-item-btn text-medium-36">+</button>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-10'>
                                    <p className='text-regular-18'>Payment Method</p>
                                    <p className='text-regular-18'>Add your payment Method</p>
                                </div>
                                <div className='col-md-2'>
                                    <button className="cart-item-btn text-medium-36">+</button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className='col-md-6'>
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

                            <button className="btn-checkout text-medium-16" onClick={() => alert("Processing...")}>Check out</button>
                        </div>
                    </div>
                </div>
            </div>
    )
};

export default CheckoutPage;