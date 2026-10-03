import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar';

@Component({
  selector: 'app-notificacoes',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './notificacoes.html',
  styleUrl: './notificacoes.css'
})
export class Notificacoes {

}