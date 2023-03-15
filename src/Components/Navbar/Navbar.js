import React, { Component } from "react";
import { GrFormSearch } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";
import "./Navbar.css";

export class Navbar extends Component{

  render(){
    return(
      <header className="navbar">
       <div className="nav__menu flex">
         <span>Coins</span>
         <span>Exchanges</span>
        <span>Swap</span>
       </div>
       <div className="nav__logo">
         <img src="https://coincap.io/static/logos/black.svg" alt="coincap" />
       </div>
       <div className="nav__actionbtn flex">
         <div className="nav__search">
           <GrFormSearch size={25} />
         </div>
         <div className="nav__settings">
           <IoMdSettings size={20} />
         </div>
         <div className="nav__btns">
           <button className="action__btn">Connect Wallet</button>
         </div>
       </div>
     </header>
    )
  }
}

