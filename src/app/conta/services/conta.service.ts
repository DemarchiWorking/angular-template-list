import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs/operators';
import { Conta } from '../model/Conta';
import { Login } from '../model/Login';
import { LocalStorageUtils } from '../utils/localstorage';
import { IdPaginacao } from '../model/idPaginacao';
import { Amizade } from '../model/amigos';
@Injectable({
  providedIn: 'root'
})

export class ContaService {


  private readonly API ='https://localhost:44301/api' // '/api/conta'; //demarchialteracao
  

  private localStorageUtils = new LocalStorageUtils()
  constructor(private httpClient: HttpClient) {  }


  
  logar(registro: Partial<Login>){
    return this.httpClient.post<Login>(this.API+"/login", registro).pipe(first());

  }

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

    return this.httpClient.post<Conta>(this.API+"/cadastrar", registro).pipe(first());
  }


  excluir(id: string){
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }

  buscarPorEmail(email: string){
    // Authorized Header Cabecalho 
    var token = this.localStorageUtils.obtenTokenUsuario();
    var headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.get(`${this.API}/usuario/buscarPorEmail?email=${email}`, { headers }).pipe(first());
  }

  buscarAmigos(requisicao: Partial<IdPaginacao>){
    console.log(requisicao)
    return this.httpClient.get<Amizade[]>(this.API+`/amigo/porId?id=${requisicao.usuarioId}&pagina=1&tamanhoPagina=10`).pipe(first());
  }
  


  //Bearer ${token}obtenTokenUsuario
}
