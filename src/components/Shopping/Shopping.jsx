import React, { useEffect, useState } from 'react';
import './Shopping.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shopping = () => {
    const [products, setProduct] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        const url = 'https://randomuser.me/api/?results=100'
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data.results))
        
    }, [])
    
    const addToCart = (name) => {
        const newCart = [...cart, name]
        setCart(newCart)
        const { title, first, last } = name

        

        const selectBox = document.getElementById('select-box') 
        const li = document.createElement('li')
        li.innerText = title + first + last
        selectBox.appendChild(li)
        // console.log(cart)
    }
    return (
        <div className='shop'>
            <div className="products-container">
                <h1>Product Found: {products.length }</h1>
                <div className="products">
                    {
                        products.map(item => <Product
                            item={item}
                            key={item.login.uuid}
                            addToCart={addToCart}
                        ></Product>)
                    }
                </div>
            </div>
            <Cart></Cart>
        </div>
    );
};

export default Shopping;