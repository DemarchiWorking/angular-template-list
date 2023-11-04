import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Amizade } from '../../model/amigos';
import { ContaService } from '../../services/conta.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErroComponent } from 'src/app/shared/components/erro/erro.component';
import { catchError } from 'rxjs/operators';
import { IdPaginacao } from '../../model/idPaginacao';
import { LocalStorageUtils } from '../../utils/localstorage';

@Component({
  selector: 'app-conta-amigos',
  templateUrl: './conta-amigos.component.html',
  styleUrls: ['./conta-amigos.component.scss']
})
export class ContaAmigosComponent implements OnInit {
  [x: string]: any;
  amigos$: Observable<Amizade[]> | null = null;
  public localStorageUtils = new LocalStorageUtils();
  readonly colunasExibidas = ['amizadeId','status'];


  constructor(
    private contaService: ContaService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private barraAlerta : MatSnackBar
    ) {
    this.atualizarPagina();
  
  }
  ngOnInit(): void {
  }


  atualizarPagina(){
    console.log(this.localStorageUtils.obtenInformacoesUsuario())
    var memoria = JSON.parse(this.localStorageUtils.obtenInformacoesUsuario())
    this.amigos$ = this.contaService.buscarAmigos(memoria)
    .pipe(
      catchError(error=>{
        this.deuError('Erro ao carregar serviços')
        return of([])
      })
      
    );    
    this.amigos$.subscribe(amig => console.log(amig));


  }
  deuError(erroMsg: string) {
    this.dialog.open(ErroComponent, {
      data: ""
    });
  }
}
/*
  submeterServico(){
    this.servico.salvar(this.formulario.value)
    .subscribe(resultado => this.sucessoSubmeter(), error => this.falhouSubmeter(error))
  }*/
  /*
  excluirServico(servico: Servicos){
  
      const dialogRef = this.dialog.open(DialogoConfirmacaoComponent, {
        data: "Deseja realmente excluir esse serviço ?",
      });
  
      dialogRef.afterClosed().subscribe((resultado : boolean) => {
        if(resultado){
          this.servicosService.excluir(servico.id.toString()).subscribe(
            ()=>{
  
              this.atualizarPagina();
              this.barraAlerta.open("Curso removido com Sucesso.", 'X', {
                duration:2000,
                verticalPosition: 'top',
                horizontalPosition: 'center'
  
              });
            },
            error => this.deuError('Erro ao excluir serviço')
          );
        }
  
  
      });
    }*/
/*
adicionarServico(){
  this.router.navigate(['novo'], {relativeTo: this.route});
  //this.router.navigate(['servicos/novo']);

}

editarServico(servico: Servicos){
  this.router.navigate(['editar', servico.id] , {relativeTo: this.route});

}
*/
