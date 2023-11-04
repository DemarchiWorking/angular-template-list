import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs/operators';
import { Resposta, Servicos } from '../model/servicos';


@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  private readonly API = 'https://localhost:44301/api/servicos';
  constructor(private httpClient: HttpClient) {  }


  listar() {
    /*
    this.httpClient.get(`https://localhost:44301/api/servicos`)
    .subscribe(resultado => console.log(resultado));

    console.log(this.API);
    console.log(`${this.httpClient.get + this.API}`)

    return this.httpClient.get<Servicos[]>(this.API)
    .pipe(
      first(),
      tap(servicos => console.log(servicos))
    );
    */

    return this.httpClient.get<Servicos[]>(this.API)
    .pipe(
      first(),
      tap(servicos => console.log(servicos))
    );
  }

  carregarPorId(id: string){
    return this.httpClient.get<Servicos>(`${this.API}/por/?idServico=${id}`);
  }

  salvar(registro: Partial<Servicos>){
    if(registro.id){
      return this.atualizar(registro);
    }
    else{
      return this.criar(registro);
    }
  }

  private atualizar(registro: Partial<Servicos>){
    alert(registro.titulo);
    return this.httpClient.put<Servicos>(`${this.API}?idServico=${registro.id}`, registro).pipe(first());
  }

  private criar(registro: Partial<Servicos>){
    return this.httpClient.post<Servicos>(this.API, registro).pipe(first());
  }

  excluir(id: string){
    return this.httpClient.delete(`${this.API}?idServico=${id}`).pipe(first());
  }


}
