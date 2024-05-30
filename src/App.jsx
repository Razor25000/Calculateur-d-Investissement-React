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
      [inputIdentifier]: newValue,
    }));
  }
  return (
    <>
    <Header />
    <UserInput inputs={inputs} onChange={handleChange} />
    <Results inputs={inputs} />
    </>
  )
}

export default App
