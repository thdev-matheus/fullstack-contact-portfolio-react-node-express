export interface IFormatter {
  convertPhoneNumber: (phoneNumber: string) => string;
  responseError: (message: string) => string;
}
