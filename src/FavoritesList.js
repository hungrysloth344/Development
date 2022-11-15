import React from "react";
import { useState } from "react";
import DisplayList from "./components/DisplayList";

const FavoritesList = (props) => {
  return (
    <div>
      {props.myFavorites.map((item, index) => {
        return (
          <DisplayList
            item={item}
            index={index}
            total={props.total}
            setTotal={props.setTotal}
            key={index}
            myFavorites={props.myFavorites}
            setMyFavorites={props.setMyFavorites}
          />
        );
      })}
    </div>
  );
};

export default FavoritesList;
