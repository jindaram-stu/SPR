import axios from 'axios';
import LoadingPage from 'pages/LoadingPage/LoadingPage';
import RegisterLimitPage from 'pages/RegisterLimitPage/RegisterLimitPage';
import { useEffect, useState } from 'react';
import RegisterDonePage from './pages/RegisterDonePage/RegisterDonePage';
import RegisterPage from './pages/RegisterPage/RegisterPage.js'

function App() {
  
  const [canRegister, setCanRegister] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const [registerDone, setRegisterDone] = useState(false);

  useEffect( () => {
    axios.get("https://script.google.com/macros/s/AKfycbwZMUMfolRTm8bHUBVYVDYuO7cevAuYpGAJjLpT_7Rfi5xvt98CkLbWnLekLG8B3mt_HQ/exec?canRegister=true")
    .then((res)=> {
      console.log(res.data.canRegister);
      setCanRegister(res.data.canRegister);
      setLoaded(true);
    })
  },[])

  return (
    <div className="App">
      { loaded ? 
          canRegister ? registerDone ? <RegisterDonePage/> : <RegisterPage setRegisterDone={setRegisterDone}/> : <RegisterLimitPage/>
      : <LoadingPage/> }

    
    </div>
  );
}

export default App;
