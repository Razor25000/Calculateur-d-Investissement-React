import { calculateInvestmentResults } from "../util/investment"
const Results = ({ inputs }) => {
    const results = calculateInvestmentResults(inputs)
    console.log(results)
  return (
    <div>Results</div>
  )
}
export default Results
