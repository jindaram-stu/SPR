import { useState } from 'react';
import RegisterDonePage from './pages/RegisterDonePage/RegisterDonePage';
import RegisterPage from './pages/RegisterPage/RegisterPage.js'

function App() {

  const [registerDone, setRegisterDone] = useState(false);

  return (
    <div className="App">
      { registerDone ? <RegisterDonePage/> : <RegisterPage setRegisterDone={setRegisterDone}/>}
    </div>
  );
}

export default App;
