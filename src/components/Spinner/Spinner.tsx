import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import "./SpinnerStyles.scss";

interface SpinnerProps {
  color?: string;
  fontSize?: number | string;
}

const Spinner: React.FC<SpinnerProps> = ({
  color = "#C3C3CB",
  fontSize = "1.4rem",
}) => {
  return (
    <div className="ml-custom-spinner" style={{ display: "inline-block" }}>
      <Spin indicator={<LoadingOutlined style={{ fontSize, color }} spin />} />
    </div>
  );
};

export default Spinner;
