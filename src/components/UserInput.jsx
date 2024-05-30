import { useState } from "react";

const UserInput = () => {
  const [inputs, setInputs] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange (inputIdentifier,newValue) {
    setInputs(prevInputs => ({
      ...prevInputs,
      [inputIdentifier]: newValue,
    }));
  }


  return (
    <section id="user-input">

      
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Inital Investment</label>
          <input type="number" id="initial-investment" value={inputs.initialInvestment} required onChange={(e) => handleChange("initialInvestment", e.target.value)} />
        </p>
      </div>
      <div className="input-group">
        <p>

          <label htmlFor="annual-investment">Annual Investment</label>
          <input type="number" id="annual-investment" value={inputs.annualInvestment} required onChange={(e) => handleChange("annualInvestment", e.target.value)} />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">Expected Return</label>
          <input type="number" id="expected-return" value={inputs.expectedReturn} required onChange={(e) => handleChange("expectedReturn", e.target.value)} />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="duration">Duration</label>
          <input type="number" id="duration" value={inputs.duration} required onChange={(e) => handleChange("duration", e.target.value)} />
        </p>
      </div>
    </section>
  )
}
export default UserInput