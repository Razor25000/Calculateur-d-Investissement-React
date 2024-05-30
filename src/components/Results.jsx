import { calculateInvestmentResults, formatter } from "../util/investment";

const Results = ({ inputs }) => {
    const results = calculateInvestmentResults(inputs);
    const initialInvestment = results[0].valueEndOfYear - results[0].annualInvestment -results[0].interest


    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest Earned</th>
                    <th>Total Interest</th>
                    <th>Investment Capital</th>
                </tr>
            </thead>
            <tbody>
                {results.map((yearData) => {
                    const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment
                    const totalAmountInvested = yearData.valueEndOfYear - totalInterest
                    return (
                        <tr key={yearData.year}>
                            <td>{yearData.year}</td>
                            <td>{formatter.format(yearData.valueEndOfYear)}</td>
                            <td>{formatter.format(yearData.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                        )
                })}
            </tbody>
        </table>
    );
};

export default Results;
