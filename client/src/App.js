import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    username: null,
    password: null,
  };

  async componentDidMount() {
    const url = "/api/people";
    const response = await fetch(url);
    const person = await response.json();
    this.setState({ username: person[0].username });
    this.setState({ password: person[0].password });
  }
  render() {
    return (
      <div>
        <div>{this.state.username}</div>
        <div>{this.state.password}</div>
      </div>
    );
  }
}

export default App;
