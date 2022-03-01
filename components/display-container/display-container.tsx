import { evaluate } from "mathjs";
import React from "react";
import { Equation } from "react-equation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";

import equationStyles from "./equation.module.css";
const DisplayContainer = () => {
  const { expr } = useSelector((state: RootState) => state.calculator);
  const dispatch = useDispatch();

  let eqIsOk;
  try {
    evaluate(expr!.join(""));
    eqIsOk = true;
  } catch (err) {
    eqIsOk = false;
  }
  return (
    <div className=" flex justify-start items-center">
      <Equation
        value={
          expr?.join("") || "Enter"
        } /* errorHandler={defaultErrorHandler} */
        className={equationStyles.equationContainer}
      />
      {/* <p>+</p>
      <p>&#9647;</p> */}
    </div>
  );
};

export default DisplayContainer;
