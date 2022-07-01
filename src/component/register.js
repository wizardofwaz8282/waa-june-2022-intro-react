import React from "react";
function Register(obj){
    return(
        <div>
            <h3>{obj.email}</h3>
            <h3>{obj.password}</h3>
            <h3>{obj.fname}</h3>
            <h3>{obj.Lname}</h3>
        </div>
    )
}