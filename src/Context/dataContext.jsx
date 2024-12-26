import { createContext, useEffect, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/gorbadil/medium/refs/heads/main/data.json"
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  const value = { data, setData };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataProvider;

export { DataContext };
