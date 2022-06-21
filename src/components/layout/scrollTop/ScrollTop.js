import React, { useState, useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Fab, Slide } from "@mui/material";
import { animateScroll as scroll } from "react-scroll";
import { useStyles } from "./ScrollTop-style";

const ScrollTop = ({ showBelow }) => {
  const classes = useStyles();
  const [show, setShow] = useState(false);

  const handleClick = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    const event = window.addEventListener(`scroll`, () => {
      //Check if the vertical scroll pixels is bigger than the showBelow pixels and show button accordingly
      if (window.scrollY > showBelow) {
        if (!show) setShow(true);
      } else {
        if (show) setShow(false);
      }
    });
    return () => window.removeEventListener(`scroll`, event);
  });

  return (
    <div className={classes.wrapperDiv}>
      <Slide direction="up" in={show} mountOnEnter unmountOnExit>
        <Fab onClick={handleClick} className={classes.fab} color="primary">
          <KeyboardArrowUpIcon />
        </Fab>
      </Slide>
    </div>
  );
};
export default ScrollTop;
