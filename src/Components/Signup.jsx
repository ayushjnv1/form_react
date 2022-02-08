// import {  } from "bootstrap";
import { type } from "@testing-library/user-event/dist/type";
import * as yup from "yup";
import { useReducer } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

export const Signup = () => {
  const initializer = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    checked: false,
  };

  const loginCredential = {
    setEmail: "SET_EMAIL",
    setPassword: "SET_PASSWORD",
    setFirstName: "SET_FIRSTNAME",
    setLastName: "SET_LASTNAME",
    setAddress: "SET_ADDRESS",
    setChecked: "SET_CHECKED",
  };

  const rendusr = (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case loginCredential.setEmail: {
        return { ...state, email: payload };
      }
      case loginCredential.setPassword: {
        return { ...state, password: payload };
      }
      case loginCredential.setFirstName: {
        return { ...state, firstName: payload };
      }
      case loginCredential.setLastName: {
        return { ...state, lastName: payload };
      }

      case loginCredential.setChecked: {
        return { ...state, checked: payload };
      }
      case loginCredential.setAddress: {
        // console.log(payload);
        return { ...state, address: payload };
      }
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(rendusr, initializer);

  // this is object create to pass validate function
  const objevalidate = {
    email: state.email,
    address: state.address,
    firstName: state.firstName,
    lastName: state.lastName,
    password: state.password,
    checked: state.checked,
  };

  const onSignup = (e) => {
    e.preventDefault(e);
    console.log("this is signup");
    const schema = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().min(8).required(),
      address: yup.string().min(4).required(),
      firstName: yup.string().min(4).required(),
      lastName: yup.string(),
      checked: yup.bool(true),
    });
    schema
      .validate(objevalidate, { abortEarly: false })
      .then((resp) => {
        console.log("this is all set");
      })
      .catch((error) => {
        console.log(error.errors);
        error.inner.forEach((e) => console.log(e.path, e.message));
      });
  };

  return (
    <>
      <Container>
        <h1>Sign Up form</h1>
        <Form
          onSubmit={(e) => {
            onSignup(e);
          }}
        >
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="Apartment, studio, or floor"
                  value={state.firstName}
                  onChange={(e) => {
                    dispatch({
                      type: loginCredential.setFirstName,
                      payload: e.target.value,
                    });
                  }}
                />
                <Button
                  onClick={(e) => {
                    dispatch({
                      type: loginCredential.setFirstName,
                      payload: "",
                    });
                  }}
                >
                  &times;
                </Button>
              </FormGroup>
              <FormGroup>
                <Label for="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Apartment, studio, or floor"
                  value={state.lastName}
                  onChange={(e) => {
                    dispatch({
                      type: loginCredential.setLastName,
                      payload: e.target.value,
                    });
                  }}
                />
                <Button
                  onClick={(e) => {
                    dispatch({
                      type: loginCredential.setLastName,
                      payload: "",
                    });
                  }}
                >
                  &times;
                </Button>
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="with a placeholder"
                  type="email"
                  value={state.email}
                  onChange={(e) => {
                    dispatch({
                      type: loginCredential.setEmail,
                      payload: e.target.value,
                    });
                  }}
                  style={{ display: "inline" }}
                />
                <Button
                  onClick={(e) => {
                    dispatch({
                      type: loginCredential.setEmail,
                      payload: "",
                    });
                  }}
                >
                  &times;
                </Button>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="password placeholder"
                  type="password"
                  value={state.password}
                  onChange={(e) => {
                    dispatch({
                      type: loginCredential.setPassword,
                      payload: e.target.value,
                    });
                  }}
                />
                <Button
                  onClick={(e) => {
                    dispatch({
                      type: loginCredential.setPassword,
                      payload: "",
                    });
                  }}
                >
                  &times;
                </Button>
              </FormGroup>
            </Col>
          </Row>

          <FormGroup>
            <Label for="exampleAddress">Address</Label>
            <Input
              id="exampleAddress"
              name="address"
              placeholder="Address"
              value={state.address}
              onChange={(e) => {
                //console.log(e.target.value);
                dispatch({
                  type: loginCredential.setAddress,
                  payload: e.target.value,
                });
              }}
            />
            <Button
              onClick={(e) => {
                dispatch({
                  type: loginCredential.setAddress,
                  payload: "",
                });
              }}
            >
              &times;
            </Button>
          </FormGroup>

          <FormGroup check>
            <Input
              id="exampleCheck"
              name="check"
              type="checkbox"
              checked={state.checked}
              onChange={(e) => {
                dispatch({
                  type: loginCredential.setChecked,
                  payload: e.target.checked,
                });
              }}
            />

            <Label check for="exampleCheck">
              Check me out
            </Label>
          </FormGroup>
          <Button type="submit">Sign in</Button>
        </Form>
      </Container>
    </>
  );
};
