import { useState } from "react";
import { formStepperdata } from "./config/stepper.config";

const Stepper = () => {
  const [activeStep, setActiveStep] = useState(1);
  const CurrentStepComponent = formStepperdata.find(
    (item) => item.id === activeStep
  )?.component;
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });
  const handleSubmit = () => {
    console.log("Form submitted with data:", formData);
    // Here you can handle the form submission, e.g., send data to an API
  };
  const handlePrevClick = () => {
    if (activeStep > 1) {
      setActiveStep((prev) => prev - 1);
    }
  };
  const handleNextClick = () => {
    if (activeStep < formStepperdata.length) {
      setActiveStep((prev) => prev + 1);
    }
  };
  const [isStepValid, setIsStepValid] = useState(false);
  return (
    <div className="mt-10">
      <div className="flex justify-center items-center gap-2">
        {formStepperdata.map((item) => {
          return (
            <button
              onClick={() => setActiveStep(item.id)}
              className={`rounded-2xl ${
                activeStep === item.id ? "bg-cyan-500" : "bg-cyan-200"
              }  px-4 py-2`}
            >
              {item.title}
            </button>
          );
        })}
      </div>
      <div>
        {" "}
        {CurrentStepComponent && (
          <CurrentStepComponent
            formData={formData}
            setFormData={setFormData}
            setIsStepValid={setIsStepValid}
          />
        )}
      </div>
      <div className="flex justify-center items-center gap-2 mt-4">
        <button
          onClick={handlePrevClick}
          className="p-2 bg-cyan-200 rounded-xl px-6"
        >
          Prev
        </button>
        <button
          disabled={!isStepValid}
          onClick={
            activeStep === formStepperdata.length
              ? handleSubmit
              : handleNextClick
          }
          className="p-2 bg-cyan-500 rounded-xl px-6"
        >
          {activeStep === formStepperdata.length ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Stepper;
