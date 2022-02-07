import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Container,
} from "reactstrap";

export const CardComponet = (props) => {
  return (
    <>
      <Container className="my-3">
        <Card>
          <CardBody>
            <CardTitle tag="h5">
              {props.first_name}
              {props.last_name}
            </CardTitle>
          </CardBody>
          <img alt="Card image cap" src={props.avatar} width="30%" />
          <CardBody>
            <CardText>{props.email}</CardText>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};
// avatar: "https://reqres.in/img/faces/7-image.jpg"
// email: "michael.lawson@reqres.in"
// first_name: "Michael"
// id: 7
// last_name: "Lawson"
