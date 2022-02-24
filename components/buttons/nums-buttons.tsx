import { FC, Fragment } from "react";

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
  const { buttons } = props;
  return (
    <Fragment>
      <div className="flex justify-center items-center  gap-3">
        <div className=" grid grid-cols-3  gap-3 ">
          {buttons.numbers.map((item) => {
            return (
              <button
                key={item.value}
                className=" rounded-sm  w-14 h-8 bg-blue-700"
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
            >
              {item.value}
            </button>
          );
        })}
      </div>
    </Fragment>
  );
};

export default NumsButton;
