import React from 'react';

function UserInput({ inputs, onChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  return (
    <section id="user-input">
      <div className="input-row">
        <div className="input-group">
          <label htmlFor="initial-investment">Investissement initial</label>
          <input type="number" id="initial-investment" name="initialInvestment" value={inputs.initialInvestment} required onChange={handleChange} />
        </div>
        <div className="input-group">
          <label htmlFor="annual-investment">Investissement annuel</label>
          <input type="number" id="annual-investment" name="annualInvestment" value={inputs.annualInvestment} required onChange={handleChange} />
        </div>
      </div>
      <div className="input-row">
        <div className="input-group">
          <label htmlFor="expected-return">Rendement attendu</label>
          <input type="number" id="expected-return" name="expectedReturn" value={inputs.expectedReturn} required onChange={handleChange} />
        </div>
        <div className="input-group">
          <label htmlFor="duration">Durée (années)</label>
          <input type="number" id="duration" name="duration" value={inputs.duration} required onChange={handleChange} />
        </div>
      </div>
    </section>
  );
}

export default UserInput;