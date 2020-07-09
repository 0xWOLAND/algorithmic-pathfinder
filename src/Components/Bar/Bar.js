import React, { useState } from "react";
import Emoji from "../../Helper/Emoji.js";
import Draggable from "../Draggable/Draggable";

import Slider from "@material-ui/core/Slider";

import {
  Navbar,
  Nav,
  NavDropdown,
  ButtonGroup,
  ToggleButton,
  Button,
} from "react-bootstrap";
function Bar(props) {
  console.log(props);
  const [checked, setChecked] = useState(false);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Brush Width" id="brush-width">
            <Draggable />
          </NavDropdown>
        </Nav>
        <Nav>
          <ButtonGroup toggle className="mb-2">
            <Button variant="danger" size="sm" id="stop" onClick={stop}>
              Stop
            </Button>
            <Button variant="warning" size="sm" id="reset" onClick={reset}>
              Reset Board
            </Button>
            <ToggleButton
              type="checkbox"
              variant="light"
              checked={!checked}
              value="1"
              onChange={(e) => setChecked(!e.currentTarget.checked)}
              id="BuildWalls"
            >
              <Emoji symbol="🏗️" label="Build Walls" />
            </ToggleButton>
            <ToggleButton
              type="checkbox"
              variant="light"
              checked={checked}
              value="1"
              onChange={(e) => setChecked(e.currentTarget.checked)}
              id="DestroyWalls"
            >
              <Emoji symbol="🥊" label="Destroy Walls" />
            </ToggleButton>
          </ButtonGroup>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
var tick = setInterval(itr, 12);
var r = 1;
var c = 1;
var toggle = false;
function itr() {
  if (toggle) {
    if (c == 127) {
      clearInterval(tick);
    }
    for (var r = 1; r <= 58; r++) {
      var ele = document.getElementById("" + r + "-" + c);
      if (ele != null) {
        ele.style.backgroundColor = "white";
      }
    }
    c++;
  }
}
function stop() {
  clearInterval(tick);
}
function reset() {
  toggle = true;
}
// for (var r = 1; r <= 58; r++) {
//   for (var c = 1; c <= 126; c++) {

export default Bar;
