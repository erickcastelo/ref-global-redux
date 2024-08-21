import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setRef } from "../store/refsSlice";

const ComponentA = () => {
  const dispatch = useDispatch();
  const refA = useRef(null);

  useEffect(() => {
    dispatch(setRef({ key: "refA", ref: refA }));
  }, [dispatch]);

  return (
    <div ref={refA}>
      <h2>Componente A</h2>
    </div>
  );
};

export default ComponentA;
