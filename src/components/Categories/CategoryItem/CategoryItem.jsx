import React from "react";
import "./CategoryItem.scss";

function CategoryItem(item) {
  const itemClickHandler = (id) => {
    console.log(id);
  };
  return (
    <div onClick={() => itemClickHandler(item.id)} className="item">
      <div className="inner-item">
        <img src="cola.png" alt="" />
        <p>{item.name}</p>
      </div>
    </div>
  );
}

export default CategoryItem;
