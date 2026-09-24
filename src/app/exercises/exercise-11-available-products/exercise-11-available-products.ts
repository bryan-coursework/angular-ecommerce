import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

@Component({
  selector: 'app-exercise-11-available-products',
  standalone: false,
  styleUrl: './exercise-11-available-products.scss',
  templateUrl: './exercise-11-available-products.html',
})
export class Exercise11AvailableProducts {
  somenteDisponiveis: boolean = false;

  produtos: Produto[] = [
    { id: 1, nome: 'Teclado', preco: 150, quantidade: 0 },
    { id: 2, nome: 'Mouse', preco: 80, quantidade: 8 },
    { id: 3, nome: 'Monitor', preco: 1200, quantidade: 2 },
    { id: 4, nome: 'Headset', preco: 250, quantidade: 0 },
    { id: 5, nome: 'Webcam', preco: 300, quantidade: 3 },
  ];

  exibirTodos(): void {
    this.somenteDisponiveis = false;
  }

  exibirSomenteDisponiveis(): void {
    this.somenteDisponiveis = true;
  }
}
