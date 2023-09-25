import React from "react";
import Form from "./Form";
import Result from "./Result";

function App() {
  return (
    <div>
      <div className="backgroundContainer">
        <div className="formContainer">
          <Form />

          <Result />
        </div>
      </div>
    </div>
  );
}

export default App;
