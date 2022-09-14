import React from 'react';
import ArticleDetail from './ArticleDetail';
import TextBlock  from './TextBlock';
import ImageBlock from './ImageBlock';
import QuoteBlock from './QuoteBlock';
import Content from './codetestjson.json';
import './styles.css';

const App = () => {
    return (
        <div className='page'>
            <div><h1>{Content.headline}</h1></div>
            <ArticleDetail
            byline = {Content.byline}
            source = {Content.source}
            date = {Content.publicationDate}
            /> 
            <hr/>
            {
            Content.blocks.map( (record, pos) => {
                if (record.kind === "text"){
                    return(<div key={pos}><TextBlock text={record.text} params={record.intentions}/></div>)
                }
                if (record.kind === "image"){
                    return(<div key={pos}><ImageBlock link={record.url} caption={record.captionText}/></div>)
                }
                if (record.kind === "pull-quote"){
                    return(<div key={pos}><QuoteBlock text={record.text} author={record.attribution}/></div>)
                }
                return(
                    console.log(record.kind, " is not supported")
                )
            })
            }
        </div>
    );

};

export default App;