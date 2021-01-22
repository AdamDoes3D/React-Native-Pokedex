import React from "react";
import { StyleSheet } from "react-native";
import { Pokemon } from "../interfaces/Pokemon";
import { Species } from "../interfaces/Species";
import { Text, View } from "./Themed";

export default function PokemonAbout({
  pokemon,
  species,
}: {
  pokemon: Pokemon;
  species: Species | undefined;
}) {
  const getAbilities = () =>
    pokemon.abilities.map((a, i) => {
      return (
        <View key={a.ability.name}>
          <Text>{toTitleCase(a.ability.name)}</Text>
        </View>
      );
    });

  function toTitleCase(name: string) {
    var titleCase = name.charAt(0).toUpperCase() + name.slice(1);
    return titleCase;
  }

  return (
    <View>
      <Text>{species?.flavor_text_entries[0].flavor_text}</Text>
      <Text>
        {"Height:"}
        {(pokemon.height / 10).toFixed(1)}
        {" m"}
      </Text>
      <Text>
        {"Weight:"}
        {(pokemon.weight / 10).toFixed(1)}
        {" kg"}
      </Text>
      <View>
        <Text>{"Abilities:"}</Text>
        {getAbilities()}
      </View>
    </View>
  );
}
