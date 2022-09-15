import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useStyles } from "./HomeButtons-style";

const buttonVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: { ease: "easeOut", delay: 2, duration: 1.5 },
  },
};

const buttons = [
  { link: "projects", text: "My Projects" },
  { link: "experience", text: "Work Experience" },
];

const HomeButtons = () => {
  const classes = useStyles();

  return (
    <motion.div className={classes.homeButtonsWrapper}>
      {buttons.map((btn) => (
        <Button
          key={btn.link}
          variant="contained"
          className={classes.homeButton}
          component={motion.div}
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          <Link
            to={btn.link}
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            {btn.text}
          </Link>
        </Button>
      ))}
    </motion.div>
  );
};

export default HomeButtons;
