import { motion } from "framer-motion";
import { Typography, Divider } from "@mui/material";

const titleVariants = {
  hidden: () => ({
    x: -20,
    opacity: 0,
  }),
  visible: () => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  }),
};

const Title = (props) => {
  return (
    <>
      <Divider variant="middle" style={{ margin: "1rem" }} />
      <Typography
        className="title"
        component={motion.h2}
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {props.title}
      </Typography>
    </>
  );
};

export default Title;
