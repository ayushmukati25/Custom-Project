import React, { useState } from "react";
import Login from "./Login";
import './App.css'

function App() {

// All Hooks for Sign up inputs

const [name, setName] = useState([])
const [password, setpassword] = useState([])
const [email, setemail] = useState([])
const [phone, setphone] = useState([])
const [profession, setprofession] = useState([])

// login hook. When value gets true, it will let user to access Login page
const [login, setLogin] = useState(false)

const submitHandler = (e) => {
e.preventDefault();
  if(name == "" || password == ""){
    // alert("Please fill data")
  }
  else{
    localStorage.setItem("name", name);
    localStorage.setItem("password", password);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("profession", profession);
  setLogin(true)
}
}

  return (
    // conditional operator used to switch between components
    <>
{ login ? <Login></Login> : ( <>
<h1 className="head">Reactjs Assignment</h1>
<form className="newform" onSubmit={submitHandler}>


<input type="text" required
placeholder="Enter Name"  
className="in"
autoComplete="off"
onChange={e => setName(e.target.value)} ></input>


<input type="text" required
placeholder="Enter Password"  
className="in"
autoComplete="off"
onChange={e => setpassword(e.target.value)} ></input>


<input type="text"
placeholder="Enter Email (optional)"  
className="in"
autoComplete="off"
onChange={e => setemail(e.target.value)} ></input>

<input type="number"
placeholder="Enter Phone (optional)"  
className="in"
autoComplete="off"
onChange={e => setphone(e.target.value)} ></input>

<select className="in"
onChange={(e) => setprofession(e.target.value)}>
<option defaultValue="none hidden" >Select Profession (optional)</option>
<option>Front End Developer</option>
<option>Back End Developer</option>
<option>Full Stack Developer</option>
</select>
<button type="submit" className="in btn" >
  Sign Up
</button>

</form> </>) }
    </>
  );
}

export default App;
