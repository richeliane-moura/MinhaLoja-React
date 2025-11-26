const API_URL = "https://fakestoreapi.com";

export async function buscarProdutos() {
  const resposta = await fetch(`${API_URL}/products`);
  return await resposta.json();
}

export async function buscarProdutoPorId(id) {
  const resposta = await fetch(`${API_URL}/products/${id}`);
  return await resposta.json();
}

// buscarProdutos(): Retorna todos os produtos da API.
// buscarProdutoPorId(id): Retorna um único produto, baseado no id fornecido.
