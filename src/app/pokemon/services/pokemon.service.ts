import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IDetail } from '../models/detail.model';
import { Result, IResponseServer } from '../models/response.model';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private API_SERVER: string

  constructor(private http: HttpClient) {
    this.API_SERVER = environment.baseUrl;
  }

  public getAllPokemon(): Observable<Result[]> {
    return this.http
      .get<IResponseServer>(this.API_SERVER)
      .pipe(map((res) => res.results));
  }

  public getPokemon(id: string): Observable<Pokemon> {
    return this.http.get<IDetail>(`${this.API_SERVER}/${id}`).pipe(
      map((res) => {
        return {
          id: res.id,
          name: res.name,
          specie: res.species.name,
          height: res.height,
          weight: res.weight,
          image: res.sprites.other?.dream_world.front_default,
          stats: res.stats
        };
      })
    );
  }
}
