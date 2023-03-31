import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookBookmark, faBookmark } from '@fortawesome/free-solid-svg-icons';
const Cart = (props) => {
    const {blog_title,read_time,images,author_name,id,publish_date,} = props.cart;

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = new Date(publish_date);
    const month = monthNames[date.getMonth()];
    const day = publish_date.slice(8, 10);


    return (
        <div className='my-5 border-t-2'>
            <img className='w-full h-96 my-5 rounded-md' src={images.blog_cover_image} alt="" />
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <div className='mr-2'>
                        <img className='w-14 h-14 rounded-full' src={images.author_image} alt="" />
                    </div>
                    <div className=''>
                        <h2 className='font-bold text-2xl'>{author_name}</h2>
                        <p className='publishing-date'>{month} {day}</p>
                    </div>
                </div>

                <div className='flex items-center'>
                    <p className='mr-2'>{read_time} min read</p>
                    <FontAwesomeIcon icon={faBookmark} style={{color: "#195fd7",}} />
                </div>
            </div>
            <div>
                <h1 className='text-4xl mt-3'>{blog_title}</h1>
                <p className='publishing-date my-2'>#beginners  #programming</p>
            </div>
            <button className='border-b-2 text-purple-800 font-bold text-sm'>Mark as read</button>
        </div>
    );
};

export default Cart;