import React from "react";
import { Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import moment from "moment";

function ProjectDetails(props) {
  const params = useParams();
  const id = params.id;
  const project = props.project && props.project[id];

  if (props.project) {
    return (
      <Container className="mt-5 md-w-50">
        <Card>
          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <p>{project.content}</p>
          </Card.Body>
          <Card.Footer>
            <p className="text-secondary">
              {project.authorFirstName} {project.authorLastName}
            </p>
            <p className="text-secondary">
              {moment(project.createdAt.toDate()).calendar()}
            </p>
          </Card.Footer>
        </Card>
      </Container>
    );
  } else {
    return (
      <Container>
        <p className="text-center mt-5">Loading...</p>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    project: state.firestore.data.projects,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(() => ["projects"])
)(ProjectDetails);
