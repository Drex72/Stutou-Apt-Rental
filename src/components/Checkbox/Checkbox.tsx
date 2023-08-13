import React from "react";
import "./CheckboxStyles.scss";

interface CheckboxProps {
  label?: string;
}

const Checkbox = (props: CheckboxProps) => {
  const { label } = props;
  return (
    <div>
      <input
        id="ml-checkbox"
        name="ml-checkbox"
        type="checkbox"
        className="ml-input-checkbox"
      />
      <label htmlFor="ml-checkbox">{label}</label>
    </div>
  );
};

export default Checkbox;
