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

  function heightConverter(height: number) {
    var realFeet = (height * 3.93700787) / 12;
    var feet = Math.floor(realFeet);
    var inches = Math.round((realFeet - feet) * 12);
    let inchFeet: string = feet + "ft " + inches + "in";
    return inchFeet;
  }

  function weightConverter(weight: number) {
    var pounds = (weight / 10) * 2.205;
    return pounds.toFixed(1) + "lbs";
  }

  return (
    <View>
      <Text>{species?.flavor_text_entries[0].flavor_text}</Text>
      <Text style={styles.aboutInfo}>
        {"Height: "}
        {heightConverter(pokemon.height)}
        {" (" + (pokemon.height / 10).toFixed(1) + "m)"}
      </Text>
      <Text>
        {"Weight: "}
        {weightConverter(pokemon.weight)}
        {" (" + (pokemon.weight / 10).toFixed(1) + "kg)"}
      </Text>
      <View>
        <Text>{"Abilities:"}</Text>
        {getAbilities()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  aboutInfo: {
    fontSize: 16,
    color: "gray",
  },
});
