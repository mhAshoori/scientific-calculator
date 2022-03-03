import React, { FC } from "react";
import NumsButton from "./nums-buttons";
import { numButtons } from "../../data/keys/buttons";
import { funcButtons } from "../../data/keys/buttons";
import FunctionButtons from "./function-buttons";
const ButtonsContainer: FC = () => {
  return (
    <div>
      <FunctionButtons buttons={funcButtons} />
      <NumsButton buttons={numButtons} />
    </div>
  );
};

export default ButtonsContainer;
