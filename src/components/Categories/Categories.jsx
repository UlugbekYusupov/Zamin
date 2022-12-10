import React from "react";
import CategoryItem from "./CategoryItem/CategoryItem";
import "./Categories.scss";

const categories = [
  {
    id: Math.random(),
    name: "Salads",
    image: "",
  },
  {
    id: Math.random(),
    name: "Juices",
    image: "",
  },
  {
    id: Math.random(),
    name: "Meals",
    image: "",
  },
  {
    id: Math.random(),
    name: "Sweats",
    image: "",
  },
  //   {
  //     id: Math.random(),
  //     name: "Burgers",
  //     image: "",
  //   },
  //   {
  //     id: Math.random(),
  //     name: "Salads",
  //     image: "",
  //   },
  //   {
  //     id: Math.random(),
  //     name: "Salads",
  //     image: "",
  //   },
  //   {
  //     id: Math.random(),
  //     name: "Salads",
  //     image: "",
  //   },
  //   {
  //     id: Math.random(),
  //     name: "Salads",
  //     image: "",
  //   },
];

function Categories() {
  return (
    <>
      <div className="categories">
        <div className="naming">
          <label>Categores</label>
          <a>See all</a>
        </div>
        <div className="items">
          {categories.map((item) => {
            return <CategoryItem key={item.id} {...item} />;
          })}
        </div>
      </div>
      <div className="line"></div>
    </>
  );
}

export default Categories;
