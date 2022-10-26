import React from "react";
import { useState, useRef, useEffect } from "react";

export default function Menu() {
  const [active, setActive] = useState(0);
  const [position, setPosition] = useState(0);
  const [visible, setVisible] = useState(false);
  const activeItem = (index, pos) => {
    setActive(index);
    pos && setPosition(pos);
    visible && setVisible(!visible);
  };

  const MenuList = [
    { title: "Главная" },
    {
      title: "Статьи",
      submenu1: "Сборки ПК",
      submenu2: "Комплектующие к ПК",
      submenu3: "Смартфоны",
    },
    {
      title: "Аналитика",
    },
    { title: "Наш магазин" },
  ];

  const handleOffsetLeft = useRef();

  const positionHandler = () => {
    setPosition(handleOffsetLeft.current.offsetLeft);
  };

  useEffect(() => {
    setPosition(handleOffsetLeft.current.offsetLeft);
    window.addEventListener("resize", positionHandler);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("resize", positionHandler);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleClickOutside(event) {
    if (
      handleOffsetLeft.current &&
      !handleOffsetLeft.current.contains(event.target)
    ) {
      setVisible(!visible);
    }
  }

  return (
    <div className="site_menu_wrapper">
      <div className="site_menu">
        {MenuList.map((elem, index) => (
          <a
            className={index == active ? "active item" : "item"}
            key={index}
            ref={index == active ? handleOffsetLeft : null}
            onClick={(event) => activeItem(index, event.target.offsetLeft)}
          >
            {elem.title}
            <div
              className={
                active == index && !visible ? "push_menu_visble" : "push_menu"
              }
            >
              {Object.keys(elem).map((sub) =>
                sub == "title" ? null : (
                  <a className="push_menu_item">{elem[sub]}</a>
                )
              )}
            </div>
          </a>
        ))}
        <div className="selection" style={{ left: position }}></div>
      </div>
    </div>
  );
}
