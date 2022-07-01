import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Login from './component/Login';


function App() {
  const initialState ={ 
    logins : {username :'elaheh',password:'DANESHFAR'}
  }
  
  let [LoginState , setLoginState ] = useState(initialState);

   return(
    <div className='App'>
      {
        //<Login/>
            <Login username={Login.username} password={Login.password} />
      }
    </div>
   )
}

export default App;
