import { Routes } from '@angular/router';

import { MeuPerfil } from './components/meu-perfil/meu-perfil';
import { MinhasPublicacoes } from './components/minhas-publicacoes/minhas-publicacoes';
import { CriarPublicacao } from './components/criar-publicacao/criar-publicacao';
import { TitulosSeguidos } from './components/titulos-seguidos/titulos-seguidos';
import { PerfilPublico } from './components/perfil-publico/perfil-publico';
import { UsuariosSeguidos } from './components/usuarios-seguidos/usuarios-seguidos';
import { GruposSeguidos } from './components/grupos-seguidos/grupos-seguidos';
import { HistoricoLeitura } from './components/historico-leitura/historico-leitura';
import { Colecoes } from './components/colecoes/colecoes';
import { Notificacoes } from './components/notificacoes/notificacoes';
import { Calendario } from './components/calendario/calendario';
import { Home } from './components/home/home';
import { Configuracoes } from './components/configuracoes/configuracoes';

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },

  { path: 'meu-perfil', component: MeuPerfil },
  { path: 'perfil-publico', component: PerfilPublico },
  { path: 'criar-publicacao', component: CriarPublicacao },
  { path: 'titulos-seguidos', component: TitulosSeguidos },
  { path: 'usuarios-seguidos', component: UsuariosSeguidos },
  { path: 'grupos-seguidos', component: GruposSeguidos },
  { path: 'historico-leitura', component: HistoricoLeitura },
  { path: 'colecoes', component: Colecoes },
  { path: 'notificacoes', component: Notificacoes },
  { path: 'minhas-publicacoes', component: MinhasPublicacoes },

  { path: 'configuracoes', component: Configuracoes },

  { path: 'calendario', component: Calendario }
];
