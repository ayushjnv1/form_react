import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { userDataInitiate, userDataSuccess } from "../Redex/user/action";
import { CardComponent2 } from "./CardComponet2";

export const UserList = () => {
  const user = useSelector((state) => state.user);

  //use dispatch will return the dispatch function reference
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userDataInitiate());
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        // console.log(user);
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        // console.log(user);
        dispatch(userDataSuccess(data));
      })
      .catch((error) => console.log(error));
  }, []);

  // console.log(user);
  return (
    <>
      <h1>this is ayush sjhd</h1>

      {user.data.map((use) => {
        return <CardComponent2 user={use} />;
      })}
    </>
  );
};
