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
}));

const ProjectCard = (props) => {
  const classes = useStyles();
  const { project } = props;
  return (
    <Card sx={{ maxWidth: 345, margin: "1rem auto" }} elevation={15}>
      <ImageCarousel images={project.img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
      </CardContent>
      <div className={classes.allChips}>
        {project.tech.map((tech, index) => (
          <Chip className={classes.chip} label={tech} key={index} />
        ))}
      </div>
      <CardButtons links={project.links} />
    </Card>
  );
};

export default ProjectCard;
