import React from "react";
import { Navbar } from "./Navbar";

export const Common = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="allpagescollection">{children}</div>
    </div>
  );
};
