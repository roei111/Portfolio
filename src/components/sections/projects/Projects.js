import { Container, Typography, Divider } from "@mui/material";
import ProjectCard from "./projectCard/ProjectCard";
import { useStyles } from "./Projects-style";

const Projects = (props) => {
  const classes = useStyles();
  const { projectData, title, id } = props;
  return (
    <Container id={id}>
      <Divider variant="middle" style={{ margin: "1rem" }} />
      <Typography className={classes.title} component="h2">
        {title}
      </Typography>
      {projectData.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </Container>
  );
};

export default Projects;
