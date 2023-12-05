import React, {useState} from "react";

function Item({ name, category }) {
  const [itemInCart,setItemInCart] = useState(false);

  function handleButtonClick(){
    setItemInCart((itemInCart) =>!itemInCart);
  }

  return (
    <li className={itemInCart? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleButtonClick}>{!itemInCart? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
