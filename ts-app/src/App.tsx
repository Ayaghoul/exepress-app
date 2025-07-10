import React from "react";

import "./App.css";
import Greeting from "./component/Greeting";
import Counter from "./component/Counter";

function App() {
  return (
    <div className="App">
      <div>
        <Greeting name="Eya" />
        <Counter />
      </div>
    </div>
  );
}

export default App;
