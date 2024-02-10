import { useContext, useState } from "react"
import {AuthContext} from "../Context/AuthContext"

export const Login = ()=>{
  const {setIsLoggedIn} = useContext(AuthContext)
  const [data, setData] = useState({
    username:"",
    password:"",
  })

  function handleChange(event){
    const newData = {
      ...data,
      [event.target.name]: event.target.value
    }
    setData(newData)
  }

  async function handleSubmit(event){
    event.preventDefault()
    try {
      let res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })

      let finalData = await res.json()
      setData(finalData)
      setIsLoggedIn(true)
    } catch (error) {
      console.log("error");
    }
  }
    return(
      <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <h1>Login Page</h1>
      <div className="FormDiv">
        <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter UserName" className="formInput" onChange={handleChange} name="username" value={data.username}/>
        <input type="text" placeholder="Enter Password" className="formInput" onChange={handleChange} name="password" value={data.password} />
        <button type="submit">Submit</button>
         
        </form>
        </div>
      </div>
    )
  }