import React from "react";
import { useState } from "react";

const DisplayList = (props) => {
  const [firstPage, setFirstPage] = useState(true);

  function handleClick() {
    setFirstPage(true);
    props.setTotal(parseFloat(props.total) - parseFloat(props.item.length_max));
    props.setMyFavorites((currentFavorites) => {
      return currentFavorites.filter(
        (currentElement) => currentElement !== props.item
      );
    });
    props.setCart((prevCart) => {
      let newCart = [...prevCart];
      newCart[props.index] -= 1;
      return newCart;
    });
  }

  function reverseClick() {
    setFirstPage(false);
    props.setTotal(parseFloat(props.total) + parseFloat(props.item.length_max));
    props.setMyFavorites([...props.myFavorites, props.item]);
    props.setCart((prevCart) => {
      let newCart = [...prevCart];
      newCart[props.index] += 1;
      return newCart;
    });
  }

  return (
    <div className="BakeryItem">
      <img src={props.item.image_link} alt="bakery item"></img>
      <div className="BakeryTextContainer">
        <strong className="Title">{props.item.name}</strong>
        <div>Animal Type: {props.item.animal_type}</div>
        <div>Active Time: {props.item.active_time}</div>
        <div>Max Length: {props.item.length_max}</div>
        <div>Max Weight: {props.item.weight_max}</div>
        <div className="total">
          {firstPage ? (
            <button className="favorites" type="button" onClick={reverseClick}>
              Add To Favorites
            </button>
          ) : (
            <button
              className="notfavorites"
              type="button"
              onClick={handleClick}
            >
              Remove From Favorites
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayList;
