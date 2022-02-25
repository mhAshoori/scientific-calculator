import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {evaluate} from "mathjs"
export interface CalculatorState {
  ans: string | number | null;
  expr: string | null;
}

const initialState: CalculatorState = {
  ans: null,
  expr: null,
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
    addToExpr: (state, action: PayloadAction<string>) => {
      if (!state.expr) {
        state.expr = action.payload;
      } else {
        state.expr && (state.expr += action.payload.toString());
      }
    },
    deleteFromExpr: (state) => {
      if (state.expr) {
        state.expr = state.expr.slice(0, -1);
      }
    },
    clearExpr: (state) => {
      if (state.expr) {
        state.expr = null;
      }
    },
    evalAns: (state) => {
      if (state.expr) {
        state.ans = evaluate(state.expr);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToExpr, deleteFromExpr, clearExpr,evalAns } = calculatorSlice.actions;

export default calculatorSlice.reducer;
