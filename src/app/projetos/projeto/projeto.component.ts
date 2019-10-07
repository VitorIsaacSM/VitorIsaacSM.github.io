import { Component, OnInit, Input } from '@angular/core';
import { Projeto } from '../projeto';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.scss']
})
export class ProjetoComponent implements OnInit {

  @Input() projeto: Projeto;

  display: string;

  constructor() { }

  ngOnInit() {
    this.display = this.projeto.gif;
  }

  redirectTo(url: string) {
    window.open(url);
  }

  changeDisplayTo(image: string) {
    if(!image) {
      return;
    }

    this.display = image;
  }
}
