import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs/operators';
import { Servicos } from '../model/servicos';
@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  private readonly API = '/api/servicos';
  constructor(private httpClient: HttpClient) {  }

  listar() {
    return this.httpClient.get<Servicos[]>(this.API)
    .pipe(
      first(),
      tap(servicos => console.log(servicos))
    );
  }

  salvar(registro: Partial<Servicos>){
      return this.httpClient.post<Servicos>(this.API, registro).pipe(first());
  }

}
