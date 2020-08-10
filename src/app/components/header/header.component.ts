import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private routes: Router) { }

  ngOnInit() {
  }

  /** Recupera palavra digitada no filtro de busca */
  searchPokemon(keyword: string) {
    this.routes.navigate(['search', keyword]);
  }

}
