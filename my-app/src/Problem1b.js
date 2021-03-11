import React, {useState} from 'react'

export default function Problem1b(props) {
    const{details} = props;
    return(
        <div className = 'problem1b_flex'>
            <div className = 'problem1b'>
                <h2>{details.name}</h2>
                <p>Grade: {details.grade}</p>
                <p>Average: {details.average}</p>
            </div>
        </div>
    )
}
