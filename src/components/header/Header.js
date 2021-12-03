import React from 'react'
import './header.css';
export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
            <div className="headerTitleLg">Create a unique, stunning blog</div>
                <div className="headerTitleSm"> Nothing could be simpler and it's free</div>
            </div>
            <img className="headerImg" src="./assets/img/c5.jpg" />
        </div>
    )
}
