import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import LoadingIndicator from "../Components/LoadingIndicator";
import ErrorIndicator from "../Components/ErrorIndicator";

export const DetailsPage = () => {
const {user_id} = useParams()
const [loading, setLoading] = useState(false)
const [error, setError] = useState(false)
const [data, setData] = useState({})


useEffect(()=>{
    setLoading(true)
fetch(`https://fakestoreapi.com/products/${user_id}`)
.then((res)=> res.json())
.then((res)=>{
    setData(res)
})
.catch(()=>{
    setError(true)
})
.finally(()=>{
    setLoading(false)
})
}, [user_id])


if(loading){
    return <LoadingIndicator/>
}

if(error){
    return <ErrorIndicator/>
}

const {image, title, id, category, description, price} = data

  return (
    <div>
        <h1>Details Page</h1>
        <div >
            <div className="box">
        <div className="imgBox">
            <img style={{height:"100%"}} src={image} alt="Item-Image" 
            width={200}
            height={230}
            />
        </div>
        <div>
        <p>ID: {id}</p>
        <p>Title: {title}</p>
        <p>Category: {category}</p>
        <p>Description: {description}</p>
        <p>Price: {price}</p>
        </div>
        </div>
        </div>
        
    </div>
  )
}

