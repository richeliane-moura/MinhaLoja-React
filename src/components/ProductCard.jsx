import { Link } from "react-router-dom";
import "../styles/ProductCard.css";

export default function ProductCard({ produto }) {
  if (!produto) return null;

  const precoFormatado = produto.price
    ? produto.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
    : "Preço indisponível";

  return (
    <Link to={`/produto/${produto.id}`} className="product-card">
      <img
        src={produto.image}
        alt={produto.title}
        loading="lazy"
      />

      <h3 className="product-title">{produto.title}</h3>

      <p className="product-price">{precoFormatado}</p>
    </Link>
  );
}
