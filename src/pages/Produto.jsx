import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { buscarProdutoPorId } from "../api.js";
import { adicionarAoCarrinho } from "../services/cart.js";
import "../styles/Produto.css";

export default function Produto() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [produto, setProduto] = useState(null);
  const [adicionado, setAdicionado] = useState(false);

  useEffect(() => {
    buscarProdutoPorId(id).then(dados => setProduto(dados));
  }, [id]);

  if (!produto) return <p className="produto-loading">Carregando...</p>;

  const handleAdicionar = () => {
    adicionarAoCarrinho(produto);
    setAdicionado(true);
    setTimeout(() => setAdicionado(false), 1500); // reset do aviso
  };

  return (
    <div className="produto-container">
      <button onClick={() => navigate(-1)} className="btn-voltar">
        Voltar
      </button>

      <div className="produto-card">
        <img src={produto.image || "/placeholder.png"} alt={produto.title} />
        <h1>{produto.title}</h1>
        <p>{produto.description}</p>
        <p className="produto-price">R$ {produto.price.toFixed(2)}</p>
        <button className="btn-adicionar" onClick={handleAdicionar} disabled={adicionado}>
          {adicionado ? "Adicionado!" : "Adicionar ao carrinho"}
        </button>
      </div>
    </div>
  );
}
