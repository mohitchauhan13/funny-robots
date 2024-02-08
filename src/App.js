import "./App.css";
import { useEffect, useState } from "react";
import SearchBox from "./components/searchBox/SearchBox";
import CardList from "./components/cardList/CardList";

function App() {
  const [robots, setRobots] = useState([]);
  const [searchedValue, setSearchedValue] = useState("");
  const [filteredList, setFilteredList] = useState(robots);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setRobots(users));
  }, []);

  useEffect(() => {
    if (searchedValue) {
      const filteredRobots = robots.filter((each) =>
        each.name.includes(searchedValue)
      );
      setFilteredList(filteredRobots);
    } else {
      setFilteredList(robots);
    }
  }, [robots, searchedValue]);

  return (
    <div className="App">
      <div className="app-title">Funny Robots</div>
      <SearchBox
        value={searchedValue}
        handleOnChange={setSearchedValue}
        className=""
        placeholder="Search"
      />
      <CardList robots={filteredList} />
    </div>
  );
}

export default App;
