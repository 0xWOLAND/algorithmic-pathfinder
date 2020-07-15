import React from "react";

var rows = 58;
var cols = 126;

var mat = [];

var start = [28, 41];
var curr = start;
var end = [28, 83];
var path = [];

function fill() {
  for (var t = 0; t < 7308; t++) {
    var arr = [];
    mat.push(arr);
  }
}

export function getStart() {
  return start;
}

export function getEnd() {
  return end;
}

function isWall(n) {
  var ele = numToCoord(n);
  if (
    document.getElementById("" + (ele[0] + 1) + "-" + (ele[1] + 1))
      .className === "wall"
  ) {
    return true;
  }
  return false;
}

function neighbors(r, c) {
  console.log([r,c])
  console.log("Num: " + coordToNum([r, c]));
  document.getElementById("" + (r + 1) + "-" + (c + 1)).style.background =
    "orange";
  var from = r * cols + c;
  if (r > 0) {
    var to = (r - 1) * cols + c;
    console.log("down: " + to);
    if (!isWall(to)) {
      console.log(mat);
      mat[from].push(to);
    }
  }
  if (r < (rows - 1)) {
    var to = (r + 1) * cols + c;
    console.log("up: " + to);
    if (!isWall(to)) {
      mat[from].push(to);
    }
  }
  if (c > 0) {
    var to = r * cols + (c - 1);
    console.log("left: " + to);
    if (!isWall(to)) {
      mat[from].push(to);
    }
  }
  if (c < (cols - 1)) {
    var to = r * cols + (c + 1);
    console.log("right: " + to);
    if (!isWall(to)) {
      mat[from].push(to);
    }
  }
}

function createAdjMatrix() {
  fill();
  for (var r = 0; r < rows; r++) {
    for (var c = 0; c < cols; c++) {
      neighbors(r, c);
    }
  }
}

export function updateStart(r, c) {
  start[0] = r;
  start[1] = c;
  curr = start;
}

export function updateEnd(r, c) {
  end[0] = r;
  end[1] = c;
}

export function dfs() {
  createAdjMatrix();
  var visited = new Array(7125).fill(false);
  // dfsTraversals(visited);
}

function numToCoord(num) {
  var arr = [Math.trunc(num / 126), num % 126];
  return arr;
}

function coordToNum(coord) {
  return coord[0] * cols + coord[1];
}

// var stack = [coordToNum(curr)];
// var path = [];
// while (stack.length != 0) {
//   var node = stack.pop();
//   var nodeCoord = numToCoord(node);
//   document.getElementById(
//     "" + (nodeCoord[0] + 1) + "-" + (nodeCoord[1] + 1)
//   ).className = "visited";
//   if (!visited[node]) {
//     path.push([curr[0] + 1, curr[1] + 1]);
//     visited[node] = true;
//   }
//   if (node == coordToNum(end)) {
//     return path;
//   }
//   for (var to = 0; to < mat[node].length; to++) {
//     var v = mat[node][to];
//     if (!visited[v]) {
//       stack.push(v);
//     }
//   }
// }

function highlightLocation(loc, time) {
  setTimeout(function () {
    document.getElementById("" + (loc[0] + 1) + "-" + (loc[1] + 1)).className =
      "visited";
  }, time);
}

function reconstructPath(path) {
  for (let i = 1; i < path.length; i++) {
    highlightLocation(path[i], 1000);
  }
}

function dfsTraversals(visited) {
  var stack = [];
  var path = [];
  stack.push(coordToNum(curr));
  while (stack.length > 0) {
    var node = stack.pop();
    if (coordToNum(end) == node) {
      reconstructPath(path);
      return;
    }
    if (!visited[node]) {
      path.push(numToCoord(node));
      visited[node] = true;
    }
    console.log("Node: " + node);
    console.log("Connected Nodes: " + mat[node]);
    for (var i = 0; i < mat[node].length; i++) {
      var to = mat[node][i];
      if (!visited[to]) {
        stack.push(to);
      }
    }
  }
  alert("end not found");
  return;
}

export function bfs() {
  createAdjMatrix();
}

export function dijkstra() {
  createAdjMatrix();
}

export function bellmanFord() {
  createAdjMatrix();
}

export function aStar() {
  createAdjMatrix();
}

export function floydWarshall() {
  createAdjMatrix();
}

export function johnson() {
  createAdjMatrix();
}

export function viterbi() {
  createAdjMatrix();
}
