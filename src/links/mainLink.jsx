import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function Mainlink() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3004/main`).then((res) => setData(res.data));
  }, []);

  let location = useLocation();
  console.log(location);
  return (
    <div>
      {data.map((elem) =>
        elem.content.map((elem) =>
          elem.link == "1" ? <div>{elem.text}</div> : <></>
        )
      )}
    </div>
  );
}

export default Mainlink;
