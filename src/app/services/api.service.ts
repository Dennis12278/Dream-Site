import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:5031';

  constructor(private http: HttpClient) {
  }

  listarDocumentos() {
    return this.http.get<any[]>(this.apiUrl + '/Documento');
  }

  criarDocumento(documento: any) {
    return this.http.post(this.apiUrl + '/Documento', documento);
  }

  listarNotificacoes() {
    return this.http.get<any[]>(this.apiUrl + '/Notificacao');
  }

  lerNotificacao(id: number) {
    return this.http.put(
      this.apiUrl + '/Notificacao/Ler/' + id,
      {}
    );
  }

  listarColecoes() {
    return this.http.get<any[]>(
      this.apiUrl + '/Colecao'
    );
  }

  criarColecao(colecao: any) {
    return this.http.post(
      this.apiUrl + '/Colecao',
      colecao
    );
  }

  editarColecao(colecao: any) {
    return this.http.put(
      this.apiUrl + '/Colecao',
      colecao
    );
  }

  excluirColecao(id: number) {
    return this.http.delete(
      this.apiUrl + '/Colecao/' + id
    );
  }
}
