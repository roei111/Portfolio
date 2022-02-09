import ThreeJSModel from "./ThreeJS/ThreeJSModel";
import AnimationName from "./AnimationName";
import { Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  container: {
    //   display: "flex",
    //   flexDirection: "column",
    //   width: "90vw",
    //   margin: "0 auto"
  },
  text: {
    // margin: "0 auto !important",
  },
}));

const textVariants ={
    hidden: {
        opacity: 0,
        x: '100vw'
    },
    visible: {
        opacity: 1,
        x: '0',
        transition:{
            duration: 2, ease: "easeInOut"
        }
    }

}

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <ThreeJSModel />
      <Container className={classes.container}>
        <AnimationName />
        <Typography component={motion.div} variants={textVariants} initial="hidden" animate="visible" variant="h5" color="#53c1c0" marginLeft={1} marginTop={1} className={classes.text}>
          Full-Stack Web Developer
        </Typography>
      </Container>
    </>
  );
};

export default Home;
