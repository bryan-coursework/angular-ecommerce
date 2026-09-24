import { Component } from '@angular/core';

type Prioridade = 'baixa' | 'média' | 'alta';

interface Tarefa {
  id: number;
  titulo: string;
  responsavel: string;
  prioridade: Prioridade;
  concluida: boolean;
}

@Component({
  selector: 'app-exercise-13-task-list',
  standalone: false,
  styleUrl: './exercise-13-task-list.scss',
  templateUrl: './exercise-13-task-list.html',
})
export class Exercise13TaskList {
  tarefas: Tarefa[] = [
    {
      id: 1,
      titulo: 'Definir tema',
      responsavel: 'Ana',
      prioridade: 'alta',
      concluida: true,
    },
    {
      id: 2,
      titulo: 'Criar documentação',
      responsavel: 'Bruno',
      prioridade: 'média',
      concluida: false,
    },
    {
      id: 3,
      titulo: 'Montar apresentação',
      responsavel: 'Carlos',
      prioridade: 'baixa',
      concluida: false,
    },
    {
      id: 4,
      titulo: 'Implementar projeto',
      responsavel: 'Daniela',
      prioridade: 'alta',
      concluida: false,
    },
    {
      id: 5,
      titulo: 'Executar testes',
      responsavel: 'Eduardo',
      prioridade: 'média',
      concluida: true,
    },
    {
      id: 6,
      titulo: 'Revisar entrega',
      responsavel: 'Fernanda',
      prioridade: 'baixa',
      concluida: false,
    },
  ];

  get totalConcluidas(): number {
    return this.tarefas.filter((tarefa) => tarefa.concluida).length;
  }

  get totalPendentes(): number {
    return this.tarefas.filter((tarefa) => !tarefa.concluida).length;
  }

  alternarSituacao(tarefa: Tarefa): void {
    tarefa.concluida = !tarefa.concluida;
  }
}
