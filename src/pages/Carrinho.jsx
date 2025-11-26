import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Carrinho.css";
import {
  obterCarrinho,
  aumentarQuantidade,
  diminuirQuantidade,
  removerDoCarrinho,
  totalCarrinho,
  salvarCarrinho
} from "../services/cart";

export default function Carrinho() {
  const [itensCarrinho, setItensCarrinho] = useState([]);
  const navigate = useNavigate();

  const atualizarCarrinho = () => setItensCarrinho(obterCarrinho());

  useEffect(() => {
    atualizarCarrinho();
    window.addEventListener("cartChanged", atualizarCarrinho);
    window.addEventListener("storage", atualizarCarrinho);

    return () => {
      window.removeEventListener("cartChanged", atualizarCarrinho);
      window.removeEventListener("storage", atualizarCarrinho);
    };
  }, []);

  const handleAumentar = (id) => aumentarQuantidade(id);
  const handleDiminuir = (id) => diminuirQuantidade(id);
  const handleRemover = (id) => removerDoCarrinho(id);

  const totalItens = useMemo(() =>
    itensCarrinho.reduce((soma, item) => soma + item.quantidade, 0),
    [itensCarrinho]
  );

  const totalDinheiro = useMemo(() =>
    totalCarrinho().toFixed(2),
    [itensCarrinho]
  );

  const finalizarCompra = () => {
    if (itensCarrinho.length === 0) {
      alert("Seu carrinho está vazio!");
      return;
    }

    alert("Compra finalizada com sucesso!");
    salvarCarrinho([]); // limpa e dispara cartChanged
  };

  return (
    <div className="carrinho-container">
      <button className="btn-voltar" onClick={() => navigate("/")}>
        Voltar para Home
      </button>

      <h1>Carrinho de Compras</h1>

      <div className="carrinho-itens">
        {itensCarrinho.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          itensCarrinho.map(item => (
            <div key={item.id} className="carrinho-item">
              <img src={item.image} alt={item.title} />
              <div className="item-info">
                <h3>{item.title}</h3>
                <p>Preço: R$ {item.price.toFixed(2)}</p>
                <div className="quantidade-box">
                  <button onClick={() => handleDiminuir(item.id)}>-</button>
                  <span>{item.quantidade}</span>
                  <button onClick={() => handleAumentar(item.id)}>+</button>
                </div>
              </div>
              <button className="btn-remover" onClick={() => handleRemover(item.id)}>
                Remover
              </button>
            </div>
          ))
        )}
      </div>

      <div className="carrinho-footer">
        <h2>Total de Itens: {totalItens}</h2>
        <h2>Total: R$ {totalDinheiro}</h2>
        <button className="btn-finalizar" onClick={finalizarCompra}>
          Finalizar Compra
        </button>
      </div>
    </div>
  );
}
