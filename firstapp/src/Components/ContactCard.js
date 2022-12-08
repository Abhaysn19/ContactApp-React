import React from 'react';
 import blank from "../images/blank.png";

export default function ContactCard(props) {
    const {id, name, email} = props.contact;
  return (
    <div className="item">
        <img className="ui avatar" src={blank} alt="blank" style={{height:50, width:50}} />
        <div className="content">
            <div className="header">{name}</div>
            <div>{email}</div>
        </div>
        <i className="trash alternate outline icon" style={{color:"red",marginTop:"7px"}}></i>

     </div>
      
   
  )
}
