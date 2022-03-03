import React, { FC } from "react";
import NumsButton from "./nums-buttons";
import { numButtons } from "../../data/keys/buttons";
import { funcButtons } from "../../data/keys/buttons";
import FunctionButtons from "./function-buttons";
const ButtonsContainer: FC = () => {
  return (
    <>
      <FunctionButtons buttons={funcButtons} />
      <NumsButton buttons={numButtons} />
    </>
  );
};

export default ButtonsContainer;
