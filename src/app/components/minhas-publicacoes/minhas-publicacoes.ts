import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../sidebar/sidebar';

@Component({
  selector: 'app-minhas-publicacoes',
  standalone: true,
  imports: [
    FormsModule,
    SidebarComponent
  ],
  templateUrl: './minhas-publicacoes.html',
  styleUrl: './minhas-publicacoes.css'
})
export class MinhasPublicacoes {

  tipoSelecionado = 'Todos';

  statusSelecionado = 'Todos';


  // =========================================
  // FILTRO POR TIPO
  // =========================================

  abrirTipo(): void {

    console.log('Tipo selecionado:', this.tipoSelecionado);

  }


  // =========================================
  // FILTRO POR STATUS
  // =========================================

  abrirStatus(): void {

    console.log('Status selecionado:', this.statusSelecionado);

  }


  // =========================================
  // CRIAR PUBLICAÇÃO
  // =========================================

  criarPublicacao(): void {

    console.log('Criar publicação');

  }

}
