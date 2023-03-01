import { ContaService } from '../../services/conta.service';
import { DialogoConfirmacaoComponent } from '../../../shared/components/dialogo-confirmacao/dialogo-confirmacao.component';
import { Conta } from '../../model/Conta';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { MatDialog } from '@angular/material/dialog';
import { ErroComponent } from 'src/app/shared/components/erro/erro.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.scss']
})
export class ContaComponent implements OnInit {
  [x: string]: any;

  conta$: Observable<Conta[]> | null = null;
  readonly colunasExibidas = ['_id','nome','email','password', 'confirmPassword','foto','criacao','acoes'];

  //servicosService: ServicosService;

  constructor(
    private ContaService: ContaService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private barraAlerta : MatSnackBar
    ) {
    this.atualizarPagina();

  }


  deuError(erroMsg: string) {
    this.dialog.open(ErroComponent, {
      data: ""
    });
  }

  atualizarPagina(){
    this.conta$ = this.ContaService.listar()
    .pipe(
      catchError(error=>{
        this.deuError('Erro ao carregar contas')
        return of([])
      })
    );
  }

  ngOnInit(): void {

  }

  adicionarConta(){
    this.router.navigate(['novo'], {relativeTo: this.route});
    //this.router.navigate(['servicos/novo']);

  }

  editarConta(conta: Conta){
    this.router.navigate(['editar', conta._id] , {relativeTo: this.route});

  }

  excluirConta(conta: Conta){

      const dialogRef = this.dialog.open(DialogoConfirmacaoComponent, {
        data: "Deseja realmente excluir essa conta ?",
      });

      dialogRef.afterClosed().subscribe((resultado : boolean) => {
        if(resultado){
          this.contaService.excluir(conta._id.toString()).subscribe(
            ()=>{

              this.atualizarPagina();
              this.barraAlerta.open("Conta removida com Sucesso.", 'X', {
                duration:2000,
                verticalPosition: 'top',
                horizontalPosition: 'center'

              });
            },
           // error => this.deuError('Erro ao excluir serviço')
          );
        }


      });
    }

  console(){
    console.log('testa');
    alert('testa');
  }
}

