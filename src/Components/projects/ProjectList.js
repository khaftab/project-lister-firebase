import React from "react";
import ProjectSummery from "./ProjectSummery";
import { Link } from "react-router-dom";

function ProjectList({ projects }) {
  return (
    <div>
      {projects &&
        projects.map((project) => (
          <Link to={`/project/${project.id}`} key={project.id}>
            <ProjectSummery project={project} />
          </Link>
        ))}
    </div>
  );
}

export default ProjectList;
