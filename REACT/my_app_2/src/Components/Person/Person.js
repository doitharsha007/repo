import React from 'react';


const Person=(props)=>{
    return (
        <div>
            <p>i'm {props.name} and iam {props.age} old</p>
            <input type="text"
            onChange={props.changed}
            value={props.name}
            />
        </div>
    )

}
export default Person;