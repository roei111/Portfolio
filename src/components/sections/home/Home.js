import ThreeJSModel from "../../ThreeJS/ThreeJSModel";
import AnimationName from "./animationName/AnimationName";
import { Container, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import Icons from "../../icons/Icons";
import { Link } from "react-scroll";
import { useStyles } from "./Home-style";

const textVariants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
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
const buttonVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: { type: "spring", stiffness: 100, delay: 2, duration: 3 },
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
            variants={buttonVariants}
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
