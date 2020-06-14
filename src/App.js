import React from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";

const App = () => {
  return (
    <div className ='tc'>
      <div>
        <h1>RoboSocial</h1>
        <SearchBox />
      </div>
      <CardList robots={robots} />
    </div>
  );
};

export default App;
