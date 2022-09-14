import React from 'react';
import plusimg from './plus.svg';

var dateOptions = {weekday: 'short', day: 'numeric', month: 'long', year: 'numeric'};
var timeOptions = {hour: '2-digit', minute: '2-digit'};
const ArticleDetail = (props) => {
    return(
        <div>
            <strong>{props.byline}</strong>, <em>{props.source}</em><br/> 
            {new Date(props.date).toLocaleDateString("en-UK",dateOptions)} {new Date(props.date).toLocaleTimeString("en-US", timeOptions)}
            <img src={plusimg} alt = "plusicon" width={15} style = {{marginLeft:5}}/>
        </div>

    );
};

export default ArticleDetail;