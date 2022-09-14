import { Typography, Card, CardContent, Chip } from "@mui/material";
import CardButtons from "./CardButtons";
import MediaCarousel from "../../../layout/carousel/MediaCarousel";
import { useStyles } from "./ProjectCard-style";

const ProjectCard = (props) => {
  const classes = useStyles();
  const { project } = props;
  return (
    <Card className={classes.card} elevation={15}>
      <MediaCarousel project={project} />
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
