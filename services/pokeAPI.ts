import { Pokemon } from "../interfaces/Pokemon";
import { LogBox } from "react-native";
import { Species } from "../interfaces/Species";

LogBox.ignoreLogs(["Setting a timer"]);

export async function getPokemon(
  loadedPokemon: Pokemon[],
  offset: number
): Promise<Pokemon[]> {
  var Pokedex = require("pokedex-promise-v2");
  var P = new Pokedex();

  var interval = {
    limit: 10,
    offset: offset,
  };
  var pokemonList = await P.getPokemonsList(interval);
  return await convertResultsToPokemon(P, pokemonList.results, loadedPokemon);
}

async function convertResultsToPokemon(
  P: any,
  results: any[],
  loadedPokemon: Pokemon[]
): Promise<Pokemon[]> {
  for (let i = 0; i < results.length; i++) {
    var pokemonInfo = await P.getPokemonByName(results[i].name);
    loadedPokemon.push(pokemonInfo);
  }
  loadedPokemon.sort((x) => x.id);
  return loadedPokemon;
}

export async function getSpecies(name: string): Promise<Species> {
  var Pokedex = require("pokedex-promise-v2");
  var P = new Pokedex();

  var species = await P.getPokemonSpeciesByName(name);
  return species;
}
