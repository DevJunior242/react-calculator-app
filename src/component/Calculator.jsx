import React from "react";
import CalcultorTitle from "./CalcultorTitle";
import OutputScreen from "./OutputScreen";
import Button from "./Button";

class Calculator extends React.Component {
  render() {
    return (
      <div className="freame">
        <CalcultorTitle value="Calculator" />
        <div className="minCalc">
          <OutputScreen />
          <div className="button-row">
            <Button label="Clear" className="clear" />
             <Button label="/" />
          </div>
          <div className="button-row">
            <Button label="7" />
            <Button label="8" />
            <Button label="9" />
            <Button label="*" />
          </div>{" "}
          <div className="button-row">
            <Button label="4" />
            <Button label="5" />
            <Button label="6" />
            <Button label="-" />
          </div>
          <div className="button-row">
            <Button label="1" />
            <Button label="2" />
            <Button label="3" />
            <Button label="+" />
          </div>
          <div className="button-row">
            <Button label="0" />
            <Button label="=" className="equals" />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
