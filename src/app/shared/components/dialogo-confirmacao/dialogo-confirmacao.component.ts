import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogo-confirmacao',
  templateUrl: './dialogo-confirmacao.component.html',
  styleUrls: ['./dialogo-confirmacao.component.scss']
})
export class DialogoConfirmacaoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogoConfirmacaoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) {}

  ngOnInit(): void {
  }

  confirmar(resultado: boolean): void {
    this.dialogRef.close(resultado);
  }

}
