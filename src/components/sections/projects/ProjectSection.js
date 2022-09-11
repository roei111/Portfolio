import { projects, openSourceProjects } from "../../../data/projectData";
import Projects from "./Projects";

const ProjectSection = () => {
  return (
    <>
      <Projects projectData={projects} title="My Projects" id="projects"/>
      <Projects projectData={openSourceProjects} title="Open Source" id="open-source"/>
    </>
  );
};

export default ProjectSection;
