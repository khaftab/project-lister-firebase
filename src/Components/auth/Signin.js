import React, { useState } from "react";
import { Container, Card, Row, Col, Form, Button } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authAction";

function Signin({ signIn, authError }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn({ email, password });
  };
  return (
    <Container>
      <Row
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "86vh" }}
      >
        <Col md={5} sm={12}>
          <Card className="p-3">
            <Card.Title
              className="text-center text-dark"
              style={{ fontSize: "32px" }}
            >
              Sign In
            </Card.Title>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
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
                  Sign In
                </Button>
              </Form>
              {/* {authError && (
                <p className="text-danger text-center mt-3">Login Failed</p>
              )} */}
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
    signIn: (credentials) => dispatch(signIn(credentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
