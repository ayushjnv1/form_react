import { Alert } from "bootstrap";
import { useReducer, useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import * as yup from "yup";

export const FormCom = (props) => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const loginConstraint = {
    setEmail: "SET_EMAIL",
    setPassword: "SET_PASSWORD",
  };
  const initalState = {
    email: "",
    password: "",
  };
  const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case loginConstraint.setEmail: {
        return { ...state, email: payload };
      }
      case loginConstraint.setPassword: {
        return { ...state, password: payload };
      }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initalState);

  const { email, password } = state;

  const clearFieldEmail = () => {
    dispatch({ type: loginConstraint.setEmail, payload: "" });
  };
  const clearFieldPassword = () => {
    dispatch({ type: loginConstraint.setPassword, payload: "" });
  };

  //onsubmit htis function call
  const submitform = (e) => {
    e.preventDefault(e);

    const schema = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().min(8).required(),
    });
    schema
      .validate({ email, password }, { abortEarly: false })
      .then((res) => {
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
          .then((res) => {
            console.log(res.status);
            res.json();
          })
          .then((res) => {
            if (res.error === "user not found") {
              alert("bad credentials");
            } else {
              props.setLogin();
            }
          })
          .catch((e) => console.log(e));
      })
      .catch((error) => {
        error.inner.forEach((e) => console.log(e.path, e.message));
      });

    console.log(e.target.elements.email.value);
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
                dispatch({
                  type: loginConstraint.setEmail,
                  payload: e.target.value,
                });
                // setEmail(e.target.value);
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
              onChange={(e) => {
                dispatch({
                  type: loginConstraint.setPassword,
                  payload: e.target.value,
                });
                // setPassword(e.target.value);
              }}
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
