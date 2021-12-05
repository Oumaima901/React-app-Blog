import React from 'react'
import { Link } from 'react-router-dom';
import "./topbar.css"

export default function TopBar() {
    const user = false;
    return (
        <div className="top">
            <div className="topLeft">
            <i className="topIcon fab fa-facebook"></i>
            <i className="topIcon fab fa-twitter"></i>
            <i className="topIcon fab fa-pinterest"></i>
            <i className="topIcon fab fa-instagram"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link className="link" to="/">Home</Link></li>
                    <li className="topListItem"><Link className="link" to="/About">About</Link></li>
                    <li className="topListItem"><Link className="link" to="/Contact">Contact</Link></li>
                    <li className="topListItem"><Link className="link" to="/Write">Write</Link></li>
                    <li className="topListItem">{ user && "Logout" }</li>
                </ul>
            </div>
            <div className="topRight">
                {user ? ( <img className="topImg"
                src="./assets/img/profile-pic.jpg"
                alt=""/>)
                :( 
                <ul className="topList">
                   <li className="topListItem"> <Link className="link" to="/login">Login</Link></li>
                   <li className="topListItem">  <Link className="link" to="/register">Register</Link> </li></ul> 
                )

            }
               
            <i className="searchIcon fas fa-search"></i>
           
            </div>
        </div>
    )
}
