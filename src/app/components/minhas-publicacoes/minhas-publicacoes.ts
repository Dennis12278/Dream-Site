import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-minhas-publicacoes',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SidebarComponent
  ],
  templateUrl: './minhas-publicacoes.html',
  styleUrl: './minhas-publicacoes.css'
})
export class MinhasPublicacoes implements OnInit {

  tipoSelecionado = 'Todos';

  statusSelecionado = 'Todos';

  publicacoes: any[] = [];

  publicacaoSelecionada: any = null;

  constructor(
    private router: Router,
    private apiService: ApiService
  ) {
  }

  ngOnInit(): void {

    const publicacao = history.state.publicacao;

    if (publicacao) {
      this.publicacaoSelecionada = publicacao;
    }

    this.carregarPublicacoes();
  }

  carregarPublicacoes(): void {

    this.apiService.listarDocumentos().subscribe({
      next: documentos => {
        this.publicacoes = documentos;
      },

      error: erro => {
        console.error('Erro ao buscar publicações:', erro);
      }
    });
  }

  abrirTipo(): void {
    console.log('Tipo selecionado:', this.tipoSelecionado);
  }

  abrirStatus(): void {
    console.log('Status selecionado:', this.statusSelecionado);
  }

  criarPublicacao(): void {
    this.router.navigate(['/criar-publicacao']);
  }

  abrirPublicacao(publicacao: any): void {
    this.publicacaoSelecionada = publicacao;
  }

  voltarParaPublicacoes(): void {
    this.publicacaoSelecionada = null;
  }

}