import { useContext } from "react";

function Writereview(){
//for those who want to add their own two cents
//usecontext and stuff
const {writeReview} = useContext()
//error handling too
const handleSub = (e) => {e.preventDefault();
let fdata = new FormData(e.target);
let newreview = {username:fdata.get("username"),
                 header:fdata.get("header"),
                 review: fdata.get("review"),
};

writeReview(newreview);
e.target.reset();
};

return (
//here we set up the form 
<form style = {{backgroundColor:"wheat"}}onSubmit = {handleSub}>
    <h1>What are you waiting for? Write that review!</h1>
    <div className = 'form-input-stuff' style = {{alignItems:"center"}}>
    <label lab1 = "username">Username</label>   
    <input name = "username" placeholder = "your user name"></input>
    <label lab2 = "header">Header</label>
    <input name = "header" placeholder = "Your header here"></input>
    <label lab3 = "review">Review</label>
    <input name = "review" placeholder = "write review here"></input>
    
    </div>  
    </form>   
);
}
export default Writereview;

//now, lets TRY to run this thing
//the server's running. That's a good sign.

//That's not a good sign.

//(sigh) I tried to get this thing to work. I spent hours in front of my screen, 
//hammering away at my keyboard, trying to make sure it was perfect
//I failed.
//Oh well. I doubt I'll get the best grade for this thing. I expect to fail this class
//But at least I tried.