import "./App.css";
import { Component } from "react";
import Parent from "./components/Parent/Parent";

class App extends Component {
  state;

  render() {
    return (
      <>
        <h3 className="text-center h1 container bg-black  text-white py-3 ">
          Lab Day 1
        </h3>
        <Parent></Parent>
      </>
    );
  }
}

export default App;
