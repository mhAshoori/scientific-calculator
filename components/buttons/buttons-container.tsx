import React, { FC, Fragment } from "react";
import NumsButton from "./nums-buttons";
import { numButtons } from "../../data/keys/buttons";
import { funcButtons } from '../../data/keys/buttons'
import FunctionButtons from "./function-buttons";
const ButtonsContainer: FC = (props) => {
  return (
    <Fragment>
      <div className="">
        <FunctionButtons buttons={funcButtons} />
        <NumsButton buttons={numButtons} />
      </div>
    </Fragment>
  );
};

export default ButtonsContainer;
