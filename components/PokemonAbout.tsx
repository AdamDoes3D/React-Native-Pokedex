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
      if (pokemon.abilities[i].is_hidden)
        return (
          <Text
            style={[{ fontStyle: "italic", color: "#585858" }]}
            key={a.ability.name}
          >
            {toTitleCase(a.ability.name)}
          </Text>
        );
      else
        return <Text key={a.ability.name}>{toTitleCase(a.ability.name)}</Text>;
    });

  function toTitleCase(name: string) {
    var titleCase = name.charAt(0).toUpperCase() + name.slice(1);
    return removeDashSplitter(titleCase);
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

  function removeDashSplitter(s: string) {
    var s = s.split("-").join(" ");
    return s;
  }

  return (
    <View style={{ backgroundColor: "#F5F5F5" }}>
      <Text style={[styles.padText, styles.bold]}>{"Description"}</Text>
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
      <Text style={[styles.padText, styles.bold]}>{"Breeding"}</Text>
      <View style={styles.gridContainer}>
        <View style={[styles.columnContainer]}>
          <Text style={[styles.aboutInfo]}>{"Gender"}</Text>
          <Text style={[styles.aboutInfo]}>{"Egg Groups"}</Text>
          <Text style={[styles.aboutInfo]}>{"Growth Rate"}</Text>
        </View>
        <View style={[styles.columnContainer, { flex: 2 }]}>
          <View style={styles.rowContainer}>
            <Text></Text>
            <Text></Text>
          </View>
          <View style={styles.rowContainer}>
            <Text>{toTitleCase(species?.egg_groups[0].name ?? "")}</Text>
            <Text>{toTitleCase(species?.egg_groups[1].name ?? "")}</Text>
          </View>
          <View style={styles.rowContainer}>
            <Text>
              {toTitleCase(removeDashSplitter(species?.growth_rate.name ?? ""))}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  aboutInfo: {
    fontSize: 16,
    color: "#888888",
  },
  gridContainer: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 10,
    backgroundColor: "transparent",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 5,
    backgroundColor: "transparent",
  },
  columnContainer: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    paddingHorizontal: 20,
    backgroundColor: "transparent",
  },
  padText: {
    padding: 5,
  },
  bold: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
