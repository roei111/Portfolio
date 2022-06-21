import { Container, Typography, Divider } from "@mui/material";
import projects from "../../../data/projectData";
import ProjectCard from "./projectCard/ProjectCard";
import { useStyles } from "./Projects-style";

const Projects = () => {
  const classes = useStyles();
  return (
    <Container id="projects">
      <Divider variant="middle" style={{ margin: "1rem" }} />
      <Typography className={classes.title} component="h2">
        Projects
      </Typography>
      {projects.map((project) => (
        <ProjectCard project={project} key={project.id}/>
      ))}
    </Container>
  );
};

export default Projects;
