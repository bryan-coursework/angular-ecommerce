import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise-07-alternating-colors',
  standalone: false,
  styleUrl: './exercise-07-alternating-colors.scss',
  templateUrl: './exercise-07-alternating-colors.html',
})
export class Exercise07AlternatingColors {
  disciplinas: string[] = [
    'Matemática',
    'Português',
    'História',
    'Geografia',
    'Biologia',
    'Programação',
  ];
}
