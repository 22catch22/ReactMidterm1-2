import { Shoppycontext } from "./shopstuff/BuyBooks";
import React, {useContext} from "react"
import Bestsellers from "./Bestsellers";


const {id,title,author, shortdescription, price} = props.data
const {addbooks, cartbooks} = useContext(Shoppycontext)
const bookcartcount = cartbooks[id];

export const books = (props) =>{
//getting the props set up


return (
 //setting up the book displays for Buybooks
    <div className="book">
    <img src = {images} />
   <div bookname = "title">
    return(
    <p></p>
    <p>
    <b>{books.id}</b>
    </p>
    <p>{books.title}</p>
    <p></p>
    <p>{books.author}</p>
    <p></p>
    <p>${books.price}</p>
       
    <button className="addschnitt2cart" onClick = {() => addbooks(id)}
    >
    Addthatmutha(
    {bookcartcount > 0 && <>{bookcartcount}</>}
    )
    </button>
    </div>
    </div>
    );
    }
 