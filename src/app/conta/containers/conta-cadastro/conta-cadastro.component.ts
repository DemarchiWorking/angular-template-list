import { ContaService } from './../../services/conta.service';
import { ContaComponent } from '../conta/conta.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NonNullableFormBuilder } from '@angular/forms';
import { Conta } from '../../model/Conta';


@Component({
  selector: 'app-conta-cadastro',
  templateUrl: './conta-cadastro.component.html',
  styleUrls: ['./conta-cadastro.component.scss']
})
export class ContaCadastroComponent implements OnInit {

  formulario = this.formBuilder.group({
    _id: [0],
    nome: [''],
    email: [''],
    password: [''],
    confirmPassword: [''],
    foto: [''],
    //foto: new FormControl<string || null>('', { nonNullable: true }),
  });

  constructor(private formBuilder: NonNullableFormBuilder, // NonNullableFormBuilder
  private conta: ContaService,
  private barraAlerta : MatSnackBar,
  private location: Location,
  private route: ActivatedRoute) {

 }

  ngOnInit(): void {
    const conta: Conta = this.route.snapshot.data['conta'];

  }

  submeterConta(){
    console.log(this.formulario.value)
    this.conta.salvar(this.formulario.value)
    .subscribe(resultado => this.sucessoSubmeter(), error => this.falhouSubmeter(error))
  }

  cancelarConta(){
    this.location.back();
  }

  private sucessoSubmeter(){
    this.barraAlerta.open("Usuário cadastrado com Sucesso.", '', { duration:2000});
  }
  private falhouSubmeter(error : String){
    this.barraAlerta.open("Erro ao cadastrar Usuário. "+ error, '',{ duration: 4000});
  }
}
