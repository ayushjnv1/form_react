import { useEffect, useState } from "react";
import { Container } from "reactstrap";
import { CardComponet } from "./CardComponent";
export const Project = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://reqres.in/api/users?page=1")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data[0].first_name);
        //for data setting
        setUser(data.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <Container>
        {user.map((person) => {
          return (
            <CardComponet
              avatar={person.avatar}
              email={person.email}
              first_name={person.first_name}
              last_name={person.last_name}
            />
          );
        })}
      </Container>
    </>
  );
};
// avatar: "https://reqres.in/img/faces/7-image.jpg"
// email: "michael.lawson@reqres.in"
// first_name: "Michael"
// id: 7
// last_name: "Lawson"
