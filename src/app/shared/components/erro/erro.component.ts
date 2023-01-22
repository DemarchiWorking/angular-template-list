import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-erro',
  templateUrl: './erro.component.html',
  styleUrls: ['./erro.component.scss']
})
export class ErroComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {}

  ngOnInit(): void {
  }

}
