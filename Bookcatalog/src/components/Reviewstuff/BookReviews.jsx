import { useContext } from "react"
//lets start the function
function Writereviews(){
//make some reviews

const review1 = {username:"Chet Yewbetcha", 
header:"It sucks", 
review:"Seriously, don't spend your money on this tripe"}

const review2={username: 
"Herass Must'B'Black", 
header:"Miraculous!", 
review: "This book literally cured my cancer!"}

const review3 ={
username:"P.Dude",
header:"Buttsauce", 
review:"This can't be good for me, but I feel great!"}

//this will handle the submission
 const handleSubmit = (e) =>{
//incase someone screws up
    e.preventDefault();
let fDat = new FormData(e.target);
//reading the form data
let newreview = {username:fDat.get("username"),
             header:fDat.get("header"),
             review: fDat.get("review")
 };
Writereviews(newreview);
e.target.reset();

};

return (
<div className="reviewcontainer">
<div className="review">
//displaying the user reviews
<p>{review1.username}</p>
 <p>{review1.header}</p>
<p>{review1.review}</p>
</div>
<div className="review">
<p>{review2.username}</p>
 <p>{review2.header}</p>
<p>{review2.review}</p>
</div>
 
<div className="review">
<p>{review3.username}</p>
 <p>{review3.header}</p>
<p>{review3.review}</p>
</div>


<form onSubmit={handleSubmit}>
<div classname = 'review-input1' style = {{alignItems:"center"}}>
    <label formname ="username">Username</label>
    <input name = "Username" placeholder = "The place where we are writing the username"/>
    </div>
    <div classname = 'review-input2' style = {{alignItems:"center"}}>
    <label formhead ="header">Header</label>
    <input name = "header" placeholder = "The place where we are writing the header"/>
    </div>
    <div classname = 'form-input3' style = {{alignItems:"center"}}>
    <label formnrev ="review">Review</label>
    <input name = "review" placeholder = "The place where we are writing the review"/>
    </div>

</form>
</div>
)

}

 export default Writereviews()