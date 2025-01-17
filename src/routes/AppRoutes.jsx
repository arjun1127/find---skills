import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Home from '../pages/Home/Home';
import Chat from '../pages/chat/Chat';
import Electronics from '../pages/electronics/Electronics';
import HelpMeRead from '../pages/AIsearch/HelpMeRead';
import Japanese from '../pages/japanese/Japanese';
import Programming from '../pages/Programming/Programming';
import Share from '../pages/share/Share';
// import Login from '../pages/Login';
// import Signup from '../pages/Signup'

const AppRoutes = () => {

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <NavBar/>
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home/>}/>
            {/* <Route path="/Login" element={<Login/>}/>
            <Route path="/Signup" element={<Signup/>}/> */}
            <Route path="/programming" element={<Programming/>}/>
            <Route path="/electronics" element={<Electronics/>}/>
            <Route path="/japanese" element={<Japanese/>}/>
            <Route path="/chat" element={<Chat/>}/>
            <Route path="/helpMeRead" element={<HelpMeRead/>}/>
            <Route path="/Share" element={<Share/>}/>
          </Routes>
          </main>
       <Footer/>
      </div>
    </Router>
  )
}

export default AppRoutes