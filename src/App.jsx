import { Header } from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import useStore from './store'

function App() {
  const { inputs, setInputs } = useStore();

  const inputIsValid = inputs.initialInvestment > 0 && inputs.annualInvestment > 0 && inputs.expectedReturn > 0 && inputs.duration > 0;

  return (
    <>
      <Header />
      <UserInput inputs={inputs} onChange={setInputs} />
      {inputIsValid ? <Results inputs={inputs} /> : <p style={{ color: "red", fontSize: "20px", textAlign: "center" }}>Please enter valid inputs</p>}
    </>
  );
}

export default App;