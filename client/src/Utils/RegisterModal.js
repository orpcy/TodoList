import React from "react";
import { Button, Modal, Form } from "react-bootstrap";

const RegisterModal = (props) => {
  const {
    show,
    handleClose,
    username,
    email,
    password,
    handleChange,
    register,
  } = props;

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Sign up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
              className="mb-3"
              type="text"
              placeholder="Enter Username"
              name="username"
              value={username}
              onChange={handleChange}
            />

            <Form.Control
              className="mb-3"
              type="email"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={handleChange}
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
          <Button variant="primary" onClick={register}>
            Sign up
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RegisterModal;
