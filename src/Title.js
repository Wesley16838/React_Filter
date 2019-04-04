import React from 'react'
import "./styles.css";

const Title = props => {
    
    return(
        
        <div className="title">
        <p>{props.titleName}</p>
        </div>
    )
}

export default Title;