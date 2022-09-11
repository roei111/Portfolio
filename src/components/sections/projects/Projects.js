import { Container, Typography, Divider } from "@mui/material";
import ProjectCard from "./projectCard/ProjectCard";
import '../../../index.css';

const Projects = (props) => {
  const { projectData, title, id } = props;
  return (
    <Container id={id}>
      <Divider variant="middle" style={{ margin: "1rem" }} />
      <Typography className="title" component="h2">
        {title}
      </Typography>
      {projectData.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </Container>
  );
};

export default Projects;
