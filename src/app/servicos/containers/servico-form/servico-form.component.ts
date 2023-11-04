import { ActivatedRoute } from '@angular/router';
import { ServicosService } from '../../services/servicos.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NonNullableFormBuilder } from '@angular/forms';
import { Servicos } from '../../model/servicos';

@Component({
  selector: 'app-servico-form',
  templateUrl: './servico-form.component.html',
  styleUrls: ['./servico-form.component.scss']
})
export class ServicoFormComponent implements OnInit {

  formulario = this.formBuilder.group({
    id: [''],
    titulo: [''],
    categoria: [''],
    descricao: [''],
    foto: [''],
    //foto: new FormControl<string || null>('', { nonNullable: true }),
  });



  constructor(private formBuilder: NonNullableFormBuilder, // NonNullableFormBuilder
    private servico: ServicosService,
    private barraAlerta : MatSnackBar,
    private location: Location,
    private route: ActivatedRoute) {


   }

  ngOnInit(): void {
    const servico: Servicos = this.route.snapshot.data['servico'];
    console.log(servico.titulo);
    console.log(servico.id);

    this.formulario.setValue({
      id: servico.id.toString(),
      titulo: servico.titulo.toString(),
      categoria: servico.categoria.toString(),
      descricao: servico.descricao.toString(),
      foto: servico.foto.toString()
    });
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
