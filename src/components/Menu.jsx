import React from "react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Menu() {
  const [active, setActive] = useState(0);
  const [position, setPosition] = useState(0);
  const [visible, setVisible] = useState(false);
  const [menu, setMenu] = useState({ menu: [], loaded: true });
  const activeItem = (index, pos) => {
    setActive(index);
    pos && setPosition(pos);
    visible && setVisible(!visible);
  };

  const positionHandler = () => {
    setPosition(handleOffsetLeft.current.offsetLeft);
  };

  const handleOffsetLeft = useRef(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3004/menu`)
      .then((res) => {
        setMenu({ menu: res.data, loaded: false });
      })
      .then(() => {
        setPosition(handleOffsetLeft.current.offsetLeft);
      });
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
        {menu.menu.map((elem, index) => (
          <Link
            className={index == active ? "active item" : "item"}
            key={index}
            ref={index == active ? handleOffsetLeft : null}
            onClick={(event) => activeItem(index, event.target.offsetLeft)}
            to={elem.link}
          >
            {elem.title}
            <div
              className={
                active == index && !visible ? "push_menu_visble" : "push_menu"
              }
            >
              {elem.submenu &&
                elem.submenu.map((sub) => (
                  <Link to={sub.link} className="push_menu_item">
                    {sub.title}
                  </Link>
                ))}
            </div>
          </Link>
        ))}
        <div className="selection" style={{ left: position }}></div>
      </div>
    </div>
  );
}
