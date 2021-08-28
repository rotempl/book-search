import React, { FC } from "react";
import empty from "../../../assets/images/empty.jpg";
import styled from "styled-components";

interface ImageProps {
  src: string | undefined;
  alt: string;
  height: string;
  width: string;
}

export const StyledImage = styled.img<{ height: string; width: string }>`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`;

const Image: FC<ImageProps> = (props) => {
  const { src, alt, height, width } = props;
  const imageSrc = src ? src : empty;
  return <StyledImage src={imageSrc} alt={alt} height={height} width={width} />;
};

export default Image;
