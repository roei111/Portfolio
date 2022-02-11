import ThreeJSModel from "./ThreeJS/ThreeJSModel";
import AnimationName from "./AnimationName";
import { Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { motion } from "framer-motion";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import ScrollDownArrows from "./ui/ScrollDownArrows";

const useStyles = makeStyles((theme) => ({
  container: {
      display: "flex !important",
      flexDirection: "column",
      alignItems: "center",
    //   width: "90vw",
    //   margin: "0 auto"
    width: "100%",
  },
  text: {
    padding: "1rem",
    alignSelf: "flex-start"
  },
  downArrow: {
    // position: "absolute",
    // left: "50%",
    // top: "50%",
    // transform: "translate(-50%, -50%)",
    fontSize: "7em !important",
  },
}));

const textVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: "0",
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <ThreeJSModel />
      <Container className={classes.container}>
        <AnimationName />
        <Typography
          component={motion.div}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          variant="h5"
          color="#53c1c0"
          className={classes.text}
        >
          Full-Stack Web Developer
        </Typography>
        {/* <KeyboardDoubleArrowDownIcon className={classes.downArrow} /> */}
        <ScrollDownArrows/>
      </Container>
    </>
  );
};

export default Home;
