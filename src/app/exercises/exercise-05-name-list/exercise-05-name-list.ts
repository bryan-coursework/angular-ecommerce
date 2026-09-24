import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise-05-name-list',
  standalone: false,
  styleUrl: './exercise-05-name-list.scss',
  templateUrl: './exercise-05-name-list.html',
})
export class Exercise05NameList {
  nomes: string[] = ['Ana', 'Bruno', 'Carlos', 'Daniela', 'Eduardo'];
}
