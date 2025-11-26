// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Produto from "./pages/Produto.jsx";
import Carrinho from "./pages/Carrinho.jsx";

// Imports CSS específicos
import "./styles/global.css";      // Reset e estilos globais
import "./styles/Navbar.css";      // Navbar
import "./styles/Home.css";        // Home
import "./styles/Produto.css";     // Produto
import "./styles/Carrinho.css";    // Carrinho
import "./styles/ProductCard.css"; // ProductCard

export default function App() {
  return (
    <>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produto/:id" element={<Produto />} />
          <Route path="/carrinho" element={<Carrinho />} />
        </Routes>
      </div>
    </>
  );
}
