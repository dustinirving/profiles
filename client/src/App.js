import React from "react";
import "./App.css";
import Box from "./components/Box";
import { Container } from "reactstrap";

class App extends React.Component {
  state = {
    username: null,
    password: null,
  };

  render() {
    return (
      <div className="background">
        <Container>
          <Box />
        </Container>
      </div>
    );
  }
}

export default App;
