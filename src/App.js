import "./App.css";
import data from "./assets/animals-data.json";
import DisplayItem from "./components/DisplayItem";
import { useState } from "react";
import FilteredList from "./components/FilteredList";

function App() {
  const [total, setTotal] = useState(0);
  const [myData, setMyData] = useState(data);
  const [myFavorites, setMyFavorites] = useState([]);

  /** Resets the favorites */
  const handleChange = () => {
    setMyFavorites([]);
    setTotal(0);
  };

  return (
    <div className="App">
      <strong className="Main">Cool Animals</strong>
      <div className="AppContainer">
        <div className="AnimalItemContainer">
          {/** Maps the data in the json file to display each animal and passes in associated props */}
          {myData.map((item, index) => (
            <DisplayItem
              item={item}
              index={index}
              total={total}
              setTotal={setTotal}
              key={index}
              myFavorites={myFavorites}
              setMyFavorites={setMyFavorites}
            />
          ))}
        </div>
        <div className="FiltersCard">
          {/** Passes in associated props to FilteredList */}
          <div>
            <FilteredList data={data} myData={myData} setData={setMyData} />
          </div>
          {/** Allows users to clear their favorites and resets myFavorites and the total max length */}
          <button className="Clear" onClick={handleChange}>
            Clear Favorites
          </button>
          <h3>Favorites Max Length: {Math.round(total * 100) / 100}</h3>
          {/** Maps the items in myFavorites to display each animal added to favorites and passes in associated props */}
          {myFavorites.length === 0 ? (
            <h3>No favorites!</h3>
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
      </div>
    </div>
  );
}

export default App;
