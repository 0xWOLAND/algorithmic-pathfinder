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
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    height: 300,
  },
});

function valuetext(value) {
  return `${value}px`;
}

const marks = [
  {
    value: 1,
    label: '1px',
  },
  {
    value: 2,
    label: '2px',
  }, 
  {
    value: 3,
    label: '3px',
  },
  {
    value: 4,
    label: '4px',
  },
  {
    value: 5,
    label: '5px',
  },
];

export default function VerticalSlider() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Slider
          orientation="vertical"
          defaultValue={1}
          aria-labelledby="vertical-slider"
          getAriaValueText={valuetext}
          marks={marks}
          onChange={(e) => console.log(e.target.value)}
          max={5}
          min={1}
        />
      </div>
    </React.Fragment>
  );
}