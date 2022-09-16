import ThreeJSModel from "../../ThreeJS/ThreeJSModel";
import AnimationName from "./animationName/AnimationName";
import { Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Icons from "../../icons/Icons";
import { useStyles } from "./Home-style";
import HomeButtons from "./homeButtons/HomeButtons";

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
          className={classes.text}
        >
          Full-Stack Web Developer
        </Typography>
        <HomeButtons />
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
