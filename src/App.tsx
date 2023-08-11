import React, { createContext, useContext, useState } from "react";
import Display from "./components/Display";

export const DataContext = createContext(null);

const App = () => {
  const [data, setData] = useState<any>("parent data or state data");
  return (
    <DataContext.Provider value={data}>
      <Display />
    </DataContext.Provider>
  );
};

export default App;
