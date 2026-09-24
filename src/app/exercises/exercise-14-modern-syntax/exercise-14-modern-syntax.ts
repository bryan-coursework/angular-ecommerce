import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

@Component({
  selector: 'app-exercise-14-modern-syntax',
  standalone: false,
  styleUrl: './exercise-14-modern-syntax.scss',
  templateUrl: './exercise-14-modern-syntax.html',
})
export class Exercise14ModernSyntax {
  usuarioLogado: boolean = false;

  nomeProduto: string = 'Teclado';
  quantidadeEstoque: number = 5;

  produtos: Produto[] = [
    { id: 1, nome: 'Teclado', preco: 150, quantidade: 4 },
    { id: 2, nome: 'Mouse', preco: 80, quantidade: 8 },
    { id: 3, nome: 'Monitor', preco: 1200, quantidade: 2 },
    { id: 4, nome: 'Headset', preco: 250, quantidade: 5 },
    { id: 5, nome: 'Webcam', preco: 300, quantidade: 3 },
  ];

  alternarLogin(): void {
    this.usuarioLogado = !this.usuarioLogado;
  }

  adicionarItemEstoque(): void {
    this.quantidadeEstoque += 1;
  }

  removerItemEstoque(): void {
    if (this.quantidadeEstoque > 0) {
      this.quantidadeEstoque -= 1;
    }
  }
}
