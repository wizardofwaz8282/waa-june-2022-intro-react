import React from "react";
function Product(obj){
    return(
        <div>
        <h3>{obj.name}</h3>
        <h3>{obj.price}</h3>
        <h3>{obj.rating}</h3>
    </div>
    )
}