import { forwardRef } from "react";
import * as S from "./styles";
import * as t from "./types";

export const Button = forwardRef<HTMLInputElement, t.IButtonProps>(
  (
    { text, width, height, borderRadius, bgColor, color, padding, ...rest },
    ref
  ) => {
    return (
      <S.StyledButton
        width={width}
        height={height}
        borderRadius={borderRadius}
        bgColor={bgColor}
        color={color}
        padding={padding}
        {...rest}
      >
        {text}
      </S.StyledButton>
    );
  }
);
