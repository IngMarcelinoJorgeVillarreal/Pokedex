import {InjectionToken} from "@angular/core";

export let APP_CONFIG = new InjectionToken("app.config");

export interface AppConfig{
    PokeApi:string;
}

export const AppConfig: AppConfig = {
    PokeApi:"https://pokeapi.co/api/v2/"
}