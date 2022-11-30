import styled from "styled-components";
import { IStyledButtonProps } from "./types";

export const StyledButton = styled.button<IStyledButtonProps>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "3rem"};

  padding: ${(props) => props.padding || "0.5rem"};

  border-radius: ${(props) => props.borderRadius || "0.8rem"};
  border: none;

  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};

  font-size: 14pt;
  font-weight: bold;

  cursor: pointer;

  transition: 0.6s;

  :hover {
    color: ${(props) => props.hColor};
    background-color: ${(props) => props.hBgColor};

    transition: 0.6s;
  }
`;
