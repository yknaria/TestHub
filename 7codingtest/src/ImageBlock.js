import React from 'react';

const ImageBlock = (props) => {
    return(
        <div className='centerElement'>
            <img src = {props.link}/>
            <div className='imgquote'>{props.caption}</div>
        </div>
    );
};

export default ImageBlock;