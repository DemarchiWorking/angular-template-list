import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs/operators';
import { Conta } from '../model/Conta';
@Injectable({
  providedIn: 'root'
})
export class ContaService {

  private readonly API ='/api/usuarios' // '/api/conta'; //demarchialteracao
  constructor(private httpClient: HttpClient) {  }

  listar() {
    return this.httpClient.get<Conta[]>(this.API)
    .pipe(
      first(),
      tap(conta => console.log(conta))
    );
  }

  carregarPorId(id: string){
    return this.httpClient.get<Conta>(`${this.API}/${id}`);
  }

  salvar(registro: Partial<Conta>){
    if(registro._id){
      return this.atualizar(registro);
    }
    else{
      return this.criar(registro);
    }
  }

  private atualizar(registro: Partial<Conta>){
    return this.httpClient.put<Conta>(`${this.API}/${registro._id}`, registro).pipe(first());
  }

  private criar(registro: Partial<Conta>){

    return this.httpClient.post<Conta>(this.API, registro).pipe(first());
  }


  excluir(id: string){
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }


}
