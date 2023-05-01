import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Product = (props) => {
    const { picture, name, dob, location, email, phone, gender } = props.item
    const addToCart = props.addToCart
    return (
        <div className='product'>
            <div className="thumb">
                <img src={picture.large} alt="" />
            </div>
            <div className="product-info">
                <h3>Name: {name.title} {name.first} { name.last}</h3>
                <p><strong>Phone:</strong> { phone}</p> 
                <p><strong>Email:</strong> {email }</p> 
                <p><strong>Age:</strong> { dob.age}</p> 
                <p><strong>Sex:</strong> {gender }</p> 
                <p><strong>Country:</strong> {location.country} <sub>({ location.city})</sub></p> 
            </div>
            <button onClick={() => addToCart(name)}>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;