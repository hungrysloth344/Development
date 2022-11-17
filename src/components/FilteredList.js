import React, { useEffect } from "react";
import { useState } from "react";

export default function FilteredList(props) {
  const [sortState, setSortState] = useState(0);
  const [activeTimeFilterState, setActiveTimeFilterState] = useState(0);
  const [animalTypeFilterState, setAnimalTypeFilterState] = useState(0);

  /** Does the actual sorting and filtering */
  useEffect(() => {
    let newList = [...props.data];

    if (activeTimeFilterState === 1) {
      newList = newList.filter((el) => {
        return el.active_time === "Diurnal";
      });
    } else if (activeTimeFilterState === 2) {
      newList = newList.filter((el) => {
        return el.active_time === "Nocturnal";
      });
    }
    if (animalTypeFilterState === 1) {
      newList = newList.filter((el) => {
        return el.animal_type === "Amphibian";
      });
    } else if (animalTypeFilterState === 2) {
      newList = newList.filter((el) => {
        return el.animal_type === "Bird";
      });
    } else if (animalTypeFilterState === 3) {
      newList = newList.filter((el) => {
        return el.animal_type === "Mammal";
      });
    } else if (animalTypeFilterState === 4) {
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
    props.setData(newList);
  }, [sortState, activeTimeFilterState, animalTypeFilterState]);

  const handleTheSort = (num) => {
    setSortState(num);
  };

  const handleTheActiveTimeFilter = (num) => {
    setActiveTimeFilterState(num);
  };

  const handleTheAnimalTypeFilter = (num) => {
    setAnimalTypeFilterState(num);
  };

  return (
    /** Creates radio buttons and calls the associated handle to take care of each sort and filter option */
    <div className="FilterContainer">
      <h2>Sort By Name</h2>

      <div className="radio">
        <input type="radio" name="sorting" onChange={() => handleTheSort(1)} />
        <label>Ascending (A-Z)</label>
      </div>

      <div className="radio">
        <input type="radio" name="sorting" onChange={() => handleTheSort(2)} />
        <label>Descending (Z-A)</label>
      </div>

      <div className="radio">
        <input
          type="radio"
          name="sorting"
          defaultChecked="true"
          onChange={() => handleTheSort(3)}
        />
        <label>None</label>
      </div>

      <h2>Filter By</h2>
      <h3> Active Time</h3>
      <div className="radio">
        <input
          type="radio"
          name="activeTimeFilter"
          defaultChecked="true"
          onChange={() => handleTheActiveTimeFilter(0)}
        />
        <label>All</label>
      </div>

      <div className="radio">
        <input
          type="radio"
          name="activeTimeFilter"
          onChange={() => handleTheActiveTimeFilter(1)}
        />
        <label>Diurnal</label>
      </div>

      <div className="radio">
        <input
          type="radio"
          name="activeTimeFilter"
          onChange={() => handleTheActiveTimeFilter(2)}
        />
        <label>Nocturnal</label>
      </div>

      <h3> Animal Type</h3>
      <div className="radio">
        <input
          type="radio"
          name="animalTypeFilter"
          defaultChecked="true"
          onChange={() => handleTheAnimalTypeFilter(0)}
        />
        <label>All</label>
      </div>

      <div className="radio">
        <input
          type="radio"
          name="animalTypeFilter"
          onChange={() => handleTheAnimalTypeFilter(1)}
        />
        <label>Amphibian</label>
      </div>

      <div className="radio">
        <input
          type="radio"
          name="animalTypeFilter"
          onChange={() => handleTheAnimalTypeFilter(2)}
        />
        <label>Bird</label>
      </div>

      <div className="radio">
        <input
          type="radio"
          name="animalTypeFilter"
          onChange={() => handleTheAnimalTypeFilter(3)}
        />
        <label>Mammal</label>
      </div>

      <div className="radio">
        <input
          type="radio"
          name="animalTypeFilter"
          onChange={() => handleTheAnimalTypeFilter(4)}
        />
        <label>Reptile</label>
      </div>
    </div>
  );
}
