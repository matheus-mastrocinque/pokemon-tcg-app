import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { Cards } from 'src/app/models/pokemon.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

  cards: Cards[] = [];
  error: any;

  constructor(
    public pokemonsService: PokemonsService,
    public ParamsRouter: ActivatedRoute
    ) {}

    ngOnInit() {
      this.getter();
    }

    public getter() {
      this.pokemonsService.getCards().subscribe((data) => {
        this.cards = data.cards;
        this.cards = this.cards.sort((a, b) => (a.name < b.name) ? -1 : 1);
      }, error => {
        this.error = error;
      });
  }
}
