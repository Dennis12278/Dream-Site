import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Leitura {
  titulo: string;
  capa: string;
  lido: string;
  total: string;
  progresso: number;
  lidoHa: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  historicoMinimizado = false;
  menuHistoricoAberto = false;
  paginaHistorico = 0;

  leituras: Leitura[] = [
    {
      titulo: 'Conteúdo recente',
      capa: '',
      lido: '0',
      total: '0',
      progresso: 0,
      lidoHa: 'agora'
    },
    {
      titulo: 'Resumo de estudos',
      capa: '',
      lido: '0',
      total: '0',
      progresso: 0,
      lidoHa: 'agora'
    },
    {
      titulo: 'Material de estudo',
      capa: '',
      lido: '0',
      total: '0',
      progresso: 0,
      lidoHa: 'agora'
    },
    {
      titulo: 'Anotações recentes',
      capa: '',
      lido: '0',
      total: '0',
      progresso: 0,
      lidoHa: 'agora'
    },
    {
      titulo: 'Leitura recente',
      capa: '',
      lido: '0',
      total: '0',
      progresso: 0,
      lidoHa: 'agora'
    },
    {
      titulo: 'Outro conteúdo',
      capa: '',
      lido: '0',
      total: '0',
      progresso: 0,
      lidoHa: 'agora'
    }
  ];

  constructor(private router: Router) {}

  irParaTitulos(): void {
    this.router.navigate(['/titulos-seguidos']);
  }

  irParaCalendario(): void {
    this.router.navigate(['/calendario']);
  }

  irParaMeuPerfil(): void {
    this.router.navigate(['/meu-perfil']);
  }

  irParaHistorico(): void {
    this.router.navigate(['/historico-leitura']);
  }

  abrirMenuHistorico(event: MouseEvent): void {
    event.stopPropagation();
    this.menuHistoricoAberto = !this.menuHistoricoAberto;
  }

  fecharMenuHistorico(): void {
    this.menuHistoricoAberto = false;
  }

  minimizarHistorico(): void {
    this.historicoMinimizado = true;
    this.menuHistoricoAberto = false;
  }

  mostrarHistorico(): void {
    this.historicoMinimizado = false;
    this.menuHistoricoAberto = false;
  }

  proximaPaginaHistorico(): void {
    if (this.paginaHistorico < 1) {
      this.paginaHistorico++;
    }
  }

  paginaAnteriorHistorico(): void {
    if (this.paginaHistorico > 0) {
      this.paginaHistorico--;
    }
  }

  get leiturasExibidas(): Leitura[] {
    const inicio = this.paginaHistorico * 5;

    return this.leituras.slice(inicio, inicio + 5);
  }
}
