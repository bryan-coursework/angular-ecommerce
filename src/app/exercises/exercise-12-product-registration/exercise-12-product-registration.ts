import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  quantidade: number;
}

@Component({
  selector: 'app-exercise-12-product-registration',
  standalone: false,
  styleUrl: './exercise-12-product-registration.scss',
  templateUrl: './exercise-12-product-registration.html',
})
export class Exercise12ProductRegistration {
  produtos: Produto[] = [
    { id: 1, nome: 'Teclado', quantidade: 5 },
    { id: 2, nome: 'Mouse', quantidade: 8 },
    { id: 3, nome: 'Monitor', quantidade: 2 },
    { id: 4, nome: 'Headset', quantidade: 0 },
    { id: 5, nome: 'Webcam', quantidade: 3 },
  ];

  novoNome: string = '';
  novaQuantidade: number | null = null;
  mensagemErro: string = '';

  cadastrarProduto(): void {
    if (
      !this.novoNome.trim() ||
      this.novaQuantidade === null ||
      this.novaQuantidade < 0
    ) {
      this.mensagemErro = 'Informe um nome e uma quantidade válida.';
      return;
    }

    const proximoId =
      this.produtos.length > 0
        ? Math.max(...this.produtos.map((produto) => produto.id)) + 1
        : 1;

    this.produtos.push({
      id: proximoId,
      nome: this.novoNome.trim(),
      quantidade: this.novaQuantidade,
    });

    this.novoNome = '';
    this.novaQuantidade = null;
    this.mensagemErro = '';
  }

  excluirProduto(id: number): void {
    this.produtos = this.produtos.filter((produto) => produto.id !== id);
  }
}
