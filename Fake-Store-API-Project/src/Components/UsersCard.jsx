import {Link} from "react-router-dom"


export const UsersCard = ({id, title, image, price}) => {
  return (
    <div className="box">
        <div className="imgBox">
          <img style={{objectFit:"contain"}} src={image} alt="Item-Image" 
          height={200}
          width={200}
          />
        </div>
        <div>
        <p>Title: {title}</p>
        <p>Price: ${price}</p>
        <p>ID: {id}</p>
        <Link to={`${id}`}>Click To Get Info..</Link>
        </div>
      </div>
  )
}

