import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

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
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  documentos: any[] = [];

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

  constructor(
    private router: Router,
    private apiService: ApiService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.carregarDocumentos();
  }

  carregarDocumentos(): void {

    this.apiService.listarDocumentos().subscribe({
      next: documentos => {

        this.documentos = documentos
          .filter(documento => documento.publicado === true)
          .sort((a, b) => {

            const dataA = new Date(a.dataPublicacao).getTime();
            const dataB = new Date(b.dataPublicacao).getTime();

            return dataB - dataA;
          });

        this.changeDetectorRef.detectChanges();
      },

      error: erro => {
        console.error('Erro ao buscar documentos:', erro);
      }
    });

  }

  tempoPublicacao(data: string): string {

    if (!data) {
      return '';
    }

    const agora = new Date().getTime();
    const publicacao = new Date(data).getTime();

    const diferenca = agora - publicacao;

    const minutos = Math.floor(diferenca / 60000);

    if (minutos < 1) {
      return 'agora';
    }

    if (minutos < 60) {
      return minutos + (minutos === 1 ? ' minuto atrás' : ' minutos atrás');
    }

    const horas = Math.floor(minutos / 60);

    if (horas < 24) {
      return horas + (horas === 1 ? ' hora atrás' : ' horas atrás');
    }

    const dias = Math.floor(horas / 24);

    if (dias < 30) {
      return dias + (dias === 1 ? ' dia atrás' : ' dias atrás');
    }

    const meses = Math.floor(dias / 30);

    return meses + (meses === 1 ? ' mês atrás' : ' meses atrás');
  }

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

  irParaPublicacoes(): void {
    this.router.navigate(['/minhas-publicacoes']);
  }

  irParaGrupos(): void {
    this.router.navigate(['/grupos-seguidos']);
  }

  irParaColecoes(): void {
    this.router.navigate(['/colecoes']);
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