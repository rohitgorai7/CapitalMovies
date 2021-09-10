import {React, useEffect, useState} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import fire from './components/fire';
import './App.css';
import Favourites from './components/favourites.component';
import Latest from './components/latest.component';
import Login from './components/login.component';
import Discover from './components/discover.component';
import Header from './components/header';
import SimpleBottomNavigation from './components/navbar.component';
import { Container } from '@material-ui/core';
import RingLoader from "react-spinners/RingLoader";

const App = () => {
  const [user, setUser] = useState('');
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError,setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);
  const [loading, setLoading] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
    setUser('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code){
          case "auth/invalid-email":
            case "auth/user-disabled":
              case "auth/user-not-found":
                setEmailError(err.message);
                break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
        
  };


  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code){
          case "auth/invalid-email-already-in-use":
            case "auth/invalid-email":
              setEmailError(err.message);
                break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    clearInputs();
    fire.auth().signOut();
  };

  

  useEffect(() => {
    const authListener = () => {
      fire.auth().onAuthStateChanged(user => {
        if(user){
          clearInputs();
          setUser(user);
        }
        else{
          setUser("");
        }
      })
    };
    authListener();
    setLoading(true)
    setTimeout(() =>{
      setLoading(false)
    }, 500)
  },[]);

  const Discoverpage = () => {
    return(
      <Discover user={user} fav={false}  />
    )
  }

  const Latestpage = () => {
    return(
      <Latest user={user} fav={false} />
    )
  }

  const Favouritespage = () => {
    return(
      <Favourites user={user} fav={true} />
    )
  }

  return (        
        
    <BrowserRouter>
    <Header/>
            
        <div className="app">
        {
          loading ? 
          <div className="mx-auto d-flex justify-content-center align-middle">            
            <RingLoader            
              size={250}
              color={"#5989C2"}
              loading={loading}
            />
          </div>

          :
          
          (
          <Container>
            <Switch>
              <Route path="/discover" component={Discoverpage} exact/>
              <Route path="/discover/favourites" component={Favouritespage} />
              <Route path="/discover/latest" component={Latestpage} />
              {
                !user ? (
                  <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin} handleSignup={handleSignup} handleLogout={handleLogout} hasAccount={hasAccount} setHasAccount={setHasAccount} emailError={emailError} passwordError={passwordError} />            
                                                
                ) : (
                  <Favouritespage />
                )
              }
            </Switch>
          </Container>
          )
        }            
        </div>
            
    <SimpleBottomNavigation user={user} handleLogin={handleLogin} handleLogout={handleLogout} hasAccount={hasAccount} setHasAccount={setHasAccount} />
  </BrowserRouter>

      
     
  );
}


export default App;
