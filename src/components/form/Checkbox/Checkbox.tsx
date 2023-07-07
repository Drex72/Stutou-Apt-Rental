import React from "react";
import "./CheckboxStyles.scss";

interface CheckboxProps {
  label?: string;
  checkboxProps?: React.InputHTMLAttributes<HTMLInputElement>;
  animation?:string
}

const Checkbox = (props: CheckboxProps) => {
  const { label, checkboxProps ,animation} = props;
  return (
    <div className={`checkbox-container ${animation}`}>
      <input
        id="ml-checkbox"
        name="ml-checkbox"
        type="checkbox"
        className="ml-input-checkbox"
        {...checkboxProps}
      />
      <label htmlFor="ml-checkbox">{label}</label>
    </div>
  );
};

export default Checkbox;
