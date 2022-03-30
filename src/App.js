import React from 'react'
import './App.css'
import {useState, useEffect} from "react"


function App() {
  const [gitHubName, setGitHubName] = useState("")
  const [gitHubURL, setGitHubURL] = useState("")
  const [gitHubPic, setGitHubPic] = useState("")

  useEffect(async () => {
    const response = await fetch("https://api.github.com/users/ChrisChicas")
    const resData = await response.json()
    setGitHubName(resData.name)
    setGitHubURL(resData.html_url)
    setGitHubPic(resData.avatar_url)
  }, [])

  return (
    <div className="App">
      <h1>Github Profile Info:</h1>
      <h2>{gitHubName}</h2>
      <a href={gitHubURL}>
        <button>Link to GitHub Profile</button>
      </a>
      <img src={gitHubPic} alt="users pfp"/>
    </div>
  );
}

export default App;
