import React from "react";

const DisplayItem = (props) => {
  /**
   * The removeClick() function removes the item and its max length that is being unfavorited when the "Remove From Favorites" button is clicked.
   */
  function removeClick() {
    props.setTotal(parseFloat(props.total) - parseFloat(props.item.length_max));
    props.setMyFavorites((currentFavorites) => {
      return currentFavorites.filter(
        (currentElement) => currentElement !== props.item
      );
    });
  }

  /**
   * The addClick() function adds the item and its max length that is being favorited when the "Add From Favorites" button is clicked.
   */
  function addClick() {
    props.setTotal(parseFloat(props.total) + parseFloat(props.item.length_max));
    props.setMyFavorites((currentFavorites) => {
      return [...currentFavorites, props.item];
    });
  }

  return (
    <div className="AnimalItem">
      <img src={props.item.image_link} alt="animal item"></img>
      <div className="AnimalTextContainer">
        {/** Displays necessary information for each animal */}
        <strong className="Title">{props.item.name}</strong>
        <div className="LatinName">({props.item.latin_name})</div>
        <div className="InfoContainer">
          <div className="Info">Animal Type: {props.item.animal_type}</div>
          <div className="Info">Active Time: {props.item.active_time}</div>
          <div className="Info">Max Length: {props.item.length_max} feet</div>
          <div className="Info">Max Weight: {props.item.weight_max} pounds</div>
          <div className="Info">Lifespan: {props.item.lifespan} years</div>
          <div className="Info">Habitat: {props.item.habitat}</div>
          <div className="Info">Diet: {props.item.diet}</div>
          <div className="Info">
            Geographical Location: {props.item.geo_range}
          </div>
        </div>
        <div className="FavButtons">
          {/** Add and remove to favorites buttons are created and passes in addClick and removeClick to handle necessary calculations and function. */}
          {!props.myFavorites.includes(props.item) ? (
            <button className="Favorites" type="button" onClick={addClick}>
              Add To Favorites
            </button>
          ) : (
            <button
              className="NotFavorites"
              type="button"
              onClick={removeClick}
            >
              Remove From Favorites
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayItem;
