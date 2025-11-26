import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard.jsx";
import { buscarProdutos } from "../api.js";
import "../styles/Home.css";

export default function Home() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    buscarProdutos()
      .then(dados => setProdutos(dados))
      .catch(err => console.error("Erro ao carregar produtos:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="home-container">
      <h1>Produtos</h1>

      {loading && <p>Carregando produtos...</p>}
      {!loading && produtos.length === 0 && <p>Nenhum produto disponível.</p>}

      <div className="products-grid">
        {produtos.map(prod => (
          <ProductCard key={prod.id} produto={prod} />
        ))}
      </div>
    </div>
  );
}
