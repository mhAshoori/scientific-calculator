import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { evaluate } from "mathjs";

//const mathJax = require('mathjax')
export interface CalculatorState {
  ans: string | number | null;
  expr: string[] | null;
  texExpOutput: any;
}

const initialState: CalculatorState = {
  ans: null,
  expr: null,
  texExpOutput: null,
};

export const calculatorSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToExpr: (state, action: PayloadAction<string>) => {
      if (!state.expr?.length) {
        state.expr = [];
        state.expr.push(action.payload);
      } else {
        state.expr && state.expr.push(action.payload.toString());
      }
    },
    deleteFromExpr: (state) => {
      if (state.expr) {
        //state.expr = state.expr.slice(0, -1);
        state.expr.pop();
      }
    },
    clearExpr: (state) => {
      if (state.expr) {
        state.expr = null;
      }
    },
    evalAns: (state) => {
      try {
        evaluate(state.expr!.join(""));
        state.ans = evaluate(state.expr!.join(""));
      } catch {
        state.ans = "Invalid Expression!";
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToExpr, deleteFromExpr, clearExpr, evalAns } =
  calculatorSlice.actions;

export default calculatorSlice.reducer;
