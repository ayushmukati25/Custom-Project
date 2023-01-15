import React, { useState } from "react"
import Home from './Home'
const Login = () => {

// hooks for verifying username and password from local storage

const [username, setusername] = useState({})
const [userpassword, setuserpassword] = useState({})

// proceed hook when true will let user access Home page after verification

const [proceed, setproceed] = useState(false)

const newSubmit = (e) => {
e.preventDefault();
if(localStorage.getItem("name") == username && localStorage.getItem("password") == userpassword)
{
    setproceed(true);
}
else{
    alert("Invalid Credentials")
}
   }

  const newname = (e) => {
setusername(e.target.value)
  }

  const newpassword = (e) => {
setuserpassword(e.target.value)
  }

// conditional opeartors used to switch between components Login form and Home Page

return(
    <>
     { proceed ? <Home></Home> : ( <>
     <h1 className="head">Login to access Home Page</h1>
     <form onSubmit={newSubmit} className="newform">
    <input type="text" required placeholder="Enter Name" className="in" autoComplete="off" onChange={newname}></input>
    <input type="password" required placeholder="Enter Password" className="in" autoComplete="off" onChange={newpassword}></input>
    <button type="submit" className="in btn">Login</button>
    </form>
    </>
    )
    }
    </>
)
}

export default Login