import { DialogoConfirmacaoComponent } from './../../../shared/components/dialogo-confirmacao/dialogo-confirmacao.component';
import { ServicosService } from '../../services/servicos.service';
import { Servicos } from '../../model/servicos';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { MatDialog } from '@angular/material/dialog';
import { ErroComponent } from 'src/app/shared/components/erro/erro.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent implements OnInit {
  [x: string]: any;

  servicos$: Observable<Servicos[]> | null = null;
  readonly colunasExibidas = ['id','titulo','categoria','descricao','foto','criacao','acoes'];


  constructor(
    private servicosService: ServicosService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private barraAlerta : MatSnackBar
    ) {
    this.atualizarPagina();

  }

  atualizarPagina(){
    this.servicos$ = this.servicosService.listar()
    .pipe(
      catchError(error=>{
        this.deuError('Erro ao carregar serviços')
        return of([])
      })
    );
  }

  ngOnInit(): void {

          /*
        const observer = {
          next: valor => console.log("next", valor),
          error: erro => console.log("Erro"),
          complete: () => console.log("FIM")
        }
        const obs = this.oservable("Eduardo","test");
        obs.subscribe(observer); */
  }


  deuError(erroMsg: string) {
    this.dialog.open(ErroComponent, {
      data: ""
    });
  }
  oservable(titulo: string, categoria: string) : Observable<Servicos>{
        if(titulo != ""){
              return new Observable(subscriber => {
                let servico : Servicos = {
                  id : "1",
                  titulo: titulo,
                  usuarioId : "",
                  categoria: categoria,
                  criacao: new Date(),
                  descricao: "",
                  foto: "",
                };
                setTimeout(() => {
                  subscriber.next(servico)
                }, 1000);
              })
        }
        else{
          return new Observable(subscriber => {
            let servico : Servicos = {
              id : "1",
              titulo: titulo,
              usuarioId : "",
              categoria: categoria,
              criacao: new Date(),
              descricao: "",
              foto: "",
            };
            setTimeout(() => {
              subscriber.next(servico)
            }, 1000);
          })
        }
    }


  adicionarServico(){
    this.router.navigate(['novo'], {relativeTo: this.route});
    //this.router.navigate(['servicos/novo']);

  }

  editarServico(servico: Servicos){
    this.router.navigate(['editar', servico.id] , {relativeTo: this.route});

  }
  /*
  submeterServico(){
    this.servico.salvar(this.formulario.value)
    .subscribe(resultado => this.sucessoSubmeter(), error => this.falhouSubmeter(error))
  }*/
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
    }

  console(){
    console.log('testa');
    alert('testa');
  }
}

