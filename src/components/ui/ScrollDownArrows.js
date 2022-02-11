import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  arrows: {
    "& span": {
      display: "block",
      width: "30px",
      height: "30px",
      borderBottom: "5px solid #53c1c0",
      borderRight: "5px solid #53c1c0",
      transform: "rotate(45deg)",
    //   margin: "-10px",
    },
  },
}));

const ScrollDownArrows = () => {
  const classes = useStyles();
  return (
    <div className={classes.arrows}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default ScrollDownArrows;
