
import { Project } from './Components/Project'

import { FormCom } from './Components/form'
import { useState } from 'react';


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

    </>
  );
}

export default App;
