import { Servicos } from './../model/servicos';
import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ServicosService } from '../services/servicos.service';

@Injectable({
  providedIn: 'root'
})
export class ServicoResolver implements Resolve<Servicos> {

  constructor(private service: ServicosService){

  }

  // dmrc3
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Servicos> {
    if(route.params && route.params['id']){
      return this.service.carregarPorId(route.params['id']);
    }

    return of({ _id:0,id_usuario: 0,titulo:'', categoria:'',
    descricao:'', foto:'',criacao: new Date()});

  }
}

//ng g resolver servicos/guarda/servico
