import React from "react";
import { StyleSheet } from "react-native";
import { round } from "react-native-reanimated";
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
      if (pokemon.abilities[i].is_hidden)
        return (
          <Text
            style={[styles.padText, { fontStyle: "italic" }]}
            key={a.ability.name}
          >
            {toTitleCase(a.ability.name)}
          </Text>
        );
      else
        return (
          <Text style={styles.padText}>{toTitleCase(a.ability.name)}</Text>
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

  function removeLineBreak(s: string) {
    var s = s.split("\n").join(" ");
    return s;
  }

  return (
    <View>
      <Text style={styles.padText}>
        {removeLineBreak(species?.flavor_text_entries[0].flavor_text ?? "")}
      </Text>
      <View style={styles.gridContainer}>
        <View style={[styles.columnContainer]}>
          <Text style={[styles.aboutInfo]}>{"Height"}</Text>
          <Text style={[styles.aboutInfo]}>{"Weight"}</Text>
          <Text style={[styles.aboutInfo]}>{"Abilities"}</Text>
        </View>
        <View style={[styles.columnContainer, { flex: 2 }]}>
          <View style={styles.rowContainer}>
            <Text>{heightConverter(pokemon.height)}</Text>
            <Text>{" (" + (pokemon.height / 10).toFixed(1) + "m)"}</Text>
          </View>
          <View style={styles.rowContainer}>
            <Text>{weightConverter(pokemon.weight)}</Text>
            <Text>{" (" + (pokemon.weight / 10).toFixed(1) + "kg)"}</Text>
          </View>
          <View style={styles.rowContainer}>{getAbilities()}</View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  aboutInfo: {
    fontSize: 16,
    color: "gray",
  },
  gridContainer: {
    display: "flex",
    flexDirection: "row",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 5,
  },
  columnContainer: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    paddingHorizontal: 20,
  },
  padText: {
    padding: 5,
  },
});
