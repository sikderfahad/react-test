import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
        <div className='order-summery'>
            <h2>Order Summery</h2>
            <div className="order-info">
                <p>Selected item: <strong>{ }</strong></p>
                <ol id='select-box' type='number'>
                    
                </ol>
            </div>
        </div>
    );
};

export default Cart;