import React, { useEffect } from 'react'
import App from '../App'; 
import {userRef,useState, userEffect} from "react"

const userreg = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const pwordreg = /^(?=.*[a-z])(?=.*)[A-Z])(?=.*[0-9])(?=.*[!@#%]).{8,24}$/;

const Reggy = () => {
const userRef = userreg();
const eRef = userreg();

const[user,setUser] = useState('');
const [valName, setValName] = useState(false);
const [pword, setPword] = useState ('');
const [valpword, setpword] = useState(false);
const [matchPword, setmatchPword] = useState('');
const [valMatch, setvalMatch] = useState('false');
const [matchF, setmatchF] = useState('false');

const [errMess, seterrMess] = useState('');
const [succ, setsucc] = useState(false);

  userEffect(() =>{userRef.current.focus(user);
    console.log(user)
    setValidName(result);
},[user])

 useEffect(() => {const ress = PWD_REGEX.test(pword);
  setPword(result);
  const match = pwd === matchPword;
  setValPword(result);
 }, [pword,matchPword])


useEffect(() => {seterrMess('');
},[user, pword,matchpWord])

return (



<section>
<p ref = {errRef} className ={errMess ? "errmess" : "offscreen"} aria-live = "assertive">{errMess}</p>
<h1>Please create a username. Please please pretty please? I promise I won't sell your data</h1>
<form> 
  <label>label htmlFor = "username"</label>
  <input type = "text" 
   id = "username"
   ref = {userRef}
  autoComplete='off'
  onChange ={(e) => setUser (e.target.value)}
  required
  aria-invalid = "uidnote"
  onFocus = {() => setUserFocus(true)}
  onBlur = {() => setUserFocus(false)}
  />

<p id = "uidnote" className={userFocus && user && !valName ? "instructions" : "offscreen"}>
4 to 24 characters.<br />
Your password must begin with a letter, got it? <br />
</p>
</form>
</section>
)

}
export default Reggy

