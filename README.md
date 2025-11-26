# MinhaLoja — Front‑end React

Este projeto é uma aplicação de e‑commerce fictícia construída com **React**, onde são consumidos dados da **Fake Store API** para exibição de produtos, detalhes e gerenciamento de carrinho de compras no `localStorage`.

---

## 🚀 Funcionalidades

- Página inicial com listagem de produtos  
- Página de detalhe para cada produto, com imagem, descrição e preço  
- Adicionar produtos ao carrinho  
- Remover itens do carrinho  
- Finalizar compra (simulado)  
- Estado do carrinho persistido no `localStorage`  

---

## 📦 Tecnologias usadas

- React + Hooks (`useState`, `useEffect`)  
- React Router v6 (`Routes`, `Route`, `useParams`, `useNavigate`)  
- Tailwind CSS para estilização  
- FakeStoreAPI para dados de produtos  
- `localStorage` para persistência do carrinho  

---

## 🔗 Endpoints da API (FakeStoreAPI)

Aqui estão alguns dos principais endpoints que o projeto consome:

| Rota | Descrição |
|---|---|
| `GET /products` | Obtém a lista de todos os produtos |
| `GET /products/:id` | Obtém um produto específico pelo ID |

Você pode ver a documentação completa da FakeStoreAPI no [repositório oficial](https://github.com/keikaavousi/fake-store-api).

---

