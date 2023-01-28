import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs/operators';
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

  carregarPorId(id: string){
    return this.httpClient.get<Servicos>(`${this.API}/${id}`);
  }

  salvar(registro: Partial<Servicos>){
    if(registro._id){
      return this.atualizar(registro);
    }
    else{
      return this.criar(registro);
    }
  }

  private atualizar(registro: Partial<Servicos>){
    return this.httpClient.put<Servicos>(`${this.API}/${registro._id}`, registro).pipe(first());
  }

  private criar(registro: Partial<Servicos>){
    return this.httpClient.post<Servicos>(this.API, registro).pipe(first());
  }

  excluir(id: string){
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }


}
