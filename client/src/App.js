import React from "react";
import "./App.css";
import CardComponent from "./components/CardComponent";

class App extends React.Component {
  render() {
    return (
      <div className="background">
        <CardComponent />
      </div>
    );
  }
}

export default App;
