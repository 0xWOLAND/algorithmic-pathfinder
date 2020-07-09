// Imports
import React, { Component } from "react";
import Bar from "../Bar/Bar";
import Grid from "../Grid/Grid";
import Draggable from "../Draggable/Draggable"

class App extends Component {
  render() {
    return (
      <div>
        <Bar />
        <Grid />
      </div>
    );
  }
}
export default App;
