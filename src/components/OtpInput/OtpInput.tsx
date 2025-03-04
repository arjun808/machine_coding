import { useEffect, useRef, useState } from "react";

const OtpInput = () => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    if (isNaN(+value)) return;
    setOtp([...otp.map((d, i) => (i === index ? value[value.length - 1] : d))]);
    if (value !== "") {
      if (index === otp.length - 1) {
        return;
      }

      inputRefs.current[index + 1]?.focus();
    }
  };
  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && index > 0 && !otp[index]) {
      inputRefs.current[index - 1]?.focus();
    }
  };
  const handleOtpSubmit = () => {
    const otpString = otp.join("");
    if (otpString.length === 6) {
      alert("otp is correct");
    } else {
      alert("otp is incorrect");
    }
  };
  return (
    <div className="h-svh flex flex-col items-center justify-center w-full">
      <h1 className="text-4xl">Enter Otp sended to your number</h1>
      <div className="flex flex-col justify-center items-center w-1/2 border h-1/3 p-2 mt-10">
        <div className="flex justify-center items-center space-x-2">
          {otp.map((_, index: number) => {
            return (
              <input
                value={otp[index]}
                type="text"
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                key={index}
                onChange={(e) => handleChange(index, e)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="border w-10 text-center p-2 rounded-md focus:outline-red-950 "
              ></input>
            );
          })}
        </div>
        <div className="w-1/2">
          <button
            onClick={handleOtpSubmit}
            className="p-2 mt-10 rounded-lg hover:bg-blue-900 bg-blue-500 w-full border"
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default OtpInput;
