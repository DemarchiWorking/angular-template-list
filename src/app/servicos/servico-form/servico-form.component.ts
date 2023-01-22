import { ServicosService } from './../services/servicos.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormControl, NonNullableFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-servico-form',
  templateUrl: './servico-form.component.html',
  styleUrls: ['./servico-form.component.scss']
})
export class ServicoFormComponent implements OnInit {

  formulario = this.formBuilder.group({
    titulo: [''],
    categoria: [''],
    descricao: [''],
    foto: [''],
    //foto: new FormControl<string || null>('', { nonNullable: true }),
  });



  constructor(private formBuilder: NonNullableFormBuilder, // NonNullableFormBuilder
    private servico: ServicosService,
    private barraAlerta : MatSnackBar,
    private location: Location) {


   }

  ngOnInit(): void {

  }

  submeterServico(){
    this.servico.salvar(this.formulario.value)
    .subscribe(resultado => this.sucessoSubmeter(), error => this.falhouSubmeter(error))
  }

  cancelarServico(){
    this.location.back();
  }


  private sucessoSubmeter(){
    this.barraAlerta.open("Curso salvo com Sucesso.", '', { duration:2000});
  }
  private falhouSubmeter(error : String){
    this.barraAlerta.open("Erro ao salvar Serviço. "+ error, '',{ duration: 4000});
  }
}
//'id','titulo','descricao','foto','criacao','acoes'
