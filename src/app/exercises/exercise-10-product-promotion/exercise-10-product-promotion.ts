import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  promocao: boolean;
}

@Component({
  selector: 'app-exercise-10-product-promotion',
  standalone: false,
  styleUrl: './exercise-10-product-promotion.scss',
  templateUrl: './exercise-10-product-promotion.html',
})
export class Exercise10ProductPromotion {
  produtos: Produto[] = [
    { id: 1, nome: 'Teclado', preco: 150, quantidade: 4, promocao: true },
    { id: 2, nome: 'Mouse', preco: 80, quantidade: 8, promocao: false },
    { id: 3, nome: 'Monitor', preco: 1200, quantidade: 2, promocao: true },
    { id: 4, nome: 'Headset', preco: 250, quantidade: 5, promocao: false },
    { id: 5, nome: 'Webcam', preco: 300, quantidade: 3, promocao: false },
  ];

  alternarPromocao(produto: Produto): void {
    produto.promocao = !produto.promocao;
  }
}
