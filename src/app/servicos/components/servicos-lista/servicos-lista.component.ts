import { Servicos } from '../../model/servicos';
import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-servicos-lista',
  templateUrl: './servicos-lista.component.html',
  styleUrls: ['./servicos-lista.component.scss']
})
export class ServicosListaComponent implements OnInit {


  @Input() servicos: Servicos[] = [];

  @Output() adicionar = new EventEmitter(false);
  @Output() editar = new EventEmitter(false);
  @Output() excluir = new EventEmitter(false);

  colunasExibidas = ['id','titulo','categoria','descricao','foto','criacao','acoes'];


  constructor() { }

  ngOnInit(): void {
  }

  adicionarServico(){
    this.adicionar.emit(true);
  }


  editarServico(servico : Servicos){
    console.log(servico);
    this.editar.emit(servico);
    //
  }

  excluirServico(servico: Servicos){
    this.excluir.emit(servico);
  }

  console(){
    console.log('testa');
    alert('testa');
  }
}
