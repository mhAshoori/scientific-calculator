import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToExpr } from "../../redux/calculator";
import { RootState } from "../../redux/store";

interface IFunctionButtons {
  buttons: {
    name: string;
    value: string;
  }[];
}

const FunctionButtons: FC<IFunctionButtons> = (props) => {
  const { buttons } = props;

  const { expr } = useSelector((state: RootState) => state.calculator);
  const dispatch = useDispatch();
  const funcsHandler = (input: any) => {
    if (
      input === "sin" ||
      input === "cos" ||
      input === "tan" ||
      input === "sqrt"
    ) {
      dispatch(addToExpr(input + "("));
      return;
    }
    dispatch(addToExpr(input));
  };
  return (
    <div className="flex justify-center items-center gap-3">
      <div className=" grid grid-cols-5  gap-3 my-3 ">
        {buttons.map((item) => {
          return (
            <button
              key={item.value}
              className=" rounded-sm  w-14 h-8 sm:w-24 sm:h-12 bg-amber-500"
              onClick={() => funcsHandler(item.value)}
            >
              {item.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FunctionButtons;
