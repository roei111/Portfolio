import { Container, Typography, Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import projects from "../../../data/projectData";
import ProjectCard from "./ProjectCard";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "2rem !important",
    fontWeight: "700 !important",
    textAlign: "center",
    marginBottom: "1rem !important"
  },
}));

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
