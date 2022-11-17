# Development

### Link to Deployed Website

[https://hungrysloth344.github.io/Development](https://hungrysloth344.github.io/Development)

### API Used

[https://zoo-animal-api.herokuapp.com/](https://zoo-animal-api.herokuapp.com/)

### Goal and Value of the Application

The goal of the application is for users to view and learn facts about different animals. The information on the animals include the name of the animal, latin name, animal type (Amphibian, Bird, Mammal, or Reptile), the time the animal is active (Diurnal or Nocturnal), the maximum length of the animal in feet, and the maximum weight in pounds, the lifepan in years, the animal's habitat, diet, and geographical location.

The user can also sort by the name of the animal with radio buttons from Ascending (A-Z), Descending (Z-A), or none at all. The user can also filter by the animal's active time and animal_type with radio buttons simultaneously.

The user is able to add and remove an animal to their favorites and the total/aggregate maximum length of the animals in the favorites list updates accordingly. The user is also able to clear their favorites list with the "Clear Favorites" button.

The value to the user is the ability to explore and learn about cool animals and facts about the animals while keeping track of their favorites with efficiency.

### Usability Principles Considered

Usability principles that were considered included having user control and freedom, the third heuristic of the 10 usability heuristics, by including a "Remove From Favorites" button as well as the "Clear Favorites" button that clears the whole favorites list so that the user has the ability to "undo" an action (in this case, adding to favorites) if neeeded. There is also consistency and standards throughout the page (the sixth heuristic) where all the buttons are rounded the same amount and the add to and remove from favorite buttons are all the same size. Additionally, I stuck to a few fonts that help define the hierachical structure of the page. Following the ninth heuristic, I also maintained an aesthetic and minimalist design so that it is easy and efficient to navigate while not being cluttered with irrelevant information. I also put the filtering and sorting options and the favorites list on the top right side of the page so the user does not have to scroll all the way down to view the filtering and sorting options and interact with their favorites.

### Organization of Components

Starting from the App, the data from the animals-data.json file is being passed in by creating a state variable. I also store an array of favorites to keep track of what is favorited as well as the total for the aggregation of maximum length of each animal that is favorited. I also map the data in the json file to DisplayItem in App, where I pass in neccessary props to display each animal card. I also pass in associated props to FilteredList which handles the actual filtering and sorting functionality. Lastly, I pass in associated props to Favorites in App which deals with the favorites functionality in App.

In the DisplayItem component, I use props that are passed in from App to build the animal cards for each data entry in the json. It also takes care of the favorites buttons and the actual clicking and handling of them. I also set the favorites here which is used in App to actually display the favorited animals.

In the FilteredList component, I take care of the actual filtering and sorting functionality. Radio buttons are created and I use useEffect to make sure when a filter and/or sort is selected, that it is handled accordingly.

In the Favorites component, I take care of the favorites functionality including the clearing of favorites, aggregating of the total maximum length of animals in favorites, as well as maps to DisplayItem to show the actual animal card in the favorites.

Lastly, I take care of the CSS and styling of my components in App.css.

### How Data is Passed Down Through Components

The data is passed down through components from App to the other components (DisplayItem, FilteredList, and Favorites). In App, I create a state variable that passes in the data from the animals-data json file. In FilteredList, I set the data to display a list of animals that meet the filter and/or sort that is selected by passing in setMyData and myData as props. I also map myData to DisplayItem so each animal and its associated information are being displayed accordingly. The Favorites component also uses DisplayItem, which maps myData, to display the items that are favorited.

### How the User Triggers State Changes

The user triggers state changes from the components. That is, in DisplayItem, the state is updated when the user clicks "Add to Favorites" or "Remove From Favorites" using setters so the favorites is being updated as well as the aggregate total of the maximum length of the favorite animals. Also, FilteredList handles the change in filter and sort states with useEffect based on which one is selected by the user. In Favorites, I also take care of the clearing of the favorites with a button that essentially resets the state of the the favorites aray and the total (ie. an empty array and 0 respectively) when clicked by using the handleChange function written in App.
