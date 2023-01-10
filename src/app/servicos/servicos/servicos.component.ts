import { ServicosService } from '../services/servicos.service';
import { Servicos } from './../model/servicos';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent implements OnInit {

  servicos: Observable<Servicos[]>;
  colunasExibidas = ['titulo','descricao','foto','criacao'];

  //servicosService: ServicosService;

  constructor(private servicosService: ServicosService) {
    //this.servicosService = new ServicosService();
    this.servicos = this.servicosService.listar();

  }

  ngOnInit(): void {

  }
}

