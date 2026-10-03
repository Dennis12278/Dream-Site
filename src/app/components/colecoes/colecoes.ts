import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar';

@Component({
  selector: 'app-colecoes',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './colecoes.html',
  styleUrl: './colecoes.css'
})
export class Colecoes {

}