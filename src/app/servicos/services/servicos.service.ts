import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Servicos } from '../model/servicos';
@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  private readonly API = '../../../assets/servicos.json';
  constructor(private httpClient: HttpClient) {  }

  listar() {
    return this.httpClient.get<Servicos[]>(this.API);
  }

}
