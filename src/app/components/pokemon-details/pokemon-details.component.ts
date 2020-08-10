import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonsService } from '../../services/pokemons.service';
import { Cards } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {
  cards;
  pokemon: Cards[] = [];
  error: any;

  constructor(public ParamsRouter: ActivatedRoute, public pokemonService: PokemonsService) { }

  ngOnInit() {
    this.getCardsPokemons();
  }

  getIdPokemon() {
    this.ParamsRouter.params.subscribe(params => {
      this.getPokemonDetails(params.id);
    });
  }

  getCardsPokemons() {
    this.pokemonService.getCards().subscribe((data) => {
      this.cards = data.cards;
      if (this.cards) {
        this.getIdPokemon();
      }
      }, error => {
        this.error = error;
      }
    );
  }

  public getPokemonDetails(id) {

    /** Filtrando o pokemon selecionado por id */
    this.pokemon = this.cards.filter(item => item.id === id);
  }

}
