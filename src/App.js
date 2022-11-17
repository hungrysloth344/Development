import "./App.css";
import data from "./assets/animals-data.json";
import DisplayItem from "./components/DisplayItem";
import { useState } from "react";
import FilteredList from "./components/FilteredList";
import Favorites from "./components/Favorites";

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
          {/** Passes in associated props to Favorites */}
          <Favorites
            total={total}
            myFavorites={myFavorites}
            setMyFavorites={setMyFavorites}
            setTotal={setTotal}
            handleChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
