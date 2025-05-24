import type { FormDataTypes } from "../../../types/formStepper";

interface StepsOneProps {
  formData: FormDataTypes;
  setFormData: React.Dispatch<React.SetStateAction<FormDataTypes>>;
  setIsStepValid: React.Dispatch<React.SetStateAction<boolean>>;
}
const StepOne = ({ formData, setFormData, setIsStepValid }: StepsOneProps) => {
  const ValiditCheck = (formData: FormDataTypes) => {
    const { firstName, lastName, email, password, confirmPassword } = formData;
    if (
      firstName &&
      lastName &&
      email &&
      password &&
      confirmPassword &&
      password === confirmPassword
    ) {
      setIsStepValid(true);
    } else {
      setIsStepValid(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e?.target.name]: e.target.value,
      };
    });
    const updatedformData = { ...formData, [e.target.name]: e.target.value };
    ValiditCheck(updatedformData);
  };
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="flex rounded-2xl w-1/2 flex-col gap-4 border p-6 border-cyan-500 shadow-2xl">
        <input
          className="border p-2 rounded-md"
          onChange={handleChange}
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
        ></input>
        <input
          name="lastName"
          className="border p-2 rounded-md"
          onChange={handleChange}
          value={formData.lastName}
          placeholder="Last Name"
        ></input>
        <input
          name="email"
          className="border p-2 rounded-md"
          onChange={handleChange}
          type="email"
          value={formData.email}
          placeholder="Email Address"
        ></input>
        <input
          name="password"
          className="border p-2 rounded-md"
          onChange={handleChange}
          type="password"
          value={formData.password}
          placeholder="Password"
        ></input>
        <input
          name="confirmPassword"
          className="border p-2 rounded-md"
          onChange={handleChange}
          type="password"
          value={formData.confirmPassword}
          placeholder="Confirm Password"
        ></input>
      </div>
    </div>
  );
};

export default StepOne;
