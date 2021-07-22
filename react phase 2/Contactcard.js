import React from "react"

function Contactcard(props){
    return(
        <div className="contactcard">
               
                <img src={props.contact.imgurl}/>
                <h3>{props.contact.name}</h3>
                <p><strong>phone:</strong>{props.contact.phone}</p>
                <p><strong>Email:</strong>{props.contact.email}</p>
        </div>
    )
}

export default Contactcard