import React, { useContext } from "react";
import { DataContext } from "../App";

const Display = () => {
  const parentData = useContext(DataContext);

  return (
    <div>
      <h1>{parentData}</h1>
    </div>
  );
};

export default Display;
