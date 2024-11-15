import React from "react";

export const CustInputText = ({ inputname, value, setvalue }) => {
  return (
    <label htmlFor={inputname}>
      <input
        type="text"
        id={inputname}
        value={value}
        onChange={setvalue}
        placeholder={inputname}
      />
    </label>
  );
};
export const CustInputImage = () => {
  return <div>AllInpputs</div>;
};
