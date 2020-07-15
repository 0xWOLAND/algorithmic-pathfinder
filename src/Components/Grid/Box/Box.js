import React, { Component } from "react";
import "./Box.css";
import { updateStart, updateEnd, getStart, getEnd } from "../../../Helper/Algo";
class Box extends Component {
  constructor(props) {
    super(props);
  }

  changeBackground(e) {
    var b = document.getElementById("BuildWalls");
    var ele = e.target.id.split("-");
    ele[0] = parseInt(ele[0]);
    ele[1] = parseInt(ele[1]);
    var color = document.getElementById("" + ele[0] + "-" + ele[1]).style
      .backgroundColor;
    var num = document.getElementById("num");
    var pxl = 0;
    if (num == null) {
      pxl = 1;
    } else {
      pxl = parseInt(num.innerText);
    }
    if (pxl % 2 == 0) {
      for (var r = ele[0] - pxl + 1; r <= ele[0]; r++) {
        for (var c = ele[1] - pxl + 1; c <= ele[1]; c++) {
          var blk = document.getElementById("" + r + "-" + c);
          if (
            blk != null &&
            blk.className != "start" &&
            blk.className != "end"
          ) {
            if (b.className.includes("active")) {
              blk.className = "wall";
            } else {
              blk.className = "box_ele";
            }
          }
        }
      }
    } else {
      var width = (pxl - 1) / 2;
      for (var r = ele[0] - width; r <= ele[0] + width; r++) {
        for (var c = ele[1] - width; c <= ele[1] + width; c++) {
          var blk = document.getElementById("" + r + "-" + c);
          if (
            blk != null &&
            blk.className != "start" &&
            blk.className != "end"
          ) {
            if (b.className.includes("active")) {
              blk.className = "wall";
            } else {
              blk.className = "box_ele";
            }
          }
        }
      }
    }
  }

  handleOnClick(e) {
    var ele = e.target.id.split("-");
    ele[0] = parseInt(ele[0]);
    ele[1] = parseInt(ele[1]);
    if (document.getElementById("createStart").active == true) {
      updateStart(ele[0], ele[1]);
      e.target.className = "start";
      document.getElementById("createStart").active = false;
    } else if (document.getElementById("createEnd").active == true) {
      updateEnd(ele[0], ele[1]);
      e.target.className = "end";
      document.getElementById("createEnd").active = false;
    } else {
      var color = document.getElementById("" + ele[0] + "-" + ele[1]).style
        .backgroundColor;
      var num = document.getElementById("num");
      var pxl = 0;
      if (num == null) {
        pxl = 1;
      } else {
        pxl = parseInt(num.innerText);
      }
      if (pxl % 2 == 0) {
        for (var r = ele[0] - pxl + 1; r <= ele[0]; r++) {
          for (var c = ele[1] - pxl + 1; c <= ele[1]; c++) {
            var blk = document.getElementById("" + r + "-" + c);
            if (
              blk != null &&
              blk.className != "start" &&
              blk.className != "end"
            ) {
              if (blk.className == "wall") {
                blk.className = "box_ele";
              } else {
                blk.className = "wall";
              }
            }
          }
        }
      } else {
        var width = (pxl - 1) / 2;
        for (var r = ele[0] - width; r <= ele[0] + width; r++) {
          for (var c = ele[1] - width; c <= ele[1] + width; c++) {
            var blk = document.getElementById("" + r + "-" + c);
            console.log(color);
            if (
              blk != null &&
              blk.className != "start" &&
              blk.className != "end"
            ) {
              if (blk.className == "wall") {
                blk.className = "box_ele";
              } else {
                blk.className = "wall";
              }
            }
          }
        }
      }
    }
    e.preventDefault();
  }

  moveSelf(e) {
    console.log(e.target);
    e.preventDefault();
  }

  render() {
    if (this.props.className != null) {
      return (
        <td
          onDragOver={this.changeBackground}
          onDragOverCapture={(e) => {
            e.preventDefault();
          }}
          onClick={this.handleOnClick}
          className={this.props.className}
          id={this.props.id}
        ></td>
      );
    } else {
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
}

export default Box;
