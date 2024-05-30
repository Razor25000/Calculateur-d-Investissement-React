const UserInput = () => {
  return (
    <section id="user-input">

      
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Inital Investment</label>
          <input type="number" id="initial-investment" required />
        </p>
      </div>
      <div className="input-group">
        <p>

          <label htmlFor="annual-investment">Annual Investment</label>
          <input type="number" id="annual-investment" required />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">Expected Return</label>
          <input type="number" id="expected-return" required />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="duration">Duration</label>
          <input type="number" id="duration" required />
        </p>
      </div>
    </section>
  )
}
export default UserInput