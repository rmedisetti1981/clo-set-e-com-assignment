import React from "react";

const InputField = ({
  label,
  type = "text",
  value,
  checked,
  onChange,
  placeholder,
  ...rest
}) => {
  return (
    <div className="input-field">
      {/* Label on left for checkboxes, top for text */}
      {type === "checkbox" ? (
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            {...rest}
          />
          {label}
        </label>
      ) : (
        <div className="text-input-wrapper">
          {label && <label className="text-label">{label}</label>}
          <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder || "Enter value"}
            {...rest}
          />
        </div>
      )}
    </div>
  );
};

export default InputField;
