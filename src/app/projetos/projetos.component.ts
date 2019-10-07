import { Component, OnInit } from '@angular/core';
import { Projeto, MEUS_PROJETOS } from './projeto';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss']
})
export class ProjetosComponent implements OnInit {

  projetos: Projeto[] = MEUS_PROJETOS;

  constructor() { }

  ngOnInit() {
  }

}