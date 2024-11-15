import React from "react";
import { Icons } from "./Icons";
import { useLocation, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const nav = useNavigate();
  const location = useLocation();
  const list = [
    {
      name: "Home",
      path: "",
    },
    {
      name: "Product",
      path: "/products",
    },
  ];
  //   console.log(location.pathname.replaceAll("/", "").slice(0,-1));

  return (
    <div className="main_navbar_container">
      <div className="navbar_box">
        <div className="logo">
          <Icons type={"logo"} />
        </div>
        <div className="navbar_links">
          {list.map((el, i) => (
            <div
              key={i}
              active={
                location?.pathname?.replaceAll("/", "") ==
                el.path.replaceAll("/", "").toLowerCase()
                  ? "true"
                  : ""
              }
              onClick={() => {
                nav(el.path);
              }}
            >
              {el.name}
            </div>
          ))}
        </div>
        <div className="navbar_actions">
          <div
            className="navbar_cart"
            onClick={() => {
              nav("/cart");
            }}
          >
            <Icons type={"cart"} />
          </div>
          <div
            className="navbar_profile"
            onClick={() => {
              nav("/profile");
            }}
          >
            <Icons type={"profile"} />
          </div>
        </div>
      </div>
    </div>
  );
};
