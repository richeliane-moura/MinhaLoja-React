// Gerencia o carrinho usando localStorage e dispara eventos para atualizar componentes

// Obter carrinho
export function obterCarrinho() {
  return JSON.parse(localStorage.getItem("carrinho")) || [];
}

// Salvar carrinho e notificar listeners
export function salvarCarrinho(carrinho) {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  try {
    window.dispatchEvent(new Event("cartChanged"));
  } catch (e) {
    // Ignora erro em ambientes sem window
  }
}

// Adicionar produto
export function adicionarAoCarrinho(produto) {
  const carrinho = obterCarrinho();
  const itemExistente = carrinho.find(item => item.id === produto.id);

  if (itemExistente) {
    itemExistente.quantidade += 1;
  } else {
    carrinho.push({ ...produto, quantidade: 1 });
  }

  salvarCarrinho(carrinho);
}

// Remover produto completamente
export function removerDoCarrinho(id) {
  const atualizado = obterCarrinho().filter(item => item.id !== id);
  salvarCarrinho(atualizado);
}

// Aumentar quantidade
export function aumentarQuantidade(id) {
  const carrinho = obterCarrinho();
  const item = carrinho.find(i => i.id === id);
  if (item) {
    item.quantidade++;
    salvarCarrinho(carrinho);
  }
}

// Diminuir quantidade
export function diminuirQuantidade(id) {
  let carrinho = obterCarrinho();
  const item = carrinho.find(i => i.id === id);
  if (!item) return;

  item.quantidade--;
  if (item.quantidade <= 0) {
    carrinho = carrinho.filter(i => i.id !== id);
  }

  salvarCarrinho(carrinho);
}

// Total em dinheiro
export function totalCarrinho() {
  const carrinho = obterCarrinho();
  return carrinho.reduce((total, item) => total + item.price * item.quantidade, 0);
}
