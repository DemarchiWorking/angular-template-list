import { Servicos } from './../../../servicos/model/servicos';
import { Component, OnInit } from '@angular/core';
import { Resposta } from 'src/app/servicos/model/servicos';
import { LocalStorageUtils } from '../../utils/localstorage';
import { ContaService } from '../../services/conta.service';

@Component({
  selector: 'app-conta-perfil',
  templateUrl: './conta-perfil.component.html',
  styleUrls: ['./conta-perfil.component.scss']
})
export class ContaPerfilComponent implements OnInit {
  public LocalStorage = new LocalStorageUtils();

  public result = JSON.parse(this.LocalStorage.obtenInformacoesUsuario());
  public titulo = this.result.titulo;
  public nome =   this.result.nome;
  public email =  this.result.email;
  public telefone =this.result.telefone;

  // = sessionStorage.getItem('usuarioLogado')?.replace("[","")?.replace("]","").split('"')[9];

  //public telefone  = sessionStorage.getItem('usuarioLogado')?.replace("[","")?.replace("]","").split('"')[19];
  //public titulo  = sessionStorage.getItem('usuarioLogado')?.replace("[","")?.replace("]","").split('"')[19];
  //public email  = sessionStorage.getItem('usuarioLogado')?.replace("[","")?.replace("]","").split('"')[11];
  //public usuario  =  JSON.parse(JSON.stringify(sessionStorage.getItem('usuarioLogado')?.replace("[","")?.replace("]","")));


  constructor(private conta: ContaService) {  
    console.log(this.result + " ============ " + this.result.titulo)
  }

  ngOnInit(): void {

    //let  nome  = sessionStorage.getItem('usuarioLogado')?.replace("[","")?.replace("]","");
    //alert(nome)
    //usuario = dados;
    var variable_name:boolean;

    if(0 < 1)
    {
        variable_name=true;
    }
    else
     {
        variable_name=false;
     }
  }


  
}


