import React, { useEffect, useState } from 'react';
import './Bookmark.css';


const Bookmark = ({readTime}) => {
    const [time, setTime] = useState(readTime);


    useEffect( () => {
        const getReadTime = localStorage.getItem('readTime');
        setTime(getReadTime);

    }, [readTime])
    return (
        <div>
            <div className='spent-time p-2 rounded-md border'>
                <h2 className='text-xl font-bold'>Spent time on read: {time} min</h2>
            </div>
            <div className='marked-blog'>
                <h2>Bookmarked Blogs: </h2>

                <div className='bg-white'>

                </div>
            </div>
        </div>
    );
};

export default Bookmark;