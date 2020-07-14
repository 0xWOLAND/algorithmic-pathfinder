// import React from "react";
// import ReactDOM from "react-dom";
// import Draggable from "react-draggable";
// import DiscreteSlider from "../DiscreteSlider/DiscreteSlider";
// import "./Draggable.css";
// import { Hidden } from "@material-ui/core";

// class App extends React.Component {
//   state = {
//     activeDrags: 0,
//     deltaPosition: {
//       x: 0,
//       y: 0,
//     },
//     controlledPosition: {
//       x: -400,
//       y: 200,
//     },
//   };

//   handleDrag = (e, ui) => {
//     const { x, y } = this.state.deltaPosition;
//     this.setState({
//       deltaPosition: {
//         x: x + ui.deltaX,
//         y: y + ui.deltaY,
//       },
//     });
//   };

//   onStart = () => {
//     this.setState({ activeDrags: ++this.state.activeDrags });
//   };

//   onStop = () => {
//     this.setState({ activeDrags: --this.state.activeDrags });
//   };

//   // For controlled component
//   adjustXPos = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     const { x, y } = this.state.controlledPosition;
//     this.setState({ controlledPosition: { x: x - 10, y } });
//   };

//   adjustYPos = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     const { controlledPosition } = this.state;
//     const { x, y } = controlledPosition;
//     this.setState({ controlledPosition: { x, y: y - 10 } });
//   };

//   onControlledDrag = (e, position) => {
//     const { x, y } = position;
//     this.setState({ controlledPosition: { x, y } });
//   };

//   onControlledDragStop = (e, position) => {
//     this.onControlledDrag(e, position);
//     this.onStop();
//   };

//   render() {
//     const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
//     const { deltaPosition, controlledPosition } = this.state;
//     return (

//         <Draggable style={{position: "absolute" }} bounds="parent" handle="strong" {...dragHandlers}>
//           <div className="box no-cursor" style={{ backgroundColor: "#f7cac9" }}>
//             <strong className="cursor">
//               <div>Drag here</div>
//             </strong>
//             <DiscreteSlider />
//           </div>
//         </Draggable>
//     );
//   }
// }

// class RemWrapper extends React.Component {
//   // PropTypes is not available in this environment, but here they are.
//   // static propTypes = {
//   //   style: PropTypes.shape({
//   //     transform: PropTypes.string.isRequired
//   //   }),
//   //   children: PropTypes.node.isRequired,
//   //   remBaseline: PropTypes.number,
//   // }

//   translateTransformToRem(transform, remBaseline = 16) {
//     const convertedValues = transform
//       .replace("translate(", "")
//       .replace(")", "")
//       .split(",")
//       .map((px) => px.replace("px", ""))
//       .map((px) => parseInt(px, 10) / remBaseline)
//       .map((x) => `${x}rem`);
//     const [x, y] = convertedValues;

//     return `translate(${x}, ${y})`;
//   }

//   render() {
//     const { children, remBaseline = 16, style } = this.props;
//     const child = React.Children.only(children);

//     const editedStyle = {
//       ...child.props.style,
//       ...style,
//       transform: this.translateTransformToRem(style.transform, remBaseline),
//     };

//     return React.cloneElement(child, {
//       ...child.props,
//       ...this.props,
//       style: editedStyle,
//     });
//   }
// }

// export default App;
import React, { useState } from "react";
import RubberSlider from "@shwilliam/react-rubber-slider";

import "@shwilliam/react-rubber-slider/dist/styles.css";
import "./Draggable.css";

export default function App() {
  const [value, setValue] = useState(1);

  return (
    <div className="app">
      <h1 className="title">Brush Width</h1>
      <RubberSlider
        width={250}
        value={value}
        onChange={setValue}
        min={1}
        id="brush-width"
        max={5}
      />
      <p className="rating-value" id="num">{value}</p>
    </div>
  );
}
