import ThreeJSModel from "../../ThreeJS/ThreeJSModel";
import AnimationName from "./AnimationName";
import { Container, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { motion } from "framer-motion";
import DownloadIcon from "@mui/icons-material/Download";
import Icons from "../../Icons";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  home: {
    height: "calc(100vh - 70px)",
    [theme.breakpoints.up("lg")]: {
      height: "100vh",
      display: "flex",
      flexDirection: "row-reverse",
      alignItems: "end",
      margin: "0 50px",
    },
  },
  container: {
    display: "flex !important",
    flexDirection: "column",
    height: "55%",
  },
  text: {
    padding: "1rem",
    paddingRight: "0",
    alignSelf: "flex-start",
    fontSize: "1.5rem !important",
    fontWeight: "700 !important",
  },
  homeButtonsWrapper: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "1rem",
    width: "95%",
  },
  homeButton: {
    fontWeight: "800 !important",
    letterSpacing: "0.1em !important",
    backgroundImage: "linear-gradient(to right, #42bbbb, #00c1c1)",
    "&:hover": {
      opacity: "0.85",
      transition: "all 0.2s ease-in-out",
    },
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
      duration: 3,
      ease: "easeInOut",
    },
  },
};
const buttonVariants1 = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: { type: "spring", stiffness: 100, delay: 2, duration: 3 },
  },
};
const buttonVariants2 = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: { type: "spring", stiffness: 100, delay: 2.5 },
  },
};
const iconsVariants = {
  hidden: {
    opacity: 0,
    y: "25px",
  },
  visible: {
    opacity: 1,
    y: "0",
    transition: {
      duration: 1.5,
      ease: [0.42, 0, 0.58, 1],
      delay: 2,
    },
  },
};

const Home = (props) => {
  const classes = useStyles();
  return (
    <section className={classes.home} id="home">
      <ThreeJSModel />
      <Container className={classes.container}>
        <AnimationName {...props} />
        <Typography
          component={motion.div}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          color="primary"
          className={classes.text}
        >
          Full-Stack Web Developer
        </Typography>
        <motion.div className={classes.homeButtonsWrapper}>
          <Button
            variant="contained"
            className={classes.homeButton}
            component={motion.div}
            variants={buttonVariants1}
            initial="hidden"
            animate="visible"
          >
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              My Projects
            </Link>
          </Button>
          <Button
            variant="contained"
            endIcon={<DownloadIcon />}
            className={classes.homeButton}
            component={motion.button}
            variants={buttonVariants2}
            initial="hidden"
            animate="visible"
          >
            Resume
          </Button>
        </motion.div>
        <motion.div
          className={classes.icons}
          variants={iconsVariants}
          initial="hidden"
          animate="visible"
        >
          <Icons />
        </motion.div>
      </Container>
    </section>
  );
};

export default Home;
