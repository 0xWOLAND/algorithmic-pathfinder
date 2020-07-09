import React, { Component } from "react";
import "./Box.css";
class Box extends Component {
  constructor(props) {
    super(props);
  }

  changeBackground(e) {
    var b = document.getElementById("BuildWalls");
    if (b.className.includes("active")) {
      console.log(b.className);
      e.target.style.background = "black";
    } else {
      e.target.style.background = "white";
    }
    e.preventDefault();
  }

  handleOnClick(e) {
    if (e.target.style.backgroundColor === "black") {
      e.target.style.backgroundColor = "white";
    } else {
      e.target.style.backgroundColor = "black";
      // var ele = document.getElementById(this.props.id.substring(0,1) + "-" + (parseInt(this.props.id.substring(2) - 1)));
      var ele = e.target.id.split("-");
      ele[0] = parseInt(ele[0]);
      ele[1] = parseInt(ele[1]);
    }
    e.preventDefault();
  }

  render() {
    return (
      <td
        onDragOver={this.changeBackground}
        onDragOverCapture={(e) => {
          e.preventDefault();
        }}
        onClick={this.handleOnClick}
        className="box_ele"
        id={this.props.id}
      ></td>
    );
  }
}

export default Box;
