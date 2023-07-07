import React from "react";
import "./ButtonStyles.scss";
import Spinner from "../Spinner/Spinner";

interface buttonProps {
  label: string | React.ReactNode;
  variant: "outlined" | "contained" | "text";
  disable?: boolean;
  loading?: boolean;
  type?: "button" | "submit";
  width?: string;
  size?: "sm" | "md" | "lg";
  onClick?: VoidFunction;
  buttonClassName?: string;
  ref?: any;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  animation?: string
}

const Button: React.FC<buttonProps> = ({
  disable,
  onClick,
  variant,
  loading,
  label,
  type,
  width,
  size,
  buttonClassName,
  buttonProps,
  ref,
  animation
}) => {
  const SizeController = () => {
    switch (size) {
      case "sm":
        return { fontSize: "10px", padding: "10px" };
      case "md":
        return { fontSize: "12px", padding: "13px" };
      case "lg":
        return { fontSize: "15px", padding: "16px" };
      default:
        return { fontSize: "16px", padding: "10px" };
    }
  };
  return (
    <button
      type={type || "submit"}
      ref={ref}
      onClick={onClick}
      disabled={disable || loading}
      style={{
        width: width ?? "100%",
        padding: SizeController().padding,
        fontSize: SizeController().fontSize,
      }}
      {...buttonProps}
      className={`custom-button custom-button_${variant} ${buttonClassName} ${animation}`}
    >
      <span>
        {label}
        {loading && (
          <>
            <Spinner />
          </>
        )}
      </span>
    </button>
  );
};

export default Button;
