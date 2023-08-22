import React from "react";
import "./ItemCategory.css";

const ItemCategory = ({
  imgPath,
  nameCategory,
}: {
  imgPath: string;
  nameCategory: string;
}) => {
  return (
    <div className="itemCategoryCar">
      <span>{nameCategory}</span>
      <img src={imgPath} className="imgCar" />
    </div>
  );
};

export default ItemCategory;
