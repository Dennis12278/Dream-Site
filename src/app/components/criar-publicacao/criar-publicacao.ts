import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-criar-publicacao',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './criar-publicacao.html',
  styleUrl: './criar-publicacao.css'
})
export class CriarPublicacao {

  titulo = '';
  descricao = '';
  visibilidade = 'publica';

  arquivoSelecionado: File | null = null;
  capaSelecionada: File | null = null;

  capaPreview = '';

  constructor(
    private router: Router,
    private apiService: ApiService
  ) {
  }

  selecionarArquivo(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      this.arquivoSelecionado = input.files[0];

      if (this.arquivoSelecionado.type.startsWith('image/')) {
        this.capaPreview = URL.createObjectURL(this.arquivoSelecionado);
      } else {
        this.capaPreview = '';
      }
    }
  }

  escolherCapa(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      this.capaSelecionada = input.files[0];

      this.capaPreview = URL.createObjectURL(this.capaSelecionada);
    }
  }

  removerCapaEscolhida(): void {
    this.capaSelecionada = null;

    if (this.arquivoSelecionado?.type.startsWith('image/')) {
      this.capaPreview = URL.createObjectURL(this.arquivoSelecionado);
    } else {
      this.capaPreview = '';
    }
  }

  publicar(): void {

    if (this.titulo.trim() === '') {
      alert('Digite um título para a publicação.');
      return;
    }

    const documento = {
      idUsuario: 1,
      idTipoDocumento: 1,
      titulo: this.titulo,
      conteudo: this.descricao,
      revisado: false,
      publicado: true,
      visibilidade: this.visibilidade,
      dataPublicacao: new Date().toISOString()
    };

    this.apiService.criarDocumento(documento).subscribe({
      next: () => {
        alert('Publicação criada com sucesso!');

        this.router.navigate(['/minhas-publicacoes']);
      },

      error: erro => {
        console.error('Erro ao criar publicação:', erro);

        alert('Não foi possível criar a publicação.');
      }
    });
  }

  voltar(): void {
    this.router.navigate(['/minhas-publicacoes']);
  }
}