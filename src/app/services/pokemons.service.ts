import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cards } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})

export class PokemonsService {

  pokemon;
  name;
  cards: Cards[] = [];
  error: any;
  pokeArr = [];

  constructor(
    public httpClient: HttpClient,
    public pokemonService: PokemonsService
  ) {
    this.getCards();
  }

  public getCards(): Observable<any> {
    return this.httpClient.get(`https://api.pokemontcg.io/v1/cards`);
  }

  public getter() {
    this.pokemonService.getCards().subscribe((data) => {
      this.cards = data.cards;
    }, error => {
      this.error = error;
    });
  }

  searchPokemon(keyword: string) {
    keyword = keyword.toLowerCase();
    for (this.pokemon of this.cards) {
      this.name = this.pokemon[0].name.toLowerCase();
      if (this.name.indexOf(keyword) >= 0) {
        this.pokeArr.push(this.pokemon);
      }
    }

    return this.pokeArr;
  }
}
