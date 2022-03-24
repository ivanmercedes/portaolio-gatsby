import React from "react";

const RamdonFigure = () => {
  const arr = [...Array(45).keys()];
  return (
    <div className="wrapper">
      {arr.map((e, i) => (
        <div key={i} className={`particle elem${i} anim-delay${i}`}></div>
      ))}
    </div>
  );
};

export default RamdonFigure;
