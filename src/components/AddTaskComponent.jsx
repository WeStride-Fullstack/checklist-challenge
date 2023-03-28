import React from "react";
import { Form, Button } from "react-bootstrap";

const AddTaskComponent = () => {
  return (
    <div className="d-flex mt-3">
      <Button variant="light">+</Button>
      <Form.Control className="mx-3" placeholder="Add to list" />
    </div>
  );
};

export default AddTaskComponent;
