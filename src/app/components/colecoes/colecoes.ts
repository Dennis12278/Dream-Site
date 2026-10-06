import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../sidebar/sidebar';

interface Colecao {
  id: number;
  usuario: string;
  titulo: string;
  descricao: string;
  tipo: string;
  quantidadeTitulos: number;
  criadoHa: string;
  atualizadoHa: string;
  capas: string[];
}

@Component({
  selector: 'app-colecoes',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SidebarComponent
  ],
  templateUrl: './colecoes.html',
  styleUrl: './colecoes.css'
})
export class Colecoes {

  abaAtiva = 'meu';

  pesquisando = '';

  tipoSelecionado = 'Todos';

  ordenacaoSelecionada = 'Mais recentes';

  criandoColecao = false;

  nomeColecao = '';

  descricaoColecao = '';

  visibilidade = 'publica';

  buscaTitulo = '';

  minhasColecoes: Colecao[] = [];

  colecoesCurtidas: Colecao[] = [];

  constructor() {}

  get colecoesAtuais(): Colecao[] {

    if (this.abaAtiva === 'curtido') {
      return this.colecoesCurtidas;
    }

    return this.minhasColecoes;
  }

  get colecoesFiltradas(): Colecao[] {

    let colecoes = [...this.colecoesAtuais];

    if (this.pesquisando.trim() !== '') {

      const pesquisa =
        this.pesquisando.toLowerCase().trim();

      colecoes = colecoes.filter(colecao =>
        colecao.titulo.toLowerCase().includes(pesquisa) ||
        colecao.descricao.toLowerCase().includes(pesquisa) ||
        colecao.usuario.toLowerCase().includes(pesquisa)
      );

    }

    if (this.tipoSelecionado !== 'Todos') {

      colecoes = colecoes.filter(
        colecao =>
          colecao.tipo === this.tipoSelecionado
      );

    }

    if (this.ordenacaoSelecionada === 'Título') {

      colecoes.sort((a, b) =>
        a.titulo.localeCompare(b.titulo)
      );

    }

    if (this.ordenacaoSelecionada === 'Mais antigas') {

      colecoes.reverse();

    }

    return colecoes;
  }

  selecionarAba(aba: string): void {

    this.abaAtiva = aba;

    this.pesquisando = '';

    this.tipoSelecionado = 'Todos';

    this.ordenacaoSelecionada = 'Mais recentes';

  }

  abrirNovaColecao(): void {

    this.criandoColecao = true;

    this.nomeColecao = '';

    this.descricaoColecao = '';

    this.visibilidade = 'publica';

    this.buscaTitulo = '';

  }

  cancelarCriacao(): void {

    this.criandoColecao = false;

    this.nomeColecao = '';

    this.descricaoColecao = '';

    this.buscaTitulo = '';

  }

  criarColecao(): void {

    if (this.nomeColecao.trim() === '') {

      alert('Digite um nome para a coleção.');

      return;

    }

    const novaColecao: Colecao = {

      id: Date.now(),

      usuario: 'Você',

      titulo: this.nomeColecao.trim(),

      descricao:
        this.descricaoColecao.trim(),

      tipo: 'Todos',

      quantidadeTitulos: 0,

      criadoHa: 'agora',

      atualizadoHa: 'agora',

      capas: []

    };

    this.minhasColecoes.unshift(novaColecao);

    this.abaAtiva = 'meu';

    this.criandoColecao = false;

    this.nomeColecao = '';

    this.descricaoColecao = '';

    this.buscaTitulo = '';

  }

  excluirColecao(colecao: Colecao): void {

    const confirmar =
      confirm(
        'Deseja excluir esta coleção?'
      );

    if (!confirmar) {
      return;
    }

    this.minhasColecoes =
      this.minhasColecoes.filter(
        item => item.id !== colecao.id
      );

  }

  redefinirFiltros(): void {

    this.pesquisando = '';

    this.tipoSelecionado = 'Todos';

    this.ordenacaoSelecionada = 'Mais recentes';

  }

}
