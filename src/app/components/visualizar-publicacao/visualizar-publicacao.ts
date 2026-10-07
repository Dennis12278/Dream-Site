import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visualizar-publicacao',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './visualizar-publicacao.html',
  styleUrl: './visualizar-publicacao.css'
})
export class VisualizarPublicacao implements OnInit {

  publicacao: any = null;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
    const publicacao = history.state.publicacao;

    if (publicacao) {
      this.publicacao = publicacao;
    }
  }

  voltar(): void {
    this.router.navigate(['/']);
  }

}
