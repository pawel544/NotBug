import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiurl= 'https://pokeapi.co/api/v2/';

  constructor( private http: HttpClient ) { }
  getPokemonList(): Observable<any> {
    return  this.http.get( '${this.apiUrl}pokemon/${name}');
  }

getPokemonDetails(name: string): Observable<any> {
  return this.http.get('${this.apiUrl}pokemon/${name}');
  }
}