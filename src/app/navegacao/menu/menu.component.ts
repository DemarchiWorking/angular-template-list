import { Component, OnInit, EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { LocalStorageUtils } from 'src/app/conta/utils/localstorage';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public LocalStorage = new LocalStorageUtils();
  readonly modoEscuro = new EventEmitter<boolean>();
  showFiller = false;
  //
  mostrarMenu : Boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    constructor(private breakpointObserver: BreakpointObserver) {}

    ativarModoEscuro({ checked }: MatSlideToggleChange){
      this.modoEscuro.emit(checked);
    }

  ngOnInit(): void {
  }

  deslogar(){
    this.LocalStorage.limparDadosLocaisUsuario();
    window.location.href = "/";
  }

}
