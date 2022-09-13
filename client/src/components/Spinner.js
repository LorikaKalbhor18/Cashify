import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

function Spinner() {
  return (
    <div className="spinner" size="large">
      <Spin />
    </div>
  );
}

export default Spinner;
