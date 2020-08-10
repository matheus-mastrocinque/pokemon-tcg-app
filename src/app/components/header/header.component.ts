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

  searchPokemon(keyword: string) {
    console.log(keyword);
    this.routes.navigate(['search', keyword]);
  }

}
