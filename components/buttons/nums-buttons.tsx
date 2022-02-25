import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToExpr,
  clearExpr,
  deleteFromExpr,
  evalAns,
} from "../../redux/calculator";
import { RootState } from "../../redux/store";

interface INumsButtons {
  buttons: {
    numbers: {
      name: string;
      value: number;
    }[];
    operands: {
      name: string;
      value: string;
    }[];
    exes: {
      name: string;
      value: string | number;
    }[];
  };
}

const NumsButton: FC<INumsButtons> = (props) => {
  const { expr } = useSelector((state: RootState) => state.calculator);
  const dispatch = useDispatch();
  const numsHandler = (value: any) => {
    if (
      value !== "DEL" &&
      value !== "AC" &&
      value !== "EXP" &&
      value !== "ANS" &&
      value !== "="
    )
      dispatch(addToExpr(value));
    if (value === "DEL") {
      dispatch(deleteFromExpr());
    }
    if (value === "AC") {
      dispatch(clearExpr());
    }
    if (value === "=") {
      dispatch(evalAns());
    }
  };
  useEffect(() => {
    console.log("ans Changed", expr);
  }, [expr]);

  const { buttons } = props;
  return (
    <>
      <div className="flex justify-center items-center gap-3">
        <div className=" grid grid-cols-3  gap-3 ">
          {buttons.numbers.map((item) => {
            return (
              <button
                key={item.value}
                className=" rounded-sm  w-14 h-8 bg-blue-700"
                onClick={() => numsHandler(item.value)}
              >
                {item.value}
              </button>
            );
          })}
        </div>
        <div className="grid grid-cols-2  gap-3 ">
          {buttons.operands.map((item) => {
            return (
              <button
                key={item.value}
                className=" rounded-sm w-14 h-8 bg-blue-700"
                onClick={() => numsHandler(item.value)}
              >
                {item.value}
              </button>
            );
          })}
        </div>
      </div>
      <div className=" flex items-center justify-center my-3 gap-3  ">
        {buttons.exes.map((item) => {
          return (
            <button
              key={item.value}
              className=" rounded-sm w-14 h-8 bg-blue-700"
              onClick={() => numsHandler(item.value)}
            >
              {item.value}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default NumsButton;
