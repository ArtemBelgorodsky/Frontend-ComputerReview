import React from "react";
import { useState, useRef, useEffect } from "react";

export default function Menu({ list }) {
  const [active, setActive] = useState(0);
  const [position, setPosition] = useState(0);
  const activeItem = (index) => {
    setActive(index);
    setPosition();
  };

  return (
    <div className="site_menu_wrapper">
      <div className="site_menu">
        {list.map((elem, index) => (
          <a
            className={index == active ? "active item" : "item"}
            key={index}
            onClick={(event) => activeItem(index, event.target.offsetLeft)}
          >
            {elem}
          </a>
        ))}
        <div className="selection" style={{ left: position }}></div>
      </div>
    </div>
  );
}
