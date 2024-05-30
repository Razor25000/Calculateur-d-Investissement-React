import{create} from 'zustand';

const useStore = create(set => ({
    inputs: {
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    },
    setInputs: (inputIdentifier, newValue) => set(state => ({
        inputs: {
            ...state.inputs,
            [inputIdentifier]: +newValue,
        }
    })),
}));

export default useStore;