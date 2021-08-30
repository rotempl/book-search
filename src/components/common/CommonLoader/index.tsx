import React, { FC } from "react";
import Loader from "react-loader-spinner";
import { colors } from "../../../style/globalVariables";
import { LoaderContainer } from "./CommonLoaderStyle";

const CommonLoader: FC = () => {
  return (
    <LoaderContainer>
      <Loader type='Oval' color={colors.loader} />
    </LoaderContainer>
  );
};

export default CommonLoader;
