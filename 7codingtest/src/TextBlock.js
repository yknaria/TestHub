import React from 'react';

const TextBlock = (props) => {
    if(props.params.length === 0){
        return(        
            <div data-testid ="text1" ><p>{props.text}</p></div>
        );
    }
    else{
        let i = 0; /*index of current place in props.text array*/
        return(
            <div>
            {
                props.params.map( (record, pos) => {
                    const start = props.text.slice(i,record.index); /*get the first part of the text*/
                    i = i + record.length; /*update place in text*/
                    if(record.kind === 'emphasized'){
                        return(
                            <div data-testid ="start" style={{display:'inline'}} key={pos}>{start} <em>{props.text.slice(record.index,record.index+record.length)}</em></div>
                        )
                    }
                    if(record.kind === 'important'){
                        return(
                            <div style={{display:'inline'}} key={pos}>{start}<strong>{props.text.slice(record.index,record.index+record.length)}</strong></div>
                        )
                    }
                    console.log(record.kind, " is not supported. Styling has not been applied")
                    return(
                        
                        <div style={{display:'inline'}} key={pos}>{start}{props.text.slice(record.index,record.index+record.length)}</div>
                        
                    )
                })
            }
            {props.text.slice(i)}
            </div>
        );
    }

};

export default TextBlock;
