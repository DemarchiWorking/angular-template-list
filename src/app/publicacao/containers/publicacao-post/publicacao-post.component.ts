import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicacao-post',
  templateUrl: './publicacao-post.component.html',
  styleUrls: ['./publicacao-post.component.scss']
})
export class PublicacaoPostComponent implements OnInit {
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
