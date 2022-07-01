import React from "react";

function Login(obj){
    return(
        <form>
        <label>
          <p>Username</p>
          <input type="texusert" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    )
}
export default Login;