import React from "react"

function Callout(props) {
    return (
        <div className="callout">
            <h1>{props.title}</h1>
            {props.children}
        </div>
    )
}

export default Callout