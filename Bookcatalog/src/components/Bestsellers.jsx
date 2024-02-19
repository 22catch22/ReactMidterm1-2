
// first, the imports
import App from "../App";
import React from "react";
import textRating from "./Reviewstuff/Textratings";
import {bestseller1} from "./booksale";
import {bestseller2} from "./booksale";
import {bestseller3} from "./booksale";
import {bestseller4} from "./booksale";
import {bestseller5} from "./booksale";



function Bestsellers()

{ 
//lets use the data from 'booksale' to display the books
return ( 
 <div class = "booksgalore">

<div className="book1">
 <div className = "cimage" src = "Hooflung Dadung.png"></div>
 {bestseller1.title}
 {bestseller1.author}
 {bestseller1.shortdescription}
 {bestseller1.price}
 <div ratings></div>
 <div className = "booklongd1">
    "Blah blah blah blah blah blah blah blah blah blah blah blah"
</div>
<div className="reviews">
<ul id = "revlist1"></ul>
<button className="buybutton">Buy it Now!</button>
 </div>
 //here's the text rating
{textRating}

 </div>
 <div className="book2">
 <div className = "cimage" src = "WillyMakeit"></div>
 {bestseller2.title}
 {bestseller2.author}
 {bestseller2.shortdescription}
 {bestseller2.price}
 </div>
 {textRating()}
 
 <div className="book3">
 {bestseller3.title}
 {bestseller3.author}
 {bestseller3.shortdescription}
 <div className="longdescription">
 "Blah blah blah blah blah blah blah blah blah blah blah blah"
 </div>
 {bestseller3.price}
 {textRating()}
 </div>
 
 <div className="book4">
 {bestseller4.title}
 {bestseller4.author}
 {bestseller4.shortdescription}
 <div className="longdescription">
 "Blah blah blah blah blah blah blah blah blah blah blah blah"
 </div>
 {bestseller4.price}
 {textRating()}
 </div>
 
 <div className="book5">
 {bestseller5.title}
 {bestseller5.author}
 {bestseller5.shortdescription}
 <div className="longdescription">
 "Blah blah blah blah blah blah blah blah blah blah blah blah"
 </div>
 {bestseller5.price}
 {textRating()}
 </div>
</div>
 
)
}
//now, the export
export default Bestsellers