import { Login } from './../../model/Login';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
//import { Conta } from '../../model/Conta';
import { ContaService } from '../../services/conta.service';
import { LocalStorageUtils } from '../../utils/localstorage';

@Component({
  selector: 'app-conta-login',
  templateUrl: './conta-login.component.html',
  styleUrls: ['./conta-login.component.scss']
})
export class ContaLoginComponent implements OnInit {

  public LocalStorage = new LocalStorageUtils();

  formulario = this.formBuilder.group({
   // _id: [0],
    email: [''],
    senha: [''],
    //foto: new FormControl<string || null>('', { nonNullable: true }),
  });

  constructor(private formBuilder: NonNullableFormBuilder, // NonNullableFormBuilder
  private conta: ContaService,
  private barraAlerta : MatSnackBar,
  //private location: Location,
  private route: ActivatedRoute,
  private router: Router) {

  }

  ngOnInit(): void {
    const conta: Login = this.route.snapshot.data['login'];

  }


  logar(){
    console.log(this.formulario.value)
    this.conta.logar(this.formulario.value)
    .subscribe(resultado => {

      //sessionStorage.setItem('usuarioLogado', JSON.stringify(resultado));
      this.LocalStorage.salvarDadosLocaisUsuario(resultado);
      this.localizarPerfil(this.formulario.value.email!);
      this.sucessoSubmeter()
    }, error => this.falhouSubmeter(error))
  }

  localizarPerfil(email : string){
    this.conta.buscarPorEmail(email)
      .subscribe(resultado => {
        this.LocalStorage.salvarInformacoesPerfil(JSON.stringify(resultado));
        console.log("Encontrou"+ resultado)
      }, error => 
        console.log("Falhou"+ error)
      )
  }

  cancelarConta(){
   // this.location.back();
  }

  private sucessoSubmeter(){
    this.barraAlerta.open("Usuário logado com sucesso.", '', { duration:2000});
    this.router.navigate(['conta/perfil']);

  }
  private falhouSubmeter(error : String){
    this.barraAlerta.open("Não foi possível realizar login. "+ error, '',{ duration: 4000});
  }
}
