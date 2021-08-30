import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input } from "reactstrap";

import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

toast.configure();
export const AddUserPage = () => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const { addUser } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: uuid(),
      name,
      url,
      point:0
    };
    addUser(newUser);
    history.push("/");
    notify.call();
  };

  const onChange = (e) => {
    setName(e.target.value);
  };

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const notify = () => {
    toast.success(name + " added");
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Link to="/" className="return-to-list">
          ← Return to List
        </Link>
        <h2 className="add-user-baslik">Add New Link</h2>
        <Label className="add-user-input">Link Name:</Label>
        <Input
          type="text"
          value={name}
          onChange={onChange}
          name="name"
          placeholder="MDN"
          required
        ></Input>

        <Label className="add-user-input2">Link URL:</Label>
        <Input
          type="text"
          value={url}
          onChange={handleChange}
          name="url"
          placeholder="https://developer.mozilla.org"
          required
        ></Input>
      </FormGroup>
      <button class="add-user-button" type="submit">
        ADD
      </button>
      <Link to="/" className="btn btn-light add-user-button2">
        CANCEL
      </Link>
    </Form>
  );
};
