import {Link} from "react-router-dom"
import { Profile } from "./CreateProfile"
//a nice little navbar to hold all the links

function Navbar(){

<nav className = "navibar">

<div className="username" style={{visibility:"hidden"}}>

<div className = "set up a profile, buttmunch!"/>
//Don't forget the Links!

<Link to = "Profile">Set up a profile, buttmunch</Link>
</div>
<ul className = "nav-links">
<li>    
<Link to = "/">Home</Link>
</li>
<li>
<Link to = "/BookReview"></Link>
</li>
<li>
<Link to = "/BuyBooks"></Link>
</li>
<li>
</li>
</ul>
</nav> 
 
}
export default Navbar;
//lets move on to the shopping app part thingy