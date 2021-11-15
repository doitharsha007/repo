import React from 'react';

const UserInput= (props)=>{
    return(
        <div>
        <input type="text"
        onChange={props.changed}
        value={props.value}
        />
        <p>{props.value}</p>
        </div>
    )
}
export default UserInput;