import React from "react"

function Contactcard(){
    return(
        <div className="contactcard">
               <div>
                <img src="data:image/jpeg;base64,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"/>
                <h3>Mr james Walton</h3>
                <p><strong>phone:</strong>921921323</p>
                <p><strong>Email:</strong>jameswalton@gamil.com</p>
            </div>

            <div>
                <img src="data:image/jpeg;base64,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"/>
                <h3>Mr james Walton</h3>
                <p><strong>phone:</strong>921921323</p>
                <p><strong>Email:</strong>jameswalton@gamil.com</p>
            </div>

        </div>
    )
}

export default Contactcard