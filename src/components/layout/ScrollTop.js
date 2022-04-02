import React, { useState, useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Button, Slide } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  wrapperDiv: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonStyle: {
    display: "flex",
    textAlign: "center",
    position: "fixed",
    bottom: "2vh",
    borderRadius: "10px",
    backgroundColor: "#D2042D",
    "&:hover": {
      backgroundColor: "#b00024",
    },
  },
});

const ScrollTop = ({ showBelow }) => {
  const classes = useStyles();
  const [show, setShow] = useState(false);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: `smooth` });
  };

  useEffect(() => {
    const event = window.addEventListener(`scroll`, () => {
      console.log(window.scrollY)
      //Check if the vertical scroll pixels is bigger than the showBelow pixels and show button accordingly
      if (window.scrollY > showBelow) {
        if (!show) setShow(true);
      } else {
        if (show) setShow(false);
      }
    });
    return () => window.removeEventListener(`scroll`, event);
    // setShow(true)
  },[]);

  return (
    <div className={classes.wrapperDiv}>
      <Slide direction="up" in={show} mountOnEnter unmountOnExit>
        <Button
          onClick={handleClick}
          className={classes.buttonStyle}
          variant="contained"
          aria-label="to top"
          startIcon={<KeyboardArrowUpIcon />}
          endIcon={<KeyboardArrowUpIcon />}
        >
          Scroll Top
        </Button>
      </Slide>
    </div>
  );
};
export default ScrollTop;
