import React, { forwardRef } from "react";
import "./inputStyles.scss";

interface InputProps {
  id: string;
  label: string;
  error: string | null;
  inputClassName?: string;
  labelClassName?: string;
  rightIcon?: JSX.Element;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  requiredAstersik?: boolean;
  animation?: string;
}

type Ref = any;

const Input = forwardRef<Ref, InputProps>(
  (
    {
      id,
      inputProps,
      error,
      label,
      rightIcon,
      inputClassName,
      requiredAstersik,
      labelClassName,
      animation,
    },
    ref
  ) => {
    return (
      <div className={`custom-input ${animation}`}>
        <label htmlFor={id} className={`custom-input__label ${labelClassName}`}>
          {label}{" "}
          {requiredAstersik && inputProps?.required && (
            <span className="input_required_asterisk">*</span>
          )}
        </label>

        <div className="custom-input__container">
          <input
            ref={ref}
            {...inputProps}
            id={id}
            className={`custom-input__container__input ${inputClassName} ${
              error ? "custom-input__container__input-errored" : undefined
            }`}
          />

          {rightIcon && <div className="right-icon">{rightIcon}</div>}
        </div>

        <span
          className={`custom-input__error ${
            !error ? "custom-input__error-hidden" : undefined
          } animate__animated animate__fadeIn`}
        >{`${id} ${error}`}</span>
      </div>
    );
  }
);

interface TextAreaProps {
  id: string;
  label: string;
  error: string | null;
  inputClassName?: string;
  labelClassName?: string;
  textareaProps?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
  rows?: number;
  requiredAstersik?: boolean;
  animation?: string;
}
export const TextArea = ({
  id,
  textareaProps,
  error,
  label,
  inputClassName,
  rows,
  requiredAstersik,
  labelClassName,
  animation,
}: TextAreaProps) => {
  return (
    <div className={`custom-input ${animation}`}>
      <label htmlFor={id} className={`custom-input__label ${labelClassName}`}>
        {label}{" "}
        {requiredAstersik && textareaProps?.required && (
          <span className="input_required_asterisk">*</span>
        )}{" "}
      </label>

      <div className="custom-input__container">
        <textarea
          id={id}
          {...textareaProps}
          rows={rows ?? 10}
          className={`custom-input__container__input ${inputClassName} ${
            error ? "custom-input__container__input-errored" : undefined
          }`}
        />
      </div>

      <span
        className={`custom-input__error ${
          !error ? "custom-input__error-hidden" : undefined
        } animate__animated animate__fadeIn`}
      >{`${id} ${error}`}</span>
    </div>
  );
};
export default Input;
