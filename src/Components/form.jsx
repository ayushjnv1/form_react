import { Alert } from "bootstrap";
import { useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";

export const FormCom = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const clearFieldEmail = () => {
    setEmail("");
  };
  const clearFieldPassword = () => {
    setPassword("");
  };

  //onsubmit htis function call
  const submitform = (e) => {
    e.preventDefault(e);
    console.log(e.target.elements.email.value);

    // data fetching from  that api
    fetch("https://reqres.in/api/login", {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify({
        email: e.target.elements.email.value,
        password: e.target.elements.password.value,
      }),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error === "user not found") {
          alert("bad credentials");
        } else {
          props.setLogin();
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <Container>
        <Form
          inline
          onSubmit={(e) => {
            submitform(e);
          }}
        >
          <FormGroup className="mb-2 me-sm-2 mb-sm-0">
            <Label className="me-sm-2 my-2" for="exampleEmail">
              Email
            </Label>
            <Input
              // id="exampleEmail"
              name="email"
              placeholder="something@idk.cool"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <Button onClick={clearFieldEmail}>&times;</Button>
          </FormGroup>
          <FormGroup className="mb-2 me-sm-2  mb-sm-0">
            <Label className="me-sm-2 my-2" for="examplePassword">
              Password
            </Label>
            <Input
              // id="examplePassword"
              name="password"
              placeholder="don't tell!"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button onClick={clearFieldPassword}>&times;</Button>
          </FormGroup>
          <Button color="success" outline className="my-2 ">
            Submit
          </Button>
          <Button color="warning" outline className="my-2 mx-3 " type="reset">
            Reset
          </Button>
        </Form>
      </Container>
    </>
  );
};
