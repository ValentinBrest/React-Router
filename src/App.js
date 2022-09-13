import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import RequireAuth from './hoc/RequireAuth';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import EditPage from './pages/EditPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotfoundPage from './pages/NotfoundPage';
import SinglePage from './pages/SinglePage';

function App() {
  return (
      <>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<HomePage />} />
                  <Route path="posts" element={<BlogPage />} />
                  <Route path="posts/:id" element={<SinglePage />} />
                  <Route
                      path="posts/:id/edit"
                      element={
                          <RequireAuth>
                              <EditPage />
                          </RequireAuth>
                      }
                  />
                  <Route path="about" element={<AboutPage />} />
                  <Route path="about-us" element={<Navigate to="/about" replace />} />
                  <Route path="login" element={<LoginPage />} />
                  <Route path="*" element={<NotfoundPage />} />
              </Route>
          </Routes>
      </>
  );
}

export default App;
