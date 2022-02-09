
import { Project } from './Components/Project'

import { FormCom } from './Components/form'
import { useState } from 'react';
import { Signup } from './Components/Signup';
import { UserList } from './Components/UserList';
import { Route, Routes } from 'react-router-dom';
import { MyNavbar } from './Components/Navbar';


function App() {
  const [isLogin, setLogin] = useState(false);
  const LoginSuccessful = () => {
    setLogin(true);
  }
  return (
    <>
      {/* {
        isLogin ?
          <Project /> :
          <FormCom setLogin={LoginSuccessful} />

      } */}
      {/* <Signup />
      <UserList /> */}
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={< FormCom />} />
        <Route path="/userlist" element={<UserList />} />
      </Routes>

    </>
  );
}

export default App;
