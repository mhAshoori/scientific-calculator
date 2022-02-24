import React, { FC, Fragment } from "react";
import NumsButton from "./nums-buttons";

const numButtons = {
  numbers: [
    { name: "one", value: 1 },
    { name: "two", value: 2 },
    { name: "three", value: 3 },
    { name: "four", value: 4 },
    { name: "five", value: 5 },
    { name: "six", value: 6 },
    { name: "seven", value: 7 },
    { name: "eight", value: 8 },
    { name: "nine", value: 9 },
  ],
  operands: [
    { name: "delete", value: "DEL" },
    { name: "AC", value: "AC" },
    { name: "plus", value: "+" },
    { name: "minus", value: "-" },
    { name: "multiply", value: "*" },
    { name: "divide", value: "/" },
  ],
  exes:[
    {name:'zero',value:0},
    {name:'dot',value:"."},
    {name:'EXP',value:"EXP"},
    {name:'Ans.',value:"ANS"},
    {name:'equals.',value:"="},
  ]
};

const ButtonsContainer: FC = (props) => {
  return (
    <Fragment>
      <div className="" >
        <NumsButton buttons={numButtons} />
      </div>
    </Fragment>
  );
};

export default ButtonsContainer;
