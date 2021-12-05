import { Link } from 'react-router-dom';
import './login.css';

export default function Login() {
    return (
        <div className="login">
           
           
            <form  className="loginform">
            <span className="loginTitle">Sign In</span>
                <label>Email</label>
                <input type="text" className="loginInput" placeholder="Enter your email..."/>
                <label>Password</label>
                <input type="password" className="loginInput"  placeholder="Enter your password..."/>
                <button className="loginButton">Login</button>
   
                <button className="LoginRegisterButton">
                                 <Link className="link" to="/register">Register</Link></button>
            </form>
           
            <img  alt="" className="imgform" src="./assets/img/c6.jpg"/>
        
        </div>
    )
}
