import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
  pokemonDetails: any;
  constructor(private route: ActivatedRoute, private pokemonService: PokemonService){}
  ngOnInit(): void {
    const pokemonName= this.route.snapshot.paramMap.get('name');
    this.pokemonService.getPokemonDetails(pokemonName!).subscribe(details =>{
      this.pokemonDetails= details;
    });
  }

}
