import React from 'react';

const QuoteBlock = (props) =>{
    return(
        <div>
        <blockquote className="blockquote">
            <p className='blockquoteText'>
                {props.text}
            </p>
            <p className='blockquoteAuthor'>
                {props.author}
            </p>
        </blockquote>
        </div>
    );
};

export default QuoteBlock;