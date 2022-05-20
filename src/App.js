import logo from './logo.svg';
import './App.css';
import Button from './Button';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';

function App() {
  return (
    <div className="App">
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/blogs" element={<Blog />} >
          <Route path="/blogs/blog" element={<BlogDetails />} />  
        </Route> 
        {/* <Route path="/" element={<Home />} />  */}
      </Routes>
    </div>
  );
}

export default App;
