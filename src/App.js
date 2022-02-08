
import { Project } from './Components/Project'

import { FormCom } from './Components/form'
import { useState } from 'react';
import { Signup } from './Components/Signup';


function App() {
  const [isLogin, setLogin] = useState(false);
  const LoginSuccessful = () => {
    setLogin(true);
  }
  return (
    <>
      {
        isLogin ?
          <Project /> :
          <FormCom setLogin={LoginSuccessful} />

      }
      <Signup />

    </>
  );
}

export default App;
