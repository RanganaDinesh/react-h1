import React, { useState } from "react";
import Class from "./task/Class";
import Function from "./task/Function";


function App() {
  const [funcHidden, setFuncHidden] = useState(true);
  const handleClickFunction = () => setFuncHidden((current) => !current);

  const [clsHidden, setClsHidden] = useState(true);
  const handleClickClass = () => setClsHidden((current) => !current);

  return (
    <div className="App">
      <h1 className="heading">Styling using Functional and Class Component</h1>
      <div className="btn-box">
        <button className="btn btn--func" onClick={handleClickFunction}>
          To see styling in Functional Component
        </button>
        <button className="btn btn--cls" onClick={handleClickClass}>
          To see styling in Class Component
        </button>
      </div>

      <div className="component-box">
        {!funcHidden ? <Function/> : null}
        {!clsHidden ? <Class /> : null}
      </div>
    </div>
  );
}

export default App;