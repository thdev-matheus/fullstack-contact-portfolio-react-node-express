import * as S from "./styles";
import * as t from "./types";
import { forwardRef, useEffect, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export const Input = forwardRef<HTMLInputElement, t.IInputProps>(
  (
    {
      label,
      icon: Icon,
      error,
      type,
      width,
      bgColor,
      borderColor,
      borderRadius,
      color,
      ...rest
    },
    ref
  ) => {
    const [isPassword, setIsPassword] = useState<boolean>(true);

    useEffect(() => {
      type === "password" ? setIsPassword(true) : setIsPassword(false);
    }, [type]);

    return (
      <S.Container width={width} bgColor={bgColor} color={color}>
        <div>
          {label} {!!error && <span> - {error}</span>}
        </div>
        <S.InputContainer
          isErrored={!!error}
          borderColor={borderColor}
          borderRadius={borderRadius}
          color={color}
        >
          {Icon && <Icon />}
          {type === "password" ? (
            <>
              <input
                type={isPassword ? "password" : "text"}
                {...rest}
                ref={ref}
              />
              {isPassword && (
                <FiEye
                  onClick={() => setIsPassword(!isPassword)}
                  className="password_eye"
                />
              )}
              {!isPassword && (
                <FiEyeOff
                  onClick={() => setIsPassword(!isPassword)}
                  className="password_eye"
                />
              )}
            </>
          ) : (
            <input {...rest} ref={ref} />
          )}
        </S.InputContainer>
      </S.Container>
    );
  }
);
