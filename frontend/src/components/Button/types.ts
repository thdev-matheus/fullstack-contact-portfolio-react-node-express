import { ButtonHTMLAttributes } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;

  width?: string;
  height?: string;
  color?: string;
  bgColor?: string;
  hColor?: string;
  hBgColor?: string;
  padding?: string;
  borderRadius?: string;
}

export interface IStyledButtonProps {
  width?: string;
  height?: string;
  color?: string;
  bgColor?: string;
  hColor?: string;
  hBgColor?: string;
  padding?: string;
  borderRadius?: string;
}
