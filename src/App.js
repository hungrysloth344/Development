import "./App.css";
import data from "./assets/animals-data.json";
import DisplayList from "./components/DisplayList";
import { useState } from "react";
import FilteredList from "./FilteredList";
import FavoritesList from "./FavoritesList";

function App() {
  const [total, setTotal] = useState(0);
  const [myData, setMyData] = useState(data);
  const [myFavorites, setMyFavorites] = useState([]);
  const [cart, setCart] = useState(new Array(data.length).fill(0));

  return (
    <div className="App">
      <strong className="main">Cool Animals</strong>
      <div className="App-Container">
        <div className="BakeryItem-Container">
          {myData.map((item, index) => (
            <DisplayList
              item={item}
              index={index}
              total={total}
              setTotal={setTotal}
              key={index}
              myFavorites={myFavorites}
              setMyFavorites={setMyFavorites}
              setCart={setCart}
            />
          ))}
        </div>
        <div className="filters-card">
          <div>
            <FilteredList
              data={data}
              myData={myData}
              setData={setMyData}
              myFavorites={myFavorites}
              setMyFavorites={setMyFavorites}
            />
          </div>

          <p>Favorites Max Length: {Math.round(total * 100) / 100}</p>

          {/* <div className="filters-card">
            <div>My Favorites</div>
            <div>
              <FavoritesList
                data={data}
                myData={myData}
                setData={setMyData}
                myFavorites={myFavorites}
                setMyFavorites={setMyFavorites}
                total={total}
                setTotal={setTotal}
              />
            </div>
          </div> */}

          {cart.map((key, idx) => {
            if (key > 0) {
              return <div key={idx}>{data[idx].name}</div>;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
