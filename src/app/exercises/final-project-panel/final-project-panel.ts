import { Component } from '@angular/core';

type StatusProjeto =
  | 'planejamento'
  | 'desenvolvimento'
  | 'testes'
  | 'concluído';

interface Projeto {
  id: number;
  titulo: string;
  equipe: string;
  nota: number | null;
  status: StatusProjeto;
  entregue: boolean;
}

@Component({
  selector: 'app-final-project-panel',
  standalone: false,
  styleUrl: './final-project-panel.scss',
  templateUrl: './final-project-panel.html',
})
export class FinalProjectPanel {
  mostrarConcluidos: boolean = true;

  projetos: Projeto[] = [
    {
      id: 1,
      titulo: 'Sistema de biblioteca',
      equipe: 'Equipe Alfa',
      nota: 8.5,
      status: 'concluído',
      entregue: true,
    },
    {
      id: 2,
      titulo: 'Aplicativo de tarefas',
      equipe: 'Equipe Beta',
      nota: 5.5,
      status: 'testes',
      entregue: false,
    },
    {
      id: 3,
      titulo: 'Portal acadêmico',
      equipe: 'Equipe Gama',
      nota: null,
      status: 'desenvolvimento',
      entregue: false,
    },
    {
      id: 4,
      titulo: 'Controle de estoque',
      equipe: 'Equipe Delta',
      nota: 7,
      status: 'planejamento',
      entregue: false,
    },
  ];

  get totalConcluidos(): number {
    return this.projetos.filter((projeto) => projeto.status === 'concluído')
      .length;
  }

  alternarProjetosConcluidos(): void {
    this.mostrarConcluidos = !this.mostrarConcluidos;
  }
}
