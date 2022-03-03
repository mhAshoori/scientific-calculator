import { evaluate } from "mathjs";
import React, { useEffect, useRef, useState } from "react";
import { Equation, defaultErrorHandler } from "react-equation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { modifiedErrorHandler } from "./errorHandler";
import equationStyles from "./equation.module.css";
const DisplayContainer = () => {
  const { expr } = useSelector((state: RootState) => state.calculator);
  const dispatch = useDispatch();
  const [tempEquation, setTempEquation] = useState<any>([""]);
  const [tempExpression, setTempExpression] = useState<any>();
  const [storedExpr, setStoredExpr] = useState<any>(expr);
  const [eqIsOk, setEqIsOk] = useState(false);
  const pointerRef = useRef<null | HTMLDivElement>(null);
  const scrollToPointer = () => {
    pointerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    try {
      let a = evaluate(expr!.join(""));
      setEqIsOk(true);
      setStoredExpr(expr);
    } catch (err) {
      setEqIsOk(false);
      let n = 1;
      while (true) {
        try {
          evaluate(expr!.slice(0, expr!.length - n).join(""));
          setTempEquation(expr?.slice(0, expr.length - n));
          setTempExpression(
            expr?.slice(expr.length - n, expr.length).join(" ")
          );
          break;
        } catch {
          if (!expr) {
            setTempEquation(null);
            setTempExpression(null);
            break;
          }
          n++;
        }
      }
    }
    scrollToPointer();
  }, [expr]);
  console.log("eq. state", eqIsOk);
  return (
    <div className=" h-full flex-row flex justify-start items-center  py-2 ">
      {eqIsOk ? (
        <>
          <Equation
            value={storedExpr?.join("") || "Enter sth"}
            className={equationStyles.equationContainer}
            errorHandler={defaultErrorHandler}
          />
        </>
      ) : (
        <>
          <Equation
            value={tempEquation?.join("") || "Enter sth"}
            className={equationStyles.equationContainer}
            errorHandler={modifiedErrorHandler}
          />
          <p>&nbsp;</p>
          {tempExpression && (
            <>
              <Equation
                value={tempExpression}
                className={equationStyles.incomplete}
                errorHandler={modifiedErrorHandler}
              />
            </>
          )}
        </>
      )}
      <span className="mx-1 w-px h-5 animate-pulse bg-black"></span>
      <div className=" mx-2" ref={pointerRef}>
        &nbsp;
      </div>
    </div>
  );
};

export default DisplayContainer;
