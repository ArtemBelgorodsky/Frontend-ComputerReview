import React from "react";
import { useState, useRef, useEffect } from "react";

export default function Menu() {
  const [active, setActive] = useState(0);
  const [position, setPosition] = useState(0);
  const activeItem = (index, pos) => {
    setActive(index);
    setPosition(pos);
  };

  const MenuList = [
    { title: "Главная" },
    {
      title: "Статьи",
      submenu1: "Сборки ПК",
      submenu2: "Комплектующие к ПК",
      submenu3: "Смартфоны",
    },
    { title: "Аналитика" },
    { title: "Наш магазин" },
  ];

  const handleOffsetLeft = useRef();

  const positionHandler = () => {
    setPosition(handleOffsetLeft.current.offsetLeft);
  };

  useEffect(() => {
    setPosition(handleOffsetLeft.current.offsetLeft);
    window.addEventListener("resize", positionHandler);
    return () => {
      window.removeEventListener("resize", positionHandler);
    };
  }, []);

  return (
    <div className="site_menu_wrapper">
      <div className="site_menu">
        {MenuList.map(
          (elem, index) => (
            console.log(elem),
            (
              <a
                className={index == active ? "active item" : "item"}
                key={index}
                ref={index == active ? handleOffsetLeft : null}
                onClick={(event) => activeItem(index, event.target.offsetLeft)}
              >
                {elem}
              </a>
            )
          )
        )}
        <div className="selection" style={{ left: position }}></div>
      </div>
    </div>
  );
}
