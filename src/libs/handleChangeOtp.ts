interface HandleChangeOtpParams {
  e: React.ChangeEvent<HTMLInputElement>;
  index: number;
  otp: string[];
  setOtp: React.Dispatch<React.SetStateAction<string[]>>;
}
export const handleChangeOtp = ({
  e,
  index,
  otp,
  setOtp,
}: HandleChangeOtpParams) => {
  const value = e.target.value.toUpperCase();
  if (/^[a-zA-Z0-9]$/.test(value)) {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (index < 4) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  } else if (value === "") {
    const newOtp = [...otp];
    newOtp[index] = "";
    setOtp(newOtp);
    if (index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  }
};
