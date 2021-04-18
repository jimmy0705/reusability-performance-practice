import React from "react";
import Callout from "./Callout";
import Menu from "./menu";
import Favorite from "./favourite";

function App() {
  return (
    <>
      <h1>Welcome!</h1>

      <Callout title="React.children practice">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </Callout>
      <br/>
      <Callout title="Hoc practice">
      <Menu/>
      <br/>
      <p>==============  === ===========</p>
      <Favorite/>
      </Callout>

    </>
  );
}

export default App;
