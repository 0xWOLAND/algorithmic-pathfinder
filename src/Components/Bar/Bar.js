import React, { useState } from "react";
import Emoji from "../../Helper/Emoji.js";
import Draggable from "../Draggable/Draggable";
import {
  dfs,
  bfs,
  dijkstra,
  bellmanFord,
  aStar,
  floydWarshall,
  johnson,
  viterbi,
} from "../../Helper/Algo.js";

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
  var algo = "";
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Algorithm Visualizer</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item
              as="button"
              onClick={function (e) {
                algo = "dfs";
              }}
            >
              Depth-First Search
            </NavDropdown.Item>
            <NavDropdown.Item
              as="button"
              onClick={function (e) {
                algo = "bfs";
              }}
            >
              Breadth-First Search
            </NavDropdown.Item>
            <NavDropdown.Item
              as="button"
              onClick={function (e) {
                algo = "dijkstra";
              }}
            >
              Dijkstra
            </NavDropdown.Item>
            <NavDropdown.Item
              as="button"
              onClick={function (e) {
                algo = "bellmanFord";
              }}
            >
              Bellman-Ford
            </NavDropdown.Item>
            <NavDropdown.Item
              as="button"
              onClick={function (e) {
                algo = "aStar";
              }}
            >
              A* Search
            </NavDropdown.Item>
            <NavDropdown.Item
              as="button"
              onClick={function (e) {
                algo = "floydWarshall";
              }}
            >
              Floyd-Warshall
            </NavDropdown.Item>
            <NavDropdown.Item
              as="button"
              onClick={function (e) {
                algo = "johnson";
              }}
            >
              Johnson
            </NavDropdown.Item>
            <NavDropdown.Item
              as="button"
              onClick={function (e) {
                algo = "viterbi";
              }}
            >
              Viterbi
            </NavDropdown.Item>
          </NavDropdown>
          <Button
            variant="primary"
            onClick={function (e) {
              vis(algo);
            }}
          >
            Visualize!
          </Button>{" "}
        </Nav>
        <Nav>
          <NavDropdown title="Brush Width" id="brush-width">
            <Draggable />
          </NavDropdown>
          <ButtonGroup
            toggle
            className="mb-2"
            style={{ marginRight: "20px", marginLeft: "20px" }}
          >
            <Button
              variant="primary"
              size="sm"
              id="createStart"
              onClick={newStart}
            >
              Create Start Node
            </Button>
            <Button
              variant="secondary"
              size="sm"
              id="createEnd"
              onClick={newEnd}
            >
              Create End Node
            </Button>
          </ButtonGroup>

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
function vis(algo) {
  if (algo == "dfs") {
    dfs();
  } else if (algo == "bfs") {
    bfs();
  } else if (algo == "dijkstra") {
    dijkstra();
  } else if (algo == "bellmanFord") {
    bellmanFord();
  } else if (algo == "aStar") {
    aStar();
  } else if (algo == "floydWarshall") {
    floydWarshall();
  } else if (algo == "johnson") {
    johnson();
  } else if (algo == "viterbi") {
    viterbi();
  } else {
    alert("You forgot to pick an algorithm ;)");
  }
}
var tick = setInterval(itr, 12);
var c = 1;
var toggle = false;
function itr() {
  if (toggle) {
    if (c === 127) {
      clearInterval(tick);
      toggle = false;
      c = 1;
    }
    for (var r = 1; r <= 58; r++) {
      var ele = document.getElementById("" + r + "-" + c);
      if (
        ele != null &&
        !(ele.className === "start" || ele.className === "end")
      ) {
        ele.className = "box_ele";
      }
    }
    c++;
  }
}

function stop() {
  clearInterval(tick);
}

function reset() {
  tick = setInterval(itr, 12);
  toggle = true;
}
// for (var r = 1; r <= 58; r++) {
//   for (var c = 1; c <= 126; c++) {

function newStart(e) {
  for (var r = 1; r <= 58; r++) {
    for (var c = 1; c <= 126; c++) {
      if (document.getElementById("" + r + "-" + c).className === "start") {
        document.getElementById("" + r + "-" + c).className = "box_ele";
      }
    }
  }
  e.target.active = true;
}

function newEnd(e) {
  for (var r = 1; r <= 58; r++) {
    for (var c = 1; c <= 126; c++) {
      if (document.getElementById("" + r + "-" + c).className === "end") {
        document.getElementById("" + r + "-" + c).className = "box_ele";
      }
    }
  }
  e.target.active = true;
}

export default Bar;
