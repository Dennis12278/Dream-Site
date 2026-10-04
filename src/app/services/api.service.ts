import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://localhost:7211';

  constructor(private http: HttpClient) {
  }

  listarDocumentos() {
    return this.http.get<any[]>(this.apiUrl + '/Documento');
  }

  criarDocumento(documento: any) {
    return this.http.post(this.apiUrl + '/Documento', documento);
  }

}