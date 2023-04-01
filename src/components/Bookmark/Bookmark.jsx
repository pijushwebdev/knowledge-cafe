import React, { useEffect, useState } from 'react';
import './Bookmark.css';
import ShowTitle from '../ShowTitle/ShowTitle';


const Bookmark = ({readTime,bookmark}) => {
    const [time, setTime] = useState(readTime);
    console.log(bookmark);

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
                <h2>Bookmarked Blogs: {bookmark.length}</h2>

                <div className='my-2'>
                    <ShowTitle bookmark={bookmark}></ShowTitle>
                </div>
            </div>
        </div>
    );
};

export default Bookmark;