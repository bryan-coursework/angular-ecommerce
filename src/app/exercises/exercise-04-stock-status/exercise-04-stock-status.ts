import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise-04-stock-status',
  standalone: false,
  styleUrl: './exercise-04-stock-status.scss',
  templateUrl: './exercise-04-stock-status.html',
})
export class Exercise04StockStatus {
  nomeProduto: string = 'Teclado';
  quantidadeEstoque: number = 5;

  adicionarItemEstoque(): void {
    this.quantidadeEstoque += 1;
  }

  removerItemEstoque(): void {
    if (this.quantidadeEstoque > 0) {
      this.quantidadeEstoque -= 1;
    }
  }
}
