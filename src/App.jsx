import { useEffect, useState } from 'react';
import './App.css';
import Auth from './components/Auth/Auth';
import DisplayBeers from './components/DisplayBeers/DisplayBeers';

function App() {

  const [ sessionToken, setSessionToken ] = useState(undefined)

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"))
    }
  })

  const updateLocalStorage = newToken => {
    localStorage.setItem("token", newToken)
    setSessionToken(newToken)
  }

  // Logout button function
  const clearLocalStorage = () => {
    localStorage.clear()
    setSessionToken(undefined)
  }

  const handleView = () => {
    return sessionToken == undefined
      ? <Auth updateLocalStorage={updateLocalStorage} />
      : <DisplayBeers sessionToken={sessionToken} />
  }

  return (
    <>
    <button onClick={clearLocalStorage}>Logout</button>
    {handleView()}
    </>
  );
}

export default App;
