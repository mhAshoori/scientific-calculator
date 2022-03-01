import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";
import math , { evaluate } from "mathjs";

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
    /* increment: (state) => {
      state.ans && (state.ans += 1);
    },
    decrement: (state) => {
      state.ans && (state.ans -= 1);
    }, */
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
      if (state.expr) {
        state.ans = evaluate(state.expr.join(""));
      }
    },
    texExpMaker: (state) => {
    /*   require("mathjax")
  .init({
    loader: { load: ["input/tex", "output/svg"] },
  })
  .then((MathJax:any) => {
    const svg = MathJax.tex2svg("\\frac{1}{x^2-1}", { display: true });
    console.log(MathJax.startup.adaptor.outerHTML(svg));
    state.texExpOutput = svg
  })
  .catch((err:any) => console.log(err.message));
       */
    }
  },
});

// Action creators are generated for each case reducer function
export const { addToExpr, deleteFromExpr, clearExpr, evalAns,texExpMaker } =
  calculatorSlice.actions;

export default calculatorSlice.reducer;
