import { Header } from "./components/Header"
import UserInput from "./components/UserInput"
import { useState } from "react"
import Results from "./components/Results"

function App() {
  const [inputs, setInputs] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setInputs(prevInputs => ({
      ...prevInputs,
      [inputIdentifier]: +newValue,
    }));
  }
  const inputIsValid = inputs.initialInvestment > 0 && inputs.annualInvestment > 0 && inputs.expectedReturn > 0 && inputs.duration > 0
  return (
    <>
    <Header />
    <UserInput inputs={inputs} onChange={handleChange} />
    {inputIsValid ? <Results inputs={inputs} /> : <p style={{color: "red", fontSize: "20px",textAlign: "center"}}>Please enter valid inputs</p>}
    </>
  )
}

export default App
