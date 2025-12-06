import { useFormikContext } from "formik";
import { useState } from "react";
import { FaEye } from "react-icons/fa";

const AddInputField = ({
  name,
  type = "text",
  placeholder,
  className = "",
  defaultValue,
}) => {
  const { errors, values, touched, handleBlur, handleChange } =
    useFormikContext();
  const [showPassword, setShowPassword] = useState(false);

  const value = values[name] ?? "";
  const error = errors[name];
  const isInputTouched = touched[name];

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
    <div className={`flex w-full flex-col gap-1 ${className}`}>
      {/* Input wrapper */}
      {type === "password" ? (
        <div className="flex gap-2 items-center primary-input border  h-[35px]">
          <input
            name={name}
            onChange={handleChange}
            onBlur={handleBlur}
            value={value}
            type={showPassword ? "text" : "password"}
            placeholder={placeholder}
            className="h-full w-[90%] rounded-md bg-transparent p-3"
          />
          <FaEye onClick={togglePassword} className="cursor-pointer" />
        </div>
      ) : (
        <input
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
          defaultValue={defaultValue}
          type={type}
          placeholder={placeholder}
          className="primary-input w-full border rounded-md border-[rgb(233,234,242)] h-[35px] p-3 "
        />
      )}

    </div>

   
      {/* Error lives completely outside the wrapper */}
      {error && isInputTouched && (
        <span className="error">{error}</span>
      )}
    </>
      
  );
};

export default AddInputField;