import { Amizade } from '../model/amigos';
import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ContaService } from '../services/conta.service';
import { Conta } from '../model/Conta';

@Injectable({
  providedIn: 'root'
})
export class AmizadeResolver implements Resolve<Amizade> {

  constructor(private conta: ContaService){

  }

  // dmrc3
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Amizade> {
    return of();
  }
}
//ng g resolver servicos/guarda/servico
