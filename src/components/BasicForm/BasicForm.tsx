import { useState, ChangeEvent, FormEvent } from "react";
import Error from "./Error/Error";

type FormData = {
  username: string;
  email: string;
  password: string;
  age: string;
  rememberMe: boolean;
  gender: string;
  country: string;
};

type FormErrors = {
  [key in keyof FormData]?: string;
};

const BasicForm = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
    age: "",
    rememberMe: false,
    gender: "",
    country: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const tempErrors: FormErrors = {};
    tempErrors.username = formData.username ? "" : "Username is required";
    tempErrors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
      ? ""
      : "Email is not valid";
    tempErrors.password =
      formData.password.length > 6
        ? ""
        : "Password must be longer than 6 characters";
    tempErrors.age =
      formData.age && parseInt(formData.age) > 0
        ? ""
        : "Please enter a valid age";
    tempErrors.gender = formData.gender ? "" : "Please select a gender";
    tempErrors.country = formData.country ? "" : "Please select a country";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data:", formData);
      alert("Form is submitted successfully!");
    } else {
      alert("Errors in form");
    }
  };

  return (
    <div className="w-full h-svh flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex border p-2 rounded-2xl flex-col space-y-4"
      >
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <Error error={errors.username} />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <Error error={errors.email} />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <Error error={errors.password} />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
          <Error error={errors.age} />
        </div>
        <div>
          <label>Remember Me:</label>
          <input
            type="checkbox"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Gender:</label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
          />{" "}
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
          />{" "}
          Female
          <Error error={errors.gender} />
        </div>
        <div>
          <label>Country:</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="">Select a country</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
          </select>
          <Error error={errors.country} />
        </div>
        <button
          className="bg-blue-500 rounded-2xl cursor-pointer"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BasicForm;
