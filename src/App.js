import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from './components/topbar/TopBar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Settings from './pages/settings/Settings';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const user = false;
  return (
   <Router>
    <TopBar/>
    <Routes>
    <Route path='/'  caseSensitive={false} element={<Home/>} />
    <Route path="/login" caseSensitive={false} element={user ? <Home/> :<Login />} />
    
    <Route path="/register" caseSensitive={false} element={user ? <Home/> :<Register />} />   
    <Route path="/settings" caseSensitive={false} element={user ? <Settings/> :<Register />} />
    <Route path="/post/:postId" caseSensitive={false} element={<Single />} />
    <Route path="/write" caseSensitive={false} element={user ? <Write/> :<Register />} />
        
    </Routes>
    </Router>
  );
}

export default App;
