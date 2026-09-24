import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise-03-age-check',
  standalone: false,
  styleUrl: './exercise-03-age-check.scss',
  templateUrl: './exercise-03-age-check.html',
})
export class Exercise03AgeCheck {
  idade: number = 0;

  aumentarIdade(): void {
    this.idade += 1;
  }

  diminuirIdade(): void {
    if (this.idade > 0) {
      this.idade -= 1;
    }
  }
}
