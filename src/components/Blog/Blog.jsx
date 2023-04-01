import React, { useEffect, useState } from 'react';
import './Blog.css'
import Cart from '../Cart/Cart';
import Bookmark from '../Bookmark/Bookmark';

const Blog = () => {
const [carts, setCarts] = useState([]);
const [readTime, setReadTime] = useState('0');
const [bookmark, setBookMark] = useState([]);



useEffect( () => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setCarts(data.data))
}, []);


const handleMarkAsRead =(time) => {
    const prevReadTime = JSON.parse(localStorage.getItem('readTime'));
    if(prevReadTime){
        const sumTime = parseInt(prevReadTime) + parseInt(time);
        localStorage.setItem('readTime',sumTime);
        setReadTime(sumTime)
    }else{
        localStorage.setItem('readTime',time);
        setReadTime(time);
    }
}

const handleBookMark = (data) => {
    const newBookMark = [...bookmark,data];
    setBookMark(newBookMark);
}
    return (
        <div className='blog-container grid grid-cols-1 lg:grid-cols-5'>
            <div className="post-container lg:col-span-4">
                {
                    carts.map(cart => <Cart 
                        cart={cart} 
                        key={cart.id}
                        handleMarkAsRead={handleMarkAsRead}
                        handleBookMark={handleBookMark}
                        ></Cart>)
                }
            </div>
            <div className="progress-container lg:col-span-1">
                <Bookmark 
                    readTime={readTime}
                    bookmark={bookmark}
                ></Bookmark>
            </div>
        </div>
    );
};

export default Blog;