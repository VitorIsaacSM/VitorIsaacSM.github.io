import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.scss']
})
export class ProjetoComponent implements OnInit {

  @Input() titulo: string;
  @Input() descricao: string;
  @Input() websiteLink: string;
  @Input() repoLink: string;
  @Input() utilizado: string[];
  @Input() gif: string;
  @Input() imagem: string

  display: string = this.gif;

  constructor() { }

  ngOnInit() {
    this.display = this.gif;
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
