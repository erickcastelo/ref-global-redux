import React from "react";
import { useSelector } from "react-redux";

const ComponentB = () => {
  const refA = useSelector((state: any) => state.refs.refA);

  const handleClick = () => {
    if (refA && refA.current) {
      refA.current.style.backgroundColor = "lightblue";
    }
  };

  return (
    <div>
      <h2>Componente B</h2>
      <button onClick={handleClick}>Alterar Estilo de Componente A</button>
    </div>
  );
};

export default ComponentB;
