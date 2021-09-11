import React, { useState, useEffect, Fragment } from "react";
import "./styles.css";
import { Dispatcher } from "flux";
import { EventEmitter } from "flux";
import { Button, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// let items = ["A", "B", "C"];

function HandleAdd() {
  const [task, setTask] = useState([]);
  const [x, Setx] = useState();
  const handleCreate = (e) => {
    e.preventDefault();
    if (!e.target.value) return;
    Setx(e.target.value);
    console.log(x);
  };
  const addTodo = () => {
    const newTask = [...task, x];
    console.log(task);
    setTask(newTask);
  };
  return (
    <div>
      <input onChange={handleCreate}></input>
      <button onClick={addTodo}>add</button>
      <div>
        {task.map((item, index) => (
          <ul>
            <li>
              <p>
                {index}- <strong>{item}</strong>
              </p>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>
          <b>Add Todo</b>
        </Form.Label>
        <Form.Control
          type="text"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add new todo"
        />
      </Form.Group>
      <Button variant="primary mb-3" type="submit">
        Submit
      </Button>
    </Form>
  );
}
class App extends React.Component {
  render() {
    return (
      <Fragment>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Nunito&family=Open+Sans&family=Roboto&family=Roboto+Slab&family=Work+Sans&display=swap"
          rel="stylesheet"
        />
        <div>
          <h2 className="center">
            <u className="center">To Do App</u>
          </h2>
        </div>
        <div className="justify">
          <p>Create Task &nbsp;</p>
          <HandleAdd />
        </div>
      </Fragment>
    );
  }
}
export default App;
