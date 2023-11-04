import { Conta } from '../../model/Conta';
import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-conta-lista',
  templateUrl: './conta-lista.component.html',
  styleUrls: ['./conta-lista.component.scss']
})
export class ContaListaComponent implements OnInit {


  @Input() conta: Conta[] = [];

  @Output() adicionar = new EventEmitter(false);
  @Output() editar = new EventEmitter(false);
  @Output() excluir = new EventEmitter(false);

  colunasExibidas = ['_id','nome','email','senha', 'foto','criacao','acoes'];


  constructor() { }

  ngOnInit(): void {
  }

  adicionarConta(){
    this.adicionar.emit(true);
  }


  editarConta(conta : Conta){
    this.editar.emit(conta);

  }

  excluirConta(conta: Conta){
    this.excluir.emit(conta);
  }

}
