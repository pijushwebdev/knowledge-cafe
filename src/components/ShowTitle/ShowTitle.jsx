import React from 'react';

const ShowTitle = ({ bookmark }) => {

    return (
        <div>
            {
                bookmark.map((bm) => (
                    <div  className='my-2 p-2 rounded-md bg-white' key={bm.id}>
                      {bm.blog_title}
                    </div>
                  ))
            }
        </div>
    );
};

export default ShowTitle;