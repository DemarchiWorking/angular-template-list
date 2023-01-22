import { ServicosService } from '../services/servicos.service';
import { Servicos } from './../model/servicos';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { MatDialog } from '@angular/material/dialog';
import { ErroComponent } from 'src/app/shared/components/erro/erro.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent implements OnInit {

  servicos$: Observable<Servicos[]>;
  readonly colunasExibidas = ['id','titulo','categoria','descricao','foto','criacao','acoes'];

  //servicosService: ServicosService;

  constructor(
    private servicosService: ServicosService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
    ) {
    //this.servicosService = new ServicosService();
    this.servicos$ = this.servicosService.listar()
    .pipe(
      catchError(error=>{
        this.onError('Erro ao carregar serviços')
        return of([])
      })
    );

  }


  onError(erroMsg: string) {
    this.dialog.open(ErroComponent, {
      data: ""
    });
  }
  ngOnInit(): void {

  }

  adicionarServico(){
    this.router.navigate(['novo'], {relativeTo: this.route});
    //this.router.navigate(['servicos/novo']);
  }

  console(){
    console.log('testa');
    alert('testa');
  }
}

