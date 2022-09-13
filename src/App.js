import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import NotfoundPage from './pages/NotfoundPage';

function App() {
  return (
      <>
          <header>
              <Link to="/">Home</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/about">About</Link>
          </header>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/blog' element={<BlogPage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='*' element={<NotfoundPage/>}/>
          </Routes>          
      </>
  );
}

export default App;
