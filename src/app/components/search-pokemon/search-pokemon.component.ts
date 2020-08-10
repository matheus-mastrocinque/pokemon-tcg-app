import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonsService } from '../../services/pokemons.service';
import { Cards } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.scss']
})
export class SearchPokemonComponent implements OnInit {

  name;
  cards;
  pokemon;
  pokeArr = [];
  pokemonResult: Cards[] = [];
  notFound: boolean;

  constructor(private nameRoute: ActivatedRoute, private pokemonService: PokemonsService) {
  }

  ngOnInit() {
    this.getCardsPokemons();
  }

  getCardsPokemons() {
    this.pokemonService.getCards().subscribe((data) => {
      this.cards = data.cards;
      if (this.cards) {
        this.nameRoute.params.subscribe(params => {
          this.pokemonResult = this.searchPokemon(params[`name`]);
        });
      }
    }
    );
  }

  searchPokemon(keyword: string) {
    this.notFound = false;
    keyword = keyword.toLowerCase();
    for (this.pokemon of this.cards) {
      this.name = this.pokemon.name.toLowerCase();
      if (this.name.indexOf(keyword) >= 0) {
        this.pokeArr.push(this.pokemon);
      }
    }

    if (this.pokeArr.length === 0) {
      this.notFound = true;
    }
    return this.pokeArr;
  }

}
