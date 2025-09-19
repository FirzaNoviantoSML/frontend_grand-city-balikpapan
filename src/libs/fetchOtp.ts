export const fetchOtp = async (newOtpCode: string, phone: string) => {
  try {
    const res = await fetch("/api/send_otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: newOtpCode.toString(),
        phoneNumber: phone,
      }),
    });
    return res.json();
  } catch (error) {
    console.log("Failed to send OTP", error);
  }
};
