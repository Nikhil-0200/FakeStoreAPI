import { Link } from "react-router-dom";


const LinkFolder = () => {
  return (
    <div className="NavBar">
      <Link to="/">Home</Link>
      <Link to="About">About</Link>
      <Link to="Contact">Contact</Link>
      <Link to="Login">Login</Link>
      <Link to="Users">Users</Link>
    </div>
  );
};

export default LinkFolder;
