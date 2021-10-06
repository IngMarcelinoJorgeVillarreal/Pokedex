import { Component, OnInit } from '@angular/core';
import { PokeName, PokeResultName, PokeServicesService } from '../PokeService/poke-services.service';

declare var require: any;
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {
  //https://pokeapi.co/api/v2/pokemon?offset=20&limit=20
  resultsLength = 0;
  Pokemones: PokeResultName[] = [];
  Columns: string[] = [];
  StatsName: string[] = [];
  Stats: string[] = [];
  Poke!: PokeName;
  constructor(public PokeService: PokeServicesService) { }

  ngOnInit() {
    // P.resource('api/v2/pokemon?offset=20&limit=20')
    P.resource('api/v2/pokemon/')
      .then((response: PokeName) => {
        this.Poke = response;
        this.Pokemones = response.results;
        this.Columns = Object.getOwnPropertyNames(this.Pokemones[0]);
        this.resultsLength = this.Pokemones.length;
        console.log(this.Pokemones, this.resultsLength, this.Columns);
        this.GetValues();
      });

  }
  GetValues() {
    for (let index = 0; index < this.Pokemones.length; index++) {

      P.getPokemonByName(this.Pokemones[index].name)
        .then((response: any) => {
          // console.log(response);
          this.Pokemones[index].sprites = response['sprites'];
          this.Pokemones[index].species = response['species'];
          this.Pokemones[index].stats = response['stats'];
          this.Pokemones[index].types = response['types'];
          this.Pokemones[index].id = response['id'];
          this.Pokemones[index].species.url = this.Pokemones[index].species.url.replace('https://pokeapi.co/', '');
          this.Changes(index,response['id'])

        })
        .catch(function (error: any) {
          console.log('There was an ERROR: ', error);
        });

    }
  }
  Changes(index:number,id:number){
    // console.log(index,id);
    P.resource(this.Pokemones[index].species.url)
            .then((response: any) => {
              console.log("aca",response);
              if (this.Pokemones[index].id === response['id']) {
                let element = <HTMLElement> document.getElementById(response['name']+response['id'].toString());
                if(element){
                element.style.backgroundColor = response['color']['name'];
                element.style.borderRadius = "10.25rem";
                if (response['color']['name'] === 'white'|| response['color']['name'] === 'yellow') {
                  element.style.color = "black";
                } else {
                  element.style.color = "white";
                }
              }}
            });
  }
  Next(e: boolean) {
    this.Pokemones = [];    
    console.log(e);
    if (e) {
      this.Poke.next = this.Poke.next.replace('https://pokeapi.co/', '');
      console.log(this.Poke.next);
      P.resource(this.Poke.next)
        .then((response: PokeName) => {
          this.Poke = response;
          this.Pokemones = response.results;
          this.Columns = Object.getOwnPropertyNames(this.Pokemones[0]);
          this.resultsLength = this.Pokemones.length;
          // console.log(this.Pokemones,this.resultsLength,this.Columns);       
          this.GetValues();
        });
    }
    else {
      
      this.Poke.previous = this.Poke.previous.replace('https://pokeapi.co/', '');
      console.log(this.Poke.previous);
      P.resource(this.Poke.previous)
        .then((response: PokeName) => {
          this.Poke = response;
          this.Pokemones = response.results;
          this.Columns = Object.getOwnPropertyNames(this.Pokemones[0]);
          this.resultsLength = this.Pokemones.length;
          // console.log(this.Pokemones);    
             
          this.GetValues();
        });
    }

  }

}
