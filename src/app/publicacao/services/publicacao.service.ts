import { Publicacao } from './../model/Publicacao';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublicacaoService {

  private readonly API ='/api/publicacoes' // '/api/conta'; //demarchialteracao
  constructor(private httpClient: HttpClient) {  }

  listar() {
    return this.httpClient.get<Publicacao[]>(this.API)
    .pipe(
      first(),
      tap(publicacao => console.log(publicacao))
    );
  }

  carregarPorId(id: string){
    return this.httpClient.get<Publicacao>(`${this.API}/${id}`);
  }

  salvar(registro: Partial<Publicacao>){
    if(registro._id){
      return this.atualizar(registro);
    }
    else{
      return this.criar(registro);
    }
  }

  private atualizar(registro: Partial<Publicacao>){
    return this.httpClient.put<Publicacao>(`${this.API}/${registro._id}`, registro).pipe(first());
  }

  private criar(registro: Partial<Publicacao>){

    return this.httpClient.post<Publicacao>(this.API, registro).pipe(first());
  }

  excluir(id: string){
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }
}
