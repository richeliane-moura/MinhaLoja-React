import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import "../styles/Navbar.css";
import { obterCarrinho } from "../services/cart";

export default function Navbar() {
  const [totalQtd, setTotalQtd] = useState(0);

  useEffect(() => {
    const atualizar = () => {
      const carrinho = obterCarrinho();
      const total = carrinho.reduce((acc, item) => acc + (item.quantidade || 0), 0);
      setTotalQtd(total);
    };

    atualizar();

    window.addEventListener("cartChanged", atualizar);
    window.addEventListener("storage", atualizar);

    return () => {
      window.removeEventListener("cartChanged", atualizar);
      window.removeEventListener("storage", atualizar);
    };
  }, []);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">MinhaLoja</Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/carrinho" className="carrinho-link">
          <ShoppingCart size={24} />
          {totalQtd > 0 && <span className="badge">{totalQtd}</span>}
        </Link>
      </div>
    </nav>
  );
}
