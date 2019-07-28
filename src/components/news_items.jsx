import React from 'react';

import '../css/style.css'

const NewsItem = (props) => {
    return (
        <div className='col-7 news_items my-3'>
            <h3 className='text-primary'> {props.item.title} </h3>
               <div className='text-justify'>
                    {props.item.feed}
                </div>
        </div>
    );
}

export default NewsItem;