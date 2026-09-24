import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise-06-empty-list',
  standalone: false,
  styleUrl: './exercise-06-empty-list.scss',
  templateUrl: './exercise-06-empty-list.html',
})
export class Exercise06EmptyList {
  nomesIniciais: string[] = ['Ana', 'Bruno', 'Carlos', 'Daniela', 'Eduardo'];
  nomes: string[] = [...this.nomesIniciais];

  removerUltimoNome(): void {
    this.nomes.pop();
  }

  limparLista(): void {
    this.nomes = [];
  }

  restaurarLista(): void {
    this.nomes = [...this.nomesIniciais];
  }
}
