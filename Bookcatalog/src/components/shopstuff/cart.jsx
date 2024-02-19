import React,{useContext} from "react";
import { Shoppycontext } from "./Shoppycontext";
import { books } from "../books";
import { cartbooks } from "./cart-books";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
//this was partly based on a YouTube tutorial

//setting up the consts
const {cartbooks, gettotalbooks, checkmeout} = useContext(Shoppycontext);
const total = gettotalbooks();
const stupidnavi = useNavigate();
//now the return
return (
<div className="cart">
<div><h1>THIS IS YOUR CART SCHNITT!</h1>
</div>

<div className = "bookcart">
{books.map((books) => {
//checking to see if there are any books in the cart, then returning the data
if (cartbooks[books.id] !==0){
    return <cartbooks data = {books} />;
}
})}
</div>

//handling the checkout
{total > 0 ? (
<div className = "checkmeout">
<p>Subtotal:${total}</p>
<button onClick = {() => stupidnavi("/")}>Keep spending that dough!</button>
<button onClick ={() =>{
checkmeout();
stupidnavi("/checkmeout");    
}}
>
{""}
Checkmeout{""}
</button>
</div>
):(
    <h1>Your Shopping Cart is Empty. Please rectify this</h1>
)}
</div>
);
};     

 

 

  