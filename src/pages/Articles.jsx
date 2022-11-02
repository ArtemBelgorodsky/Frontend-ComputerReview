import React from "react";
import Articles_card from "../components/Articles_card";

let a = new Array();

for (let i = 0; i < 20; i++) {
  a.push(i);
}

function Articles() {
  return (
    <div className="articles_wrapper">
      {a.map(() => (
        <Articles_card />
      ))}
    </div>
  );
}

export default Articles;
