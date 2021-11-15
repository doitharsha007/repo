import React from 'react';
const Char=(props)=>{
    const style={
        display:'inline-block',
        border:'1px solid black',
        padding:'16px',
        textAlign:'center',
        margin:'16px'
      }
    return(
        <div style={style} onClick={props.clicked}>
            {props.character}
        </div>
    );
};
export default Char;