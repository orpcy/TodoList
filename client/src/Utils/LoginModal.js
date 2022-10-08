import React from "react";
import { Button, Modal, Form } from "react-bootstrap";

const LoginModal = (props) => {
  const { show, handleClose, email, password, handleChange, loginUser } = props;

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
              className="mb-3"
              type="email"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={handleChange}
              autoFocus
            />

            <Form.Control
              className="mb-3"
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={loginUser}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LoginModal;
