import React from "react";
import { Card } from "react-bootstrap";
import moment from "moment";

function ProjectSummery({ project }) {
  return (
    <div>
      <Card style={{ border: "none" }}>
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
          <p>
            Posted by {project.authorFirstName} {project.authorLastName}
          </p>
          <p className="text-secondary">
            {moment(project.createdAt.toDate()).calendar()}
          </p>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProjectSummery;
