import { Link } from 'react-router-dom';
import './register.css';

export default function Register() {
    return (
        <div className="register">
           
           
            <form  className="registerform">
            <span className="registerTitle">Sign up</span>
            <label>Username</label>
                <input type="text" className="registerInput" placeholder="Enter your username..."/>
                <label>Email</label>
                <input type="text" className="registerInput" placeholder="Enter your email..."/>
                <label>Password</label>
                <input type="password" className="registerInput"  placeholder="Enter your password..."/>
                <button className="registerButton">Register</button>
                <button className="registerLoginButton"> <Link className="link" to="/login">Login</Link></button>
            </form>
           
            <img  alt="" className="imgform" src="./assets/img/c7.png"/>
        </div>
   
    )
}
