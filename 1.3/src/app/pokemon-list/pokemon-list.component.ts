import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemonList: any[]=[];
  constructor(private pokemonService: PokemonService) {}
  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe((response: any) =>{
      this.pokemonList= response.results;


    });
  }

}
