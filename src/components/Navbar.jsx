import { Link } from "react-router-dom";
import "../css/navbar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate()

  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();
    setKeyword("");
    e.target.reset();
    navigate(`/search?keyword=${keyword}`)
    
  }

  return (
    <>
     <h1>Welcome React Router V6 Demo</h1>
     <hr />
      <div className="enlaces">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/products">Products</Link>
        <form onSubmit={handleSubmit} className="formulario">
          <input type="text" placeholder="Search" defaultValue={keyword} onChange={(e) =>setKeyword(e.target.value)}/>
          <button type="submit">Find</button>
        </form>
      </div>
      <hr />
    </>
  );
}
