// Import Global CSS
import "bootstrap/dist/css/bootstrap.min.css";
import './cssFiles/global.css'
import "./cssFiles/loginsignup.css";
//Import Router
import {  Routes, Route } from "react-router-dom";


//Import JSX Files
import Layout from './components/Layout'

// import Boot from './components/bootstrap'
import Home from "./components/Home";
import Product from "./components/Product";
import Categorie from "./components/Categorie";
import LoginSingup from "./components/LoginSingup";
import Login from "./components/Login";
function App() {
  return (
    <>

      <Layout>
      {/* <Home/> */}
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/categorie" element={<Categorie />} />  
            <Route path="/loginsingup" element={<LoginSingup />} />  
            <Route path="/login" element={<Login />} />
          </Routes>
      </Layout>
      
      
    </>
  );
}



export default App;
