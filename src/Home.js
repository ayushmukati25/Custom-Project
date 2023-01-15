import React, {useState } from "react";
import './App.css'
const Home = () => {

// Hooks for getting data for POST request

const [movieRegister, setmovieRegister] = useState({
  genre : "",
  language : "",
  category : "",
  vote : ""
})

const [movieData, setmovieData] = useState([])

// POST request via fetch

let postData = async (e) => 
{
    e.preventDefault();
    let res = await fetch('https://hoblist.com/api/movieList', 
    {
      method: "POST",
      body: JSON.stringify
      (  [{genre: movieRegister.genre}
        ,{language: movieRegister.language}
        ,{category: movieRegister.category}
        ,{vote: movieRegister.vote}
      ]),
    }
    )
alert("Success! Please check Console/Network for sent data")
const x = {...movieRegister}
setmovieData([...movieData, x])

setmovieRegister({genre:"", language:"", category:"", vote:""})
}

// Function for adding values onchange to single const

const addMovie = (e) => {
const name = e.target.name;
const value = e.target.value;
console.log(name, value)

setmovieRegister({...movieRegister, [name] : value})
}

// Hooks for Company Details (show onclick)

const [company, setcompany] = useState("")
const [Address, setAddress] = useState("")
const [Phone, setPhone] = useState("")
const [Email, setEmail] = useState("")
const clickHandler = () => {
setcompany("Geeksynergy Technologies Pvt Ltd")
setAddress("Sanjayanagar, Bengaluru")
setPhone("XXXXXXXX09")
setEmail("XXXXXXX@gmail.com")
}

return(
<>

<div>

<button onClick={clickHandler} className="in btn">
Company Info
</button>


<h2 className="head-2">{company}<br></br>{Address}<br></br>{Phone}<br></br>{Email}</h2>
</div>
<h1 className="head">Welcome {localStorage.getItem("name")}! Please Enter Details to Post on API</h1>


<form onSubmit={postData} className="newform">
    <input name="genre" className="in" placeholder="Genre" type="text" value={movieRegister.genre} onChange={addMovie}>
    </input>
    <input name="language" className="in" type="text" value={movieRegister.language} placeholder="Language" onChange={addMovie}>

    </input>
    <input name="category" className="in" type="text" value={movieRegister.category} placeholder="Category" onChange={addMovie}>

    </input>
    <input name="vote" type="number" className="in" value={movieRegister.vote} placeholder="Votes" onChange={addMovie}>

    </input>
    <button type="submit" className="in btn">
        Post
    </button>
</form>

<div>

{
   [...movieData]
   .sort((a, b) => b.vote - a.vote).map((w) => {
    return(
    <>
  <div className="card">
    <div className="left"><ul className="leftList">{w.vote}</ul>Votes</div>
    <div className="right"> 
   <span style={{fontSize:20}}>TITLE</span> 
    <ul className="rightList">
      <li>Genre : {w.genre}</li>
      <li>Language : {w.language}</li>
      <li>Category : {w.category}</li>
      </ul>
      </div>
    </div>
  </>
  )}
  )
}
</div>
</>
 )
}

export default Home