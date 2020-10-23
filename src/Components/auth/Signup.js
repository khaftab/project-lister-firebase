import React from "react";
import { useState } from "react";
import { Container, Card, Row, Col, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authAction";

function Signup({ signUp, authError }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const handleSubmit = (e) => {
    console.log("haka");
    e.preventDefault();
    signUp({ email, password, firstName, lastName });
  };
  return (
    <Container>
      <Row
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "86vh" }}
      >
        <Col sm={12} md={9} lg={5}>
          <Card className="p-3">
            <Card.Title
              className="text-center text-dark"
              style={{ fontSize: "32px" }}
            >
              Sign Up
            </Card.Title>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Passsword</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit" block>
                  Sign Up
                </Button>
                {authError && (
                  <p className="text-danger text-center mt-3">{authError}</p>
                )}
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
