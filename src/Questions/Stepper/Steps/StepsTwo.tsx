import type { FormDataTypes } from "../../../types/formStepper";

interface StepsOneProps {
  formData: FormDataTypes;
  setFormData: React.Dispatch<React.SetStateAction<FormDataTypes>>;
  setIsStepValid: React.Dispatch<React.SetStateAction<boolean>>;
}
const StepTwo = ({ formData, setFormData, setIsStepValid }: StepsOneProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e?.target.name]: e.target.value,
      };
    });
    const updatedformData = { ...formData, [e.target.name]: e.target.value };
    if (
      updatedformData.address &&
      updatedformData.city &&
      updatedformData.country &&
      updatedformData.state &&
      updatedformData.zip
    ) {
      setIsStepValid(true);
    } else {
      setIsStepValid(false);
    }
  };
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="flex rounded-2xl w-1/2 flex-col gap-4 border p-6 border-cyan-500 shadow-2xl">
        <input
          className="border p-2 rounded-md"
          onChange={handleChange}
          name="address"
          placeholder="Address"
          value={formData.address}
        ></input>
        <input
          name="city"
          className="border p-2 rounded-md"
          onChange={handleChange}
          value={formData.city}
          placeholder="City"
        ></input>
        <input
          name="country"
          className="border p-2 rounded-md"
          onChange={handleChange}
          value={formData.country}
          placeholder="Country"
        ></input>
        <input
          name="state"
          className="border p-2 rounded-md"
          onChange={handleChange}
          value={formData.state}
          placeholder="State"
        ></input>
        <input
          name="zip"
          className="border p-2 rounded-md"
          onChange={handleChange}
          value={formData.zip}
          placeholder="Zip Code"
        />
      </div>
    </div>
  );
};

export default StepTwo;
