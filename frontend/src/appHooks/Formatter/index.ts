import { IFormatter } from "./types";

export const useFormatter = (): IFormatter => {
  const convertPhoneNumber = (phoneNumber: string): string => {
    return `(${phoneNumber[0]}${phoneNumber[1]}) ${
      phoneNumber[2]
    } ${phoneNumber.slice(3 - 7)} - ${phoneNumber.slice(7)}`;
  };

  return {
    convertPhoneNumber,
  };
};
