import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 180,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default function DiscreteSlider() {

  const classes = useStyles();
    var value = 0;
  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-small-steps" gutterBottom>
        Small steps
      </Typography>
      <Slider
        defaultValue={1}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-small-steps"
        id="brush-width"
        step={1}
        marks
        min={1}
        max={3}
        onChangeCommitted={function(e, val) {
            value = val;
            console.log(value);
        }}
        valueLabelDisplay="auto"
      />
    </div>
  );
}
