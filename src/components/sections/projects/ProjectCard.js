import { Typography, Card, CardContent, Chip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CardButtons from "./CardButtons";
import ImageCarousel from "../../layout/ImageCarousel";

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: "0.1rem",
    color: "white",
  },
  allChips: {
    margin: "0.5rem 0.3rem",
  },
  card: {
    margin: "2rem auto",
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      flexDirection: "row-reverse",
    },
  },
  contentWrapper: {
    [theme.breakpoints.only("md")]:{
      width: "70%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "400px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
  },
  // bottomItems: {
  //   [theme.breakpoints.up("md")]: {
  //     marginBottom: "2rem",
  //   },
  // },
}));

const ProjectCard = (props) => {
  const classes = useStyles();
  const { project } = props;
  return (
    <Card className={classes.card} elevation={15}>
      <ImageCarousel images={project.img} />
      <div className={classes.contentWrapper}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {project.description}
          </Typography>
        </CardContent>
        <div>
          <div className={classes.allChips}>
            {project.tech.map((tech, index) => (
              <Chip className={classes.chip} label={tech} key={index} />
            ))}
          </div>
          <CardButtons links={project.links} />
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
