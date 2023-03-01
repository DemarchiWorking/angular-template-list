import { DOCUMENT } from '@angular/common';
import { Component, HostBinding, Inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IdentidadeCultural';

  //@Output()
  //private temaEscuro = false;

  /*
  @HostBinding('class')
  get modoTema(){
    return this.temaEscuro ? 'tema-escuro' : 'tema-luz';
  }
  */

  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2){

  }
  /*
  ngOnInit(): void {
    this.renderer.setAttribute(this.document.body,'class', 'tema-luz');

  }*/
  alterarTema(ativarEscuro: Boolean){//demarchialteracao abaixo
    const classeHospedeira = ativarEscuro ? 'tema-escuro' : 'tema-luz';
    this.renderer.setAttribute(this.document.body, 'class', classeHospedeira);

  }
}
