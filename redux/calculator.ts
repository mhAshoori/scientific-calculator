import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CalculatorState {
  ans: string | null;
}

const initialState: CalculatorState = {
  ans: null,
};

export const calculatorSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    /* increment: (state) => {
      state.ans && (state.ans += 1);
    },
    decrement: (state) => {
      state.ans && (state.ans -= 1);
    }, */
    addToAns: (state, action: PayloadAction<string | number>) => {
      state.ans && (state.ans += action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToAns } = calculatorSlice.actions;

export default calculatorSlice.reducer;
