import React from "react";

const CountContext = React.createContext();

function CountProvider(props) {
  const [count, setCount] = React.useState(0);

  const increment = () => setCount((c) => c + 1);

  return (
    <CountContext.Provider value={{ count, increment }}>
      {props.children}
    </CountContext.Provider>
  );
}

const useCountContext = () => {
  const value = React.useContext(CountContext);
  if (value === undefined) {
    throw new Error("useCountContext must be used within a CountProvider");
  }
  return value;
};

export { CountProvider, useCountContext };
