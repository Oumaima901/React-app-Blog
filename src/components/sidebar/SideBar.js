
import './sidebar.css';

export default function SideBar() {
    return (
        <div className="sidebar">
         <div className="sidebarItem">
             <span className="sidebarTitle">About Me</span>
             <img src="./assets/img/c2.jpg" alt="" className="sidebarImg"/>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam facilis, temporibus corrupti excepturi consequatur</p>
         </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">Categories</span>
           <ul className="sidebarList">
               <li className="sidebarListItem">Life</li>
               <li className="sidebarListItem">Cinema</li>
               <li className="sidebarListItem">Tech</li>
               <li className="sidebarListItem">Style</li>
               <li className="sidebarListItem">Sport</li>
               
           </ul>
           
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Us</span>
                <div className="sidebarSocialContainer">
            <i className="sidebarIcon fab fa-facebook"></i>
            <i className="sidebarIcon fab fa-twitter"></i>
            <i className="sidebarIcon fab fa-pinterest"></i>
            <i className="sidebarIcon fab fa-instagram"></i>
                </div>
            </div>
        </div>
    )
}
