import { Component, Input, OnInit } from '@angular/core';
import { ContaService } from '../../services/conta.service';
import { IdPaginacao } from '../../model/idPaginacao';
import { LocalStorageUtils } from '../../utils/localstorage';
import { Observable } from 'rxjs';
import { Amizade } from '../../model/amigos';

@Component({
  selector: 'app-conta-seguidores',
  templateUrl: './conta-seguidores.component.html',
  styleUrls: ['./conta-seguidores.component.scss']
})
export class ContaSeguidoresComponent implements OnInit {

  public localStorageUtils = new LocalStorageUtils();

  @Input() amigos: Amizade[] = []; 
  public amizades = this.amigos;
  //public usuarioLogadoId = JSON.parse(this.localStorageUtils.obtenInformacoesUsuario()).usuarioId;

  colunasExibidas = ['amizadeId','status'];
  constructor() {
   }


  ngOnInit(): void {
    //var tst = JSON.parse(this.localStorageUtils.obtenInformacoesUsuario()).usuarioId
    //console.log("xxxx"+tst);
  }

 
  /*}
    var memoria = JSON.parse(this.localStorageUtils.obtenInformacoesUsuario()).usuarioId
    
    if(memoria != null){
      
      var requisicao : IdPaginacao = {
        usuarioId: memoria,
        pagina: 1,
        tamanhoPagina: 10
      }
      
      this.conta.buscarAmigos(requisicao)
      .subscribe(resultado => {
        var dados = JSON.parse(JSON.stringify(resultado))
        var listaAmigos! : Amizade[];

        console.log(dados);
        dados.forEach((amigo : Amizade) => {
          listaAmigos.push(amigo)
          console.log(amigo.amizadeId)
          });
        
        this.amigos = listaAmigos;
        //console.log(listaAmigos);
        
        console.log("Encontrou"+ dados)
      }, error => 
        console.log("Falhou"+ error)
      )
    }
  }*/
}
