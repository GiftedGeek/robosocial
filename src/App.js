import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    console.log(filteredRobots);
    return (
      <div className="tc">
        <div>
          <h1>ROBOSOCIAL</h1>
          <SearchBox searchChange={this.onSearchChange}/>
        </div>
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
