import React from "react";
import DisplayItem from "./DisplayItem";

const Favorites = ({
  myFavorites,
  total,
  setMyFavorites,
  setTotal,
  handleChange,
}) => {
  return (
    <>
      {/** Creates a button that clears the favorites */}
      <button className="Clear" onClick={handleChange}>
        Clear Favorites
      </button>
      {/** Calculates the aggregate maximum length of the animals in favorites*/}
      <h3>Combined Max Length of Favorites: {Math.round(total * 100) / 100}</h3>
      <div>
        {/** Maps to DisplayItem*/}
        {myFavorites.length === 0 ? (
          <h3>No favorites added yet!</h3>
        ) : (
          myFavorites.map((item, index) => {
            return (
              <DisplayItem
                key={index}
                index={index}
                item={item}
                total={total}
                setMyFavorites={setMyFavorites}
                setTotal={setTotal}
                myFavorites={myFavorites}
              />
            );
          })
        )}
      </div>
    </>
  );
};

export default Favorites;
