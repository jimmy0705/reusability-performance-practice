import React from "react"
import Callout from "./Callout"

function App() {
    return (
        <main>
            <h1>Welcome!</h1>
            
            <Callout title="Lorem Ipsum">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </Callout>
            
            
            
            <Callout title="Lorem Ipsum!">
                <img src="https://picsum.photos/id/102/4320/3240" width="50%" />
                <figcaption> Fresh raspberries!</figcaption>
            </Callout>
            
            
            
            <Callout title="Fill the Form!">
                <h2> your email.</h2>
                <input type="email" placeholder="Enter Email"/>
                <button>Sign up</button>
            </Callout>
            
        </main>
    )
}

export default App