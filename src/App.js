import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom"
import Footer from './components/Footer';
import About from "./pages/About"
import MainPage from './pages/MainPage';
import Extra from './pages/Extra';
import './css/landing.css'
import MainLayout from "./pages/layout/MainLayout"
import GalleryLayout from './pages/layout/GalleryLayout';
import GalleryMain from './components/image/GalleryMain';


function App() {
  return (
    <>


      <Routes>
        <Route element={<MainLayout />} >
          <Route path="/about" element={<About />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/extra" element={<Extra />} />
          <Route element={<Footer />} />
        </Route>

        <Route element={<GalleryLayout />} >
          <Route path="/gallery" element={<GalleryMain />} />
        </Route>
      
      </Routes>




    </>
  );
}



export default App;
