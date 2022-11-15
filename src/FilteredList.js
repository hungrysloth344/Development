import React, { useEffect } from "react";
import { useState } from "react";
import DisplayList from "./components/DisplayList";

export default function FilteredList(props) {
  const [sortState, setSortState] = useState(0);
  const [filterState, setFilterState] = useState(0);
  const [typeFilterState, setTypeFilterState] = useState(0);
  const [filteredData, setFilteredData] = useState(props.myData);

  useEffect(() => {
    let newList = [...props.data];

    if (filterState === 1) {
      newList = newList.filter((el) => {
        return el.active_time === "Diurnal";
      });
    } else if (filterState === 2) {
      newList = newList.filter((el) => {
        return el.active_time === "Nocturnal";
      });
    }
    if (typeFilterState === 1) {
      newList = newList.filter((el) => {
        return el.animal_type === "Amphibian";
      });
    } else if (typeFilterState === 2) {
      newList = newList.filter((el) => {
        return el.animal_type === "Bird";
      });
    } else if (typeFilterState === 3) {
      newList = newList.filter((el) => {
        return el.animal_type === "Mammal";
      });
    } else if (typeFilterState === 4) {
      newList = newList.filter((el) => {
        return el.animal_type === "Reptile";
      });
    }
    if (sortState === 1) {
      newList = newList.sort((a, b) => {
        return a.name > b.name ? 1 : -1;
      });
    } else if (sortState === 2) {
      newList = newList.sort((a, b) => {
        return a.name < b.name ? 1 : -1;
      });
    }
    setFilteredData(newList);
    props.setData(newList);
  }, [sortState, filterState, typeFilterState, props.myFavorites]);

  const handleTheSort = (num) => {
    setSortState(num);
  };

  const handleTheFilter = (num) => {
    setFilterState(num);
  };

  const handleTheTypeFilter = (num) => {
    setTypeFilterState(num);
  };

  return (
    <div className="filter-container">
      <h2>Sort By Name</h2>

      <div>
        <input
          type="radio"
          id="huey"
          name="drone"
          value="huey"
          onChange={() => handleTheSort(1)}
        />
        <label htmlFor="huey">Ascending (A-Z)</label>
      </div>

      <div>
        <input
          type="radio"
          id="dewey"
          name="drone"
          value="dewey"
          onChange={() => handleTheSort(2)}
        />
        <label htmlFor="dewey">Descending (Z-A)</label>
      </div>

      <div>
        <input
          type="radio"
          id="louie"
          name="drone"
          value="louie"
          onChange={() => handleTheSort(3)}
        />
        <label htmlFor="louie">None</label>
      </div>

      <h2>Filter By</h2>
      <h3> Active Time</h3>
      <div>
        <input
          type="radio"
          id="huey"
          name="hi"
          value="huey"
          onChange={() => handleTheFilter(1)}
        />
        <label htmlFor="huey">Diurnal</label>
      </div>

      <div>
        <input
          type="radio"
          id="dewey"
          name="hi"
          value="dewey"
          onChange={() => handleTheFilter(2)}
        />
        <label htmlFor="dewey">Nocturnal</label>
      </div>

      <div>
        <input
          type="radio"
          id="louie"
          name="hi"
          value="louie"
          onChange={() => handleTheFilter(0)}
        />
        <label htmlFor="louie">All</label>
      </div>

      <h3> Animal Type</h3>
      <div>
        <input
          type="radio"
          id="huey"
          name="ok"
          value="huey"
          onChange={() => handleTheTypeFilter(1)}
        />
        <label htmlFor="huey">Amphibian</label>
      </div>

      <div>
        <input
          type="radio"
          id="dewey"
          name="ok"
          value="dewey"
          onChange={() => handleTheTypeFilter(2)}
        />
        <label htmlFor="dewey">Bird</label>
      </div>

      <div>
        <input
          type="radio"
          id="louie"
          name="ok"
          value="louie"
          onChange={() => handleTheTypeFilter(3)}
        />
        <label htmlFor="louie">Mammal</label>
      </div>

      <div>
        <input
          type="radio"
          id="louie"
          name="ok"
          value="louie"
          onChange={() => handleTheTypeFilter(4)}
        />
        <label htmlFor="louie">Reptile</label>
      </div>

      <div>
        <input
          type="radio"
          id="louie"
          name="ok"
          value="louie"
          onChange={() => handleTheTypeFilter(0)}
        />
        <label htmlFor="louie">All</label>
      </div>
    </div>
  );
}
