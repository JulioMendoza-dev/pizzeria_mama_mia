import { createContext, useState, useContext } from "react";
// crear contexto vvv
export const CounterContext = createContext();

// crear el hook useCounter
export const useCounter =()=>{
  return useContext(CounterContext)}

//CREAR PROVEEDOR vvv
function CounterProvider({ children }) {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  const decrement = () => {
    setCounter((prev) => prev - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    // creador de contexto  vvv
    <CounterContext.Provider
      /*valor entregado a children>>>*/ value={{
        counter,
        increment,
        decrement,
        reset,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
}

export default CounterProvider;
