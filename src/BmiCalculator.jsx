import React, { useState } from "react";

function BmiCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBmi = () => {
    if (!height || !weight) {
      alert("veuiilez remplir tout les champs");
      return;
    }
    const heightInMeters = parseFloat(height) / 100;
    const bmiValue =
      parseFloat(weight) / (heightInMeters * heightInMeters).toFixed(2);
    setBmi(bmiValue);
    let bmiStatus = "";
    if (bmiValue < 18.5) {
      bmiStatus = "Underweight";
    } else if (bmiValue < 24.5) {
      bmiStatus = "Normal";
    } else if (bmiValue < 29.9) {
      bmiStatus = "Overweight";
    } else {
      bmiStatus = "Obese";
    }
    setStatus(bmiStatus);
  };
  return (
    <div className="content">
      <h1>BMI Calculator</h1>

      <div className="input-group">
        <label htmlFor="weight">Weight</label>
        <input
          type="number"
          name="weight"
          id=""
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter your weight in kg"
        />
      </div>
      <div className="input-group">
        <label htmlFor="height">Height</label>
        <input
          type="number"
          name="height"
          id=""
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter your height in cm"
        />
      </div>

      <button onClick={calculateBmi}>caiculate</button>
      {bmi && (
        <div className="result">
          <p>Your BMI is {bmi}</p>
          <p>Your BMI status is {status}</p>
        </div>
      )}
    </div>
  );
}

export default BmiCalculator;
