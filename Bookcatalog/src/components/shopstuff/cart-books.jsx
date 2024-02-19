import React from "react"
import { Shoppycontext } from "./BuyBooks"
//setting up a cart
export const cartbooks = () =>

//by the way, this was partially modeled on a YouTube tutorial. Just thought you'd like to know
{ 
    //getting some props
const {title, author, shortdescription, price} = props.data;
//and the context stuf
const {cartbooks, addbooks, removebooks, updatebooks} 
= userContext(Shoppycontext);
return (
<div className = "cartstuff">
<img src = {pic} />
<div className = "title">
<p>
<b>{title}</b>
</p>
<p>
<b>{author}</b>  
</p>
<p>
<b>{shortdescription}</b>  
</p>
<p>
<b>{price}</b>  
</p>
//counting the number of books in the cart
<div className = "Countstuffer">
   
    <input value = {cartbooks[id]}
    onChange={(e) => updatebooks(Number(e.target.value), id)}
    />
    <button onClick = {() => addbooks(id)}> + </button>
    
</div>
</div>
</div>
);
};