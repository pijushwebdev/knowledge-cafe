import React, { useEffect, useState } from 'react';
import './Blog.css'
import Cart from '../Cart/Cart';

const Blog = () => {

const [carts, setCarts] = useState([]);

useEffect( () => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setCarts(data.data))
}, [])

    return (
        <div className='blog-container grid grid-cols-1 lg:grid-cols-5'>
            <div className="post-container lg:col-span-4 m-12">
                {
                    carts.map(cart => <Cart 
                        cart={cart} 
                        key={cart.id}
                        
                        ></Cart>)
                }
            </div>
            <div className="progress-container lg:col-span-1">

            </div>
        </div>
    );
};

export default Blog;