import React, { useState } from "react";
import { AddForm } from "../components/AddForm";

export const Product = () => {
  const [AddBtn, setAddBtn] = useState(false);
  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    images: [],
  });
  return (
    <div className="product_container">
      {AddBtn && (
        <AddForm
          {...{
            type: "Products",
            inp_options: [
              {
                type: "text",
                inpkey: "name",
                title: "Name",
              },
              {
                type: "text",
                inpkey: "category",
                title: "Category",
              },
              {
                type: "text",
                inpkey: "price",
                title: "Price",
              },
              {
                type: "text",
                inpkey: "description",
                title: "Description",
              },
              {
                type: "images",
                inpkey: "images",
                title: "Images",
              },
            ],
            setdata: setProduct,
            data: product,
            actions: [
              {
                type: "save",
                btntype: "",
              },
              {
                type: "close",
                btntype: "",
              },
            ],
            save: () => {
              setAddBtn((prev) => !prev);
            },
            close: () => {
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
