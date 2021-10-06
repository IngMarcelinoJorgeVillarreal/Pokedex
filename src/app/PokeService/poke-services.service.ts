import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AppConfig, APP_CONFIG } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class PokeServicesService {

  constructor(public http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) { }

  GetNames(Data: string) {
    return this.http.get<PokeName[]>(`${this.config.PokeApi}${Data}`);
  }
}
export interface PokeName {
  count: number,
  id:number,
  next: string,
  previous: string,
  results: []
}
export interface PokeResultName {
  name: string,
  url: string,
  sprites: sprites,
  species:species,
  stats:stats,
  id:number,
  types:types
}
export interface sprites{
  back_default:string;
  back_shiny:string;
  front_default:string;
  front_shiny:string;
  other: other
}
export interface other{
  dream_world:string,
  'official-artwork': front_default,
}
export interface front_default {
  front_default:string;
}
export interface species {
  name:string
  url: string,
  
}
export interface stats {
  base_stat: number,
  effort: number,
  stat: stat[],
}
export interface stat {
  name:string
  url: string,
}
export interface types {
  slot:number
  type: typesType[],
}
export interface typesType {
  name:string
  url: string,
}