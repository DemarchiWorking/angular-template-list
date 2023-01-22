import { Servicos } from './../model/servicos';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servicos-lista',
  templateUrl: './servicos-lista.component.html',
  styleUrls: ['./servicos-lista.component.scss']
})
export class ServicosListaComponent implements OnInit {


  @Input() servicos: Servicos[] = [];

  colunasExibidas = ['id','titulo','categoria','descricao','foto','criacao','acoes'];


  constructor(private router: Router,
    private route: ActivatedRoute) { }

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
