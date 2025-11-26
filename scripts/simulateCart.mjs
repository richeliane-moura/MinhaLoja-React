// scripts/simulateCart.mjs
import { adicionarAoCarrinho, obterCarrinho } from '../src/services/cart.js';

// Minimal Event and window/localStorage mocks for Node
global.Event = class Event { constructor(type){ this.type = type; } };
class LocalStorageMock {
  constructor(){ this.store = {}; }
  getItem(key){ return this.store[key] ?? null; }
  setItem(key, value){ this.store[key] = String(value); }
  removeItem(key){ delete this.store[key]; }
  clear(){ this.store = {}; }
}
global.localStorage = new LocalStorageMock();
global.window = { dispatchEvent: (ev) => { console.log('[mock window] dispatchEvent', ev.type); } };

console.log('Carrinho inicial:', obterCarrinho());

adicionarAoCarrinho({ id: 1, name: 'Produto Teste', price: 9.99 });
console.log('Carrinho após 1º adicionar:', obterCarrinho());

adicionarAoCarrinho({ id: 1, name: 'Produto Teste', price: 9.99 });
console.log('Carrinho após 2º adicionar:', obterCarrinho());
