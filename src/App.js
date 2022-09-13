import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import HomePage from './pages/HomePage';
import NotfoundPage from './pages/NotfoundPage';

function App() {
  return (
      <>
          <Routes>
              <Route path='/' element={<Layout/>}>
                  <Route index element={<HomePage />} />
                  <Route path="blog" element={<BlogPage />} />
                  <Route path="about" element={<AboutPage />} />
                  <Route path="*" element={<NotfoundPage />} />
              </Route>
          </Routes>
      </>
  );
}

export default App;
