import React, { useState } from "react";
import { AddForm } from "../components/AddForm";

export const Product = () => {
  const [AddBtn, setAddBtn] = useState(false);

  return (
    <div className="product_container">
      {AddBtn && (
        <AddForm
          {...{
            title: "Products",
            inp_options: [
              {
                type: "text",
              },
            ],
            
            onclick: () => {
              setAddBtn((prev) => !prev);
            },
          }}
        />
      )}
      <div className="product_header">
        <div className="product_header_txt">Products</div>
        <div
          className="product_header_btn"
          onClick={() => {
            setAddBtn(true);
          }}
        >
          Add Products
        </div>
      </div>
      <div className="product_body"></div>
    </div>
  );
};
