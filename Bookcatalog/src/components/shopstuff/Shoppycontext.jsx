import React, {createContext, useState} from "react";
import { Shoppycontext } from "./BuyBooks";
import Bestsellers from "../Bestsellers";
import { bookarry } from "../booksale";  


//this will set up the context for BuyBooks
export const Shocontext = createContext(null)
//this will get the default cart
const getdefbook = () =>{
 let bookcart = {};
    for (let i = 1; i< bookarry.length + 1; i++){
    bookcart[i] = 0
    }
return bookcart;
};
 //setting up the useState
export const ShoppycontextProvidernstuff = (props) =>{
const [cartbooks, sercartbooks] = useState(getdefbook()); 

const gettotalbooks = () => {
let totalbooks = 0;
//get the total number of books in the cart
for (const book in cartbooks){
if (cartbooks[item] >0){
let bookschnitt = bookarry.find((book) => book.id === Number(book));
totalbooks += cartbooks[book] * bookschnitt.price;
}

}
return totalbooks;
};

//look through the books id to add it to the cart
const addbook = (bookid) => {
sercartbooks((prev)=> ({...prev,[bookid]:prev[bookid]}))
//same but remove
const removebook = (bookid) => {
sercartbooks((prev) =>({...prev,[bookid]: prev[bookid] + 1 }));

};
//updates the number of books in each cart
const updatebooks = (newbookscount, bookid) => {
sercartbooks((prev) => ({...prev,[bookid]: newbookscount}));    
}
//setting up the checkout function
const checkmeout = () => {
sercartbooks(getDefaultCart());
}
//wrapping it all up into one big const
const bookconvalue = {
cartbooks,
addbook,
updatebooks,
removebook,
gettotalbooks,
checkmeout,
};

return (
<Shoppycontext.Provider value = {bookconvalue}>
{props.children}
</Shoppycontext.Provider>

);
 


}
};