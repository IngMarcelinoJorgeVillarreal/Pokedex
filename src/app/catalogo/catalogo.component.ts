import { Component, Input, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { PokeColor, PokeName, PokeResultName, PokeServicesService } from '../PokeService/poke-services.service';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
const Pokeball = '<svg version="1.1" id="PokÃ©ball" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 595.3 594.1" style="enable-background:new 0 0 595.3 594.1;" xml:space="preserve"><style type="text/css"> .st0{fill:#FFFFFF;} .st1{fill:#DFDFDF;} .st2{fill:#FF1C1C;} .st3{fill:#DF1818;}</style><g id="PokÃ©ball_1_"> <g id="Colours">   <path id="Down" class="st0" d="M297.6,380.9c-40.4,0-74.1-28.6-82.1-66.6H81.1c9.5,110.5,102.2,197.2,215.1,197.2     s205.7-86.7,215.1-197.2H379.7C371.7,352.4,338,380.9,297.6,380.9z"/>   <path id="Shadow_Down" class="st1" d="M345.6,505.9c89.6-21,157.7-97.7,165.7-191.6h-53C453,399.5,408.3,471.7,345.6,505.9z"/>   <path id="Center" class="st0" d="M347.1,297L347.1,297C347,297,347,297,347.1,297c-0.1-6.1-1.2-11.9-3.2-17.3     c-7-18.8-25.1-32.1-46.3-32.1s-39.3,13.4-46.3,32.1c-2,5.4-3.1,11.2-3.1,17.3c0,0,0,0,0,0h0.1c0,0,0,0,0,0     c0,6.1,1.1,11.9,3.1,17.3c7,18.8,25.1,32.1,46.3,32.1c21.2,0,39.3-13.4,46.3-32.1C346,309,347.1,303.1,347.1,297     C347.1,297,347.1,297,347.1,297z"/>   <path id="Up" class="st2" d="M297.7,213.2c40.4,0,74.1,28.6,82.1,66.6h134.4C504.7,169.2,412,82.5,299,82.5S93.4,169.2,83.9,279.7     h131.7C223.6,241.7,257.3,213.2,297.7,213.2z"/>   <path id="Shadow_Up" class="st3" d="M458.3,279.7h55.8c-8.2-95.5-78.6-173.3-170.5-192.6C407.4,120.8,452.9,193.7,458.3,279.7z"/> </g> <path id="Line" d="M299,82.5c113,0,205.7,86.7,215.1,197.2H379.7c-8-38-41.7-66.6-82.1-66.6c-40.4,0-74.1,28.6-82.1,66.6H83.9   C93.4,169.2,186.1,82.5,299,82.5z M343.9,279.7c2,5.4,3.1,11.2,3.1,17.3c0,0,0,0,0,0h0.1c0,0,0,0,0,0c0,6.1-1.1,11.9-3.1,17.3   c-7,18.8-25.1,32.1-46.3,32.1c-21.2,0-39.3-13.4-46.3-32.1c-2-5.4-3.1-11.2-3.1-17.3c0,0,0,0,0,0h-0.1c0,0,0,0,0,0   c0-6.1,1.1-11.9,3.1-17.3c7-18.8,25.1-32.1,46.3-32.1S336.9,261,343.9,279.7z M296.2,511.6c-113,0-205.7-86.7-215.1-197.2h134.4   c8,38,41.7,66.6,82.1,66.6s74.1-28.6,82.1-66.6h131.7C501.9,424.8,409.2,511.6,296.2,511.6z M297.6,41.3   C156.4,41.3,41.9,155.8,41.9,297s114.5,255.7,255.7,255.7S553.4,438.3,553.4,297S438.9,41.3,297.6,41.3z"/></g></svg>'
const PokeEgg = '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"> <path d="M2405 5110 c-547 -85 -1069 -566 -1470 -1355 -265 -522 -429 -1101 -452 -1595 -18 -419 103 -861 334 -1210 96 -145 172 -237 299 -361 821 -799 2127 -782 2924 37 64 66 136 146 161 179 328 430 477 942 429 1470 -42 461 -193 970 -425 1440 -384 776 -886 1264 -1420 1381 -85 19 -298 26 -380 14z m405 -285 c178 -57 337 -153 515 -313 125 -112 122 -104 80 -222 -25 -68 -27 -85 -23 -185 7 -181 71 -333 192 -456 107 -109 286 -206 440 -240 67 -15 59 -2 145 -233 88 -235 165 -533 203 -781 21 -141 18 -506 -6 -630 -108 -582 -474 -1066 -1002 -1325 -179 -89 -426 -158 -626 -176 l-77 -7 -6 39 c-38 245 -177 495 -395 714 -151 152 -250 215 -479 305 -203 80 -362 154 -704 328 -171 87 -304 161 -310 172 -17 29 -16 476 1 580 81 503 238 957 480 1387 308 549 680 915 1053 1037 108 35 147 40 294 37 119 -3 152 -7 225 -31z m902 -768 c71 -105 198 -316 198 -329 0 -32 -170 103 -210 167 -30 48 -58 136 -66 207 -9 78 -2 74 78 -45z m-2602 -2723 c252 -125 397 -191 596 -270 144 -57 210 -95 309 -181 174 -150 345 -418 371 -580 l6 -40 -63 8 c-562 74 -1055 402 -1344 894 -51 86 -135 265 -135 286 0 13 -29 26 260 -117z"/> <path d="M1530 3765 c-155 -34 -289 -135 -355 -267 -42 -84 -51 -138 -36 -223 32 -179 172 -348 351 -421 95 -39 212 -39 292 -1 134 65 221 243 222 457 0 158 -45 272 -146 365 -92 86 -205 117 -328 90z m167 -290 c59 -68 68 -197 23 -318 -23 -60 -41 -77 -86 -77 -96 0 -244 152 -244 250 0 92 133 197 235 186 31 -4 47 -13 72 -41z"/> <path d="M2990 3423 c-310 -52 -652 -410 -799 -836 -61 -174 -75 -271 -75 -492 0 -236 13 -298 93 -460 138 -276 376 -433 831 -546 238 -59 360 -44 528 64 266 172 504 559 588 957 25 122 23 300 -5 405 -46 174 -148 341 -301 496 -111 112 -187 171 -327 255 -209 126 -394 180 -533 157z m184 -273 c271 -93 556 -330 674 -560 101 -196 93 -406 -27 -695 -133 -323 -380 -585 -553 -585 -68 0 -318 63 -432 109 -172 69 -277 148 -360 268 -111 163 -140 382 -85 655 71 355 315 700 569 805 68 28 139 29 214 3z"/> </g> </svg> '
declare var require: any;
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {
  ActiveSearch: boolean = false;
  Text: string = "";
  resultsLength = 0;
  Pokemones: PokeResultName[] = [];
  PokemonInfo!: PokeResultName;
  Columns: string[] = [];
  StatsName: string[] = [];
  Stats: string[] = [];
  Poke!: PokeName;
  Detail: boolean = false;
  colorBack: PokeColor[] = [];
  colorBackInfo: string = "";
  colorInfo: string = "";
  MoreInfo: any[] = []
  FilterData: PokeResultName[] = [];
  ColumnsNew: string[] = [];   
  profi: boolean = false;
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, public PokeService: PokeServicesService) {
    iconRegistry.addSvgIconLiteral('Pokeball', sanitizer.bypassSecurityTrustHtml(Pokeball));
    iconRegistry.addSvgIconLiteral('PokeEgg', sanitizer.bypassSecurityTrustHtml(PokeEgg));
  }

  ngOnInit() {
    // P.resource('api/v2/pokemon?offset=20&limit=20')
    P.resource('api/v2/pokemon/')
      .then((response: PokeName) => {
        this.Poke = response;
        this.Pokemones = response.results;
        this.FilterData = this.Pokemones;
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
          this.Changes(index, response['id'])
        })
        .catch(function (error: any) {
          console.log('There was an ERROR: ', error);
        });

    }
    // console.log(this.colorBack);
    this.FilterData = this.Pokemones;

  }

  Changes(index: number, id: number) {
    // console.log(index,id);
    P.resource(this.Pokemones[index].species.url)
      .then((response: any) => {
        this.MoreInfo.push(response);
        // console.log("aca",response);
        if (this.Pokemones[index].id === response['id']) {

          // var element : HTMLElement = document.getElementById(response['name'] + response['id'].toString())!;
          // if(element){
          // // console.log(element,response['name'] , response['id']);

          // // element.style.backgroundColor = response['color']['name'];
          // // element.style.borderRadius = "10.25rem";
          // if (response['color']['name'] === 'white' || response['color']['name'] === 'yellow') {
          //   // element.style.color = "black";
          // element.setAttribute("style", "color:black; border-radius: 10.25rem; background-color:"+response['color']['name']+";");
          // // element.setAttribute("styel", "background-color:"+response['color']['name']+";")

          // } else {
          //   // element.style.color = "white";
          // element.setAttribute("style", "color:white; border-radius: 10.25rem; background-color:"+response['color']['name']+";");
          // }
          // }

          // let element = document.getElementsByClassName(response['name'] + response['id'].toString());
          // if(element){
          // if (response['color']['name'] === 'white' || response['color']['name'] === 'yellow') {          
          //   this.colorBack.push({ id: response['id'], back: response['color']['name'],color: 'black'});
          // } else {            
          //   this.colorBack.push({ id: response['id'], back: response['color']['name'],color: 'white'});

          // }



          // }else{
          //   // console.log(element,response['name'] , response['id']);
          // }
        }
      });
  }
  Next(e: boolean) {
    this.MoreInfo = [];
    // this.Pokemones = [];
    console.log(e);
    if (e) {
      this.Poke.next = this.Poke.next.replace('https://pokeapi.co/', '');
      console.log(this.Poke.next);
      P.resource(this.Poke.next)
        .then((response: PokeName) => {
          this.Poke = response;
          this.Poke.previous = response.previous;
          this.Pokemones = response.results;
          this.FilterData = this.Pokemones;
          this.Columns = Object.getOwnPropertyNames(this.Pokemones[0]);
          this.resultsLength = this.Pokemones.length;
          // console.log(this.Pokemones,this.resultsLength,this.Columns);      

          this.GetValues();
        });
    }
    else {
      this.MoreInfo = [];

      this.Poke.previous = this.Poke.previous.replace('https://pokeapi.co/', '');
      console.log(this.Poke.previous);
      P.resource(this.Poke.previous)
        .then((response: PokeName) => {
          this.Poke = response;
          this.Poke.next = response.next;
          this.Pokemones = response.results;
          this.FilterData = this.Pokemones;
          this.Columns = Object.getOwnPropertyNames(this.Pokemones[0]);
          this.resultsLength = this.Pokemones.length;
          // console.log(this.Pokemones);    
          this.colorBack = [];

          this.GetValues();
        });
    }

  }

  Details(e: string) {
    this.Detail = true;
    e = e.replace('https://pokeapi.co/', '');
    P.resource(e)
      .then((response: PokeResultName) => {
        console.log(response);
        this.PokemonInfo = response;
        this.ColumnsNew = Object.getOwnPropertyNames(this.Pokemones[0]);
        console.log(this.PokemonInfo);
        // this.PokemonInfo.sprites = response['sprites'];
        //     this.PokemonInfo.species = response['species'];
        //     this.PokemonInfo.stats = response['stats'];
        //     this.PokemonInfo.types = response['types'];
        //     this.PokemonInfo.id = response['id'];
        this.PokemonInfo.species.url = this.PokemonInfo.species.url.replace('https://pokeapi.co/', '');
        P.resource(this.PokemonInfo.species.url)
          .then((response: any) => {
            if (this.PokemonInfo.id === response['id']) {
              this.colorBackInfo = response['color']['name'];

              if (response['color']['name'] === 'white' || response['color']['name'] === 'yellow') {
                this.colorInfo = "black";
              } else {
                this.colorInfo = "white";
              }

            }
          });
      });
  }
  
  Close() {
    this.Detail = !this.Detail;
    this.MoreInfo = [];
    this.GetValues();
  }
  filter(event: KeyboardEvent) {
    console.log(event);
    switch (event.code) {
      case "Backspace":
        if (this.Text.length > 0) {

          // this.Text.slice(0, -1)
          this.Text = this.Text.substring(0, this.Text.length - 1);
        }
        break;
      case "Key" + event.key.toUpperCase():
        this.Text += event.key;
        break;
      case "Numpad" + event.key:
        this.Text += event.key;
        break;
      default:
        break;
    }
    console.log(this.Text);
    // this.Pokemones = this.FilterData.filter(item =>{
    //   var columns= Object.getOwnPropertyNames(this.FilterData[0]);
    //   for (let index = 0; index < columns.length; index++) {
    //     let val = columns[index];
    //     var colValue:any = this.FilterData[val];
    //     if(!this.Text || (!!colValue && colValue.toString().toLowerCase().indexOf(this.Text) !== -1)){
    //       return true
    //     }
        
    //   }
    // })
    this.Pokemones = this.FilterData.filter(item=>
      typeof this.Text === "string" &&  item.name.includes(this.Text)
      || (item.id === +this.Text)
      // if(typeof this.Text === "string" &&  item.name.includes(this.Text)){        
      // }else if(item.id === +this.Text){        
      // }
      // console.log(this.Pokemones,this.FilterData)
      // if(event.location === 0){
      //   this.Pokemones = this.FilterData;
      // }
    );
    console.log(this.Pokemones,this.FilterData);
    if(this.Pokemones.length === 0){this.Pokemones = this.FilterData}
  }
  Profile(){    
    this.profi = !this.profi
  }
  CloseP(){
    this.Detail = false;
    this.profi = false;
    
    // this.GetValues();
  }

}
