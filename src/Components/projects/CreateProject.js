import React, { useRef } from "react";
import { Container, Card, Row, Col, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import { useHistory } from "react-router-dom";
function CreateProject(props) {
  const history = useHistory();
  const state = {
    title: "",
    content: "",
  };
  const titleRef = useRef();
  const contentRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    state.title = titleRef.current.value;
    state.content = contentRef.current.value;
    props.createProject(state);
    history.push("/");
  };

  useFirestoreConnect([{ collection: "projects" }]);
  const todos = useSelector((state) => state.firestore.data.projects);
  console.log(todos);

  return (
    <Container>
      <Row
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "86vh" }}
      >
        <Col md={10} sm={12}>
          <Card className="p-3">
            <Card.Title className=" text-dark" style={{ fontSize: "32px" }}>
              Create Project
            </Card.Title>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="text" ref={titleRef}></Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Content</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    ref={contentRef}
                  ></Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Create Project
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};

export default connect(null, mapDispatchToProps)(CreateProject);
