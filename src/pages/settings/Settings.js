import  './settings.css'
import Sidebar from '../../components/sidebar/SideBar'

export default function Settings() {
    return (
        <div className="settings">
           <div className="settingWrapper">
               <div className="settingsTitle">
                   <span className="settingsUpdateTitle">Update Your Account</span>
                   <span className="settingsDeleteTitle">Delete Account</span>
               </div>
               <form  className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img src="./assets/img/c4.jpg" alt=""/>
                    <label htmlFor="fileInput">
                    <i className="settingProfilePicIcon far fa-user"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder="oumaima" />
                <label>Email</label>
                <input type="email" placeholder="oumaima@gmail.com" />
                <label>Password</label>
                <input type="password" />
                <button className="settingSubmit">Update</button>
               </form>
           </div>
           <Sidebar/>
        </div>
    )
}
