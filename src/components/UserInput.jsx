import { useState } from "react";

const UserInput = ({ inputs, onChange }) => {





  return (
    <section id="user-input">


      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Inital Investment</label>
          <input type="number" id="initial-investment" value={inputs.initialInvestment} required onChange={(e) => onChange("initialInvestment", e.target.value)} />
        </p>
      </div>
      <div className="input-group">
        <p>

          <label htmlFor="annual-investment">Annual Investment</label>
          <input type="number" id="annual-investment" value={inputs.annualInvestment} required onChange={(e) => onChange("annualInvestment", e.target.value)} />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">Expected Return</label>
          <input type="number" id="expected-return" value={inputs.expectedReturn} required onChange={(e) => onChange("expectedReturn", e.target.value)} />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="duration">Duration</label>
          <input type="number" id="duration" value={inputs.duration} required onChange={(e) => onChange("duration", e.target.value)} />
        </p>
      </div>
    </section>
  )
}
export default UserInput