import React from "react";
import { Form, Button, ToggleButton, InputGroup } from "react-bootstrap";

const TaskComponent = (props) => {
  const { value } = props;
  return (
    <div className="d-flex mt-3 task-component">
      <Button variant="light" className="delete-button">
        X
      </Button>
      <InputGroup.Checkbox aria-label="Checkbox for following text input" />
      <Form.Control
        aria-label="Text input with checkbox"
        value={value}
        readOnly
        className="mx-3"
      />
    </div>
  );
};

export default TaskComponent;
