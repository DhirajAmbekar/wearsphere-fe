import React from "react";
import { Product } from "./pages/Product";
import { Outlet, useRoutes } from "react-router-dom";
import { Common } from "./components/Common";

export const Layout = () => {
  const nav = [
    {
      path: "",
      name: "Home",
      element: (
        <Common>
          <Outlet />
        </Common>
      ),
      children: [
        {
          path: "",
          name: "Home",
          element: <Product />,
        },
        {
          path: "/products",
          name: "Product",
          element: <Product />,
        },
        {
          path: "/profile",
          name: "Profile",
          element: <Product />,
        },
        {
          path: "/cart",
          name: "Cart",
          element: <Product />,
        },
      ],
    },
  ];
  return <div className="layout">{useRoutes(nav)}</div>;
};
