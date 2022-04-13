import React, { useState, useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Button, Slide } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { motion } from "framer-motion";

const useStyles = makeStyles({
  wrapperDiv: {
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
  },
  buttonStyle: {
    display: "flex",
    textAlign: "center",
    position: "fixed !important",
    bottom: "2vh",
    borderRadius: "10px",
    backgroundColor: "#D2042D",
    transform: "rotate(270deg) translate(50%, 50%) !important",
    "&:hover": {
      backgroundColor: "#b00024",
    },
  },
});

const buttonVariants= {
  hidden: (show) => ({
    scale: 0,
  }),
  visible: (show) => ({
    scale: show ? 1 : 0,
    transition: { type: "spring", stiffness: 100, delay: 2.5  }
  }),
};

const ScrollTop = ({ showBelow }) => {
  const classes = useStyles();
  const [show, setShow] = useState(false);

  const handleClick = () => {
    console.log("to top")
    window.scrollTo({ top: 0, behavior: `smooth` });
  };

  useEffect(() => {

    console.log("effect")
    const event = window.addEventListener(`scroll`, () => {
      // console.log(window.scrollY)
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
        {/* {console.log("showing")} */}
        <Button
          onClick={handleClick}
          className={classes.buttonStyle}
          variant="contained"
          aria-label="to top"
          startIcon={<KeyboardArrowUpIcon />}
          endIcon={<KeyboardArrowUpIcon />}
          // variants={buttonVariants}
          // initial="hidden"
          // animate="visible"
          // custom={show}
        >
          Scroll Top
        </Button>
      </Slide>
    </div>
  );
};
export default ScrollTop;