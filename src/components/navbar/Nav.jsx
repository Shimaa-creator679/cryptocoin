import React, { useContext } from "react";
import logo from "../../assets/logo.Png";
import { Link } from "react-router-dom";
import arrow from "../../assets/arrow_icon.png"
import "./Nav.css"
import { Coincontext } from "../../context/coincontext";

export const Nav = () => {

  const{setcurrency}=useContext(Coincontext)

  const handlecurrency=(e)=>{

    if(e.target.value==="usd")
    {setcurrency({name:e.target.value,sign:"$"})}
    else if(e.target.value==="eur")
    {setcurrency({name:e.target.value,sign:"€"})}
    else (e.target.value==="inr")
    {setcurrency({name:e.target.value,sign:"¥"})}


  }

  return (
    <nav>
      <div className="logo">
        <img src={logo}></img>
      </div>

      <div className="links">
        <ul>
       <Link><li>Home</li></Link>
          <li>features</li>
          <li>pricing</li>
          <li>blog</li>
        </ul>
      </div>

<div className="btns">
    <select onChange={handlecurrency}>
        <option>usd</option>
        <option>eur</option>
        <option>inr</option>
      
    </select>
    <button>sign up <img src={arrow}></img> </button>
</div>

    </nav>
  );
};
