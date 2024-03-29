import { Container } from "@mui/material";
import ProjectCard from "./projectCard/ProjectCard";
import Title from "../../layout/Title";

const Projects = (props) => {
  const { projectData, title, id } = props;
  return (
    <Container id={id}>
      <Title title={title} />
      {projectData.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </Container>
  );
};

export default Projects;
