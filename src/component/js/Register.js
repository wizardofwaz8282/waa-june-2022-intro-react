import { useState } from "react";
import '../css/all.css'


export default function Register(){
    const initialState={userName:'',password:'',role:''}
    let [saveRegistration, setSaveRegistration]=useState(initialState);
    // let [getUserName, setUserName]=useState('');
    // let [getPassword, setPassword]=useState('');
    // let [getRole, setRole]=useState('');

    const setChanges = (event)=>{
        const copyState={...saveRegistration};
        copyState[event.target.name]=event.target.value;
        setSaveRegistration(copyState);
    }

    const clickChange=(event)=>{
        alert("New User Created")
    }

    return(
        <div className="regiPage">
            <header className="header">
                <h1>Sign Up</h1>
            </header>
            <form>
                <fieldset className="loginForm">
                <legend>Sign Up</legend>
                    <label/>Username:
                    <input type="text" name="userName" onChange={(event)=>{setChanges(event)}}/>
                    <label/>Password:
                    <input type="password" name="password" onChange={(event)=>{setChanges(event)}}/>
                    <label>Role:</label><br/>
                    <select>
                        <option>~Select A Role~</option>
                        <option>User</option>
                        <option>Admin</option>
                    </select>
                    <button type="submit" onClick={(event)=>{clickChange(event)}}>Sign Up!</button>
                </fieldset>
            </form>
            <div className="usrCr"><h1>{saveRegistration.userName} {saveRegistration.password} {saveRegistration.role.valueOf}</h1></div>
        </div>
    )

}