import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

@Component({
  selector: 'app-exercise-08-product-list',
  standalone: false,
  styleUrl: './exercise-08-product-list.scss',
  templateUrl: './exercise-08-product-list.html',
})
export class Exercise08ProductList {
  produtos: Produto[] = [
    { id: 1, nome: 'Teclado', preco: 150, quantidade: 4 },
    { id: 2, nome: 'Mouse', preco: 80, quantidade: 8 },
    { id: 3, nome: 'Monitor', preco: 1200, quantidade: 2 },
    { id: 4, nome: 'Headset', preco: 250, quantidade: 5 },
    { id: 5, nome: 'Webcam', preco: 300, quantidade: 3 },
  ];
}
