import styled, { css } from "styled-components";
import { ISInputProps } from "./types";

export const Container = styled.div<ISInputProps>`
  width: ${(props) => props.width || "100%"};
  height: 2.5rem;

  text-align: left;

  background-color: ${(props) => props.bgColor};

  & > div {
    margin-bottom: 0.2rem;
    padding-left: 1rem;

    color: ${(props) => props.color || "var(--white)"};

    & > span {
      font-size: 10pt;
      color: var(--red);
    }
  }
`;

export const InputContainer = styled.div<ISInputProps>`
  width: 100%;
  height: 90%;

  display: flex;

  padding: 0.5rem;

  border: 2px solid ${(props) => props.borderColor || "var(--white)"};
  border-radius: ${(props) => props.borderRadius || "0.8rem"};

  transition: 0.4s;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--red);
      svg {
        color: var(--red);
      }
    `}

  & > input {
    width: 80%;

    flex: 1;
    align-items: center;

    background: transparent;
    color: ${(props) => props.color || "var(--silver)"};

    ::placeholder {
      color: var(--gray);
    }

    ::-webkit-inner-spin-button {
      display: none;
    }
  }

  svg {
    font-size: 10pt;
    margin-right: 0.5rem;
  }

  .password_eye {
    cursor: pointer;
  }
`;
