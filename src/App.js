// import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Events from './pages/events';
import AnnualReport from './pages/annual';
import Team from './pages/team';
import Blogs from './pages/blogs';
import Signup from './pages/signup';



function App() {
  return (
    // <div className="App">
    //   {/* <h1>Hello from app .js</h1> */}
      

    // </div>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" Component={Home} />
        <Route exact path="/About" Component = {About}/>
        <Route exact path="/Events" Component={Events}/>
        <Route exact path='/Annual' Component= {AnnualReport}/>
        <Route exact path='/Team' Component={Team}/>
        <Route exact path='Blogs' Component={Blogs}/> 
        <Route exact path='/Signup' Component={Signup}/>
  
      </Routes>
    </Router>


  );
}

export default App;
