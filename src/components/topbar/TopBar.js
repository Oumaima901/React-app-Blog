import React from 'react'
import "./topbar.css"

export default function TopBar() {
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
                    <li className="topListItem">Home</li>
                    <li className="topListItem">About</li>
                    <li className="topListItem">Contact</li>
                    <li className="topListItem">Write</li>
                    <li className="topListItem">Logout</li>
                </ul>
            </div>
            <div className="topRight">
                <img className="topImg"
                src="./assets/img/profile-pic.jpg"
                alt=""/>
            <i className="searchIcon fas fa-search"></i>
            </div>
        </div>
    )
}