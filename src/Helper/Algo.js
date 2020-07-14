import React from "react";

var rows = 57;
var cols = 125;

var mat = [];

var start = [28, 41];
var curr = start;
var end = [28, 83];
var path = [];

function fill() {
  for (var t = 0; t < 7125; t++) {
    var arr = [];
    mat.push(arr);
  }
}

function neighbors(r, c) {
  var from = r * cols + c;
  if (r > 0) {
    var to = (r - 1) * cols + c;
    mat[from].push(to);
  }
  if (r < rows - 1) {
    mat[from].push((r + 1) * cols + c);
  }
  if (c > 0) {
    mat[from].push(r * cols + (c - 1));
  }
  if (c < cols - 1) {
    mat[from].push(r * cols + (c + 1));
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
  console.log("end: " + coordToNum(end));
  var path = dfsTraversals(visited);
  console.log(path);
}

function numToCoord(num) {
  var arr = [Math.trunc(num / 125), num % 125];
  return arr;
}

function coordToNum(coord) {
  return coord[0] * cols + coord[1];
}

function dfsTraversals(visited) {
  var stack = [coordToNum(curr)];
  var path = [];
  while (stack.length != 0) {
    var node = stack.pop();
    var crd = numToCoord(node);
    document.getElementById("" + (crd[0] + 1) + "-" + (crd[1] + 1)).className =
      "visited";
    if (!visited[node]) {
      path.push(numToCoord(node));
      visited[node] = true;
    }
    if (node == coordToNum(end)) {
      return path;
    }
    for (var to = 0; to < mat[node].length; to++) {
      var v = mat[node][to];
      if (!visited[v]) {
        stack.push(v);
      }
    }
  }
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
