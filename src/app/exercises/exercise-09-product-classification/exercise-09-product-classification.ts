import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

@Component({
  selector: 'app-exercise-09-product-classification',
  standalone: false,
  styleUrl: './exercise-09-product-classification.scss',
  templateUrl: './exercise-09-product-classification.html',
})
export class Exercise09ProductClassification {
  produtos: Produto[] = [
    { id: 1, nome: 'Teclado', preco: 150, quantidade: 0 },
    { id: 2, nome: 'Mouse', preco: 80, quantidade: 3 },
    { id: 3, nome: 'Monitor', preco: 1200, quantidade: 8 },
    { id: 4, nome: 'Headset', preco: 250, quantidade: 5 },
    { id: 5, nome: 'Webcam', preco: 300, quantidade: 10 },
  ];
}
