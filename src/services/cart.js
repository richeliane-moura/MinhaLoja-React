// ------- Funções de armazenamento -------

export function obterCarrinho() {
  try {
    return JSON.parse(localStorage.getItem("carrinho")) || [];
  } catch {
    return [];
  }
}

export function salvarCarrinho(carrinho) {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  window.dispatchEvent(new Event("cartChanged"));
}

// ------- Manipulação do carrinho -------

export function adicionarAoCarrinho(produto) {
  const carrinho = [...obterCarrinho()];
  const item = carrinho.find(i => i.id === produto.id);

  if (item) {
    item.quantidade += 1;
  } else {
    carrinho.push({ ...produto, quantidade: 1 });
  }

  salvarCarrinho(carrinho);
}

export function removerDoCarrinho(id) {
  const atualizado = obterCarrinho().filter(item => item.id !== id);
  salvarCarrinho(atualizado);
}

export function aumentarQuantidade(id) {
  const carrinho = [...obterCarrinho()];
  const item = carrinho.find(i => i.id === id);

  if (item) {
    item.quantidade += 1;
    salvarCarrinho(carrinho);
  }
}

export function diminuirQuantidade(id) {
  let carrinho = [...obterCarrinho()];
  const item = carrinho.find(i => i.id === id);

  if (!item) return;

  item.quantidade -= 1;

  if (item.quantidade <= 0) {
    carrinho = carrinho.filter(i => i.id !== id);
  }

  salvarCarrinho(carrinho);
}

// ------- Totais -------

export function totalCarrinho() {
  return obterCarrinho().reduce(
    (total, item) => total + Number(item.price) * item.quantidade,
    0
  );
}
