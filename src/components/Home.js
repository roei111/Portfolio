import ThreeJSModel from "./ThreeJS/ThreeJSModel";
import AnimationName from "./AnimationName";
import { Container, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import DownloadIcon from "@mui/icons-material/Download";

const useStyles = makeStyles((theme) => ({
  home: {
    height: "calc(100vh - 70px)",
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

  icons: {
    display: "flex",
    width: "55%",
    justifyContent: "space-between",
    alignSelf: "flex-start",
    paddingInline: "1rem",
    marginTop: "1rem",
    "& svg": {
      color: [theme.palette.text.primary],
      paddingLeft: "0",
      "&:hover": {
        cursor: "pointer",
        color: [theme.palette.primary.main],
        transition: "all 0.2s ease-in-out",
      },
    },
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
    transition: { type: "spring", stiffness: 100, delay: 2, duration: 3 }
  },
};
const buttonVariants2 = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: { type: "spring", stiffness: 100, delay: 2.5  }
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
    <section className={classes.home}>
      <ThreeJSModel />
      <Container className={classes.container}>
        <AnimationName {...props} />
        <Typography
          component={motion.div}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          color="#53c1c0"
          className={classes.text}
        >
          Full-Stack Web Developer
        </Typography>
        <motion.div className={classes.homeButtonsWrapper}>
          <Button
            variant="contained"
            className={classes.homeButton}
            component={motion.button}
            variants={buttonVariants1}
            initial="hidden"
            animate="visible"
          >
            My Projects
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
          <a
            href="https://github.com/roei111"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon fontSize="large" />
          </a>
          <a
            href="https://www.linkedin.com/in/roei-yaacobi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon fontSize="large" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCvhwvtUtrh7WOL_VNyp2E4Q"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTubeIcon fontSize="large" />
          </a>
        </motion.div>
      </Container>
    </section>
  );
};

export default Home;
