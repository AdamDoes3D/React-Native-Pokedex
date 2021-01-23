import React from "react";
import { StyleSheet } from "react-native";
import { Pokemon } from "../interfaces/Pokemon";
import { Species } from "../interfaces/Species";
import { Text, View } from "./Themed";
import * as Progress from "react-native-progress";

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
    return toTitleCase(s);
  }

  function removeDashSplitter(s: string) {
    var s = s.split("-").join(" ");
    return toTitleCase(s);
  }

  return (
    <View style={{ backgroundColor: "#F5F5F5" }}>
      <Text style={[styles.padText, styles.bold]}>{"Description"}</Text>
      <Text style={styles.padText}>
        {removeLineBreak(
          species?.flavor_text_entries.filter((x) => x.language.name == "en")[0]
            .flavor_text ?? ""
        )}
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
          <View style={[styles.rowContainer, { paddingVertical: 0 }]}>
            <Progress.Bar
              progress={(species?.gender_rate ?? 0) / 8}
              width={175}
              height={10}
              color="#FF77DD"
              unfilledColor="#3355FF"
              borderColor="black"
            ></Progress.Bar>
          </View>
          <View style={[styles.rowContainer, { paddingBottom: 10 }]}>
            <Text style={{ color: "#FF77DD" }}>
              Female {((species?.gender_rate ?? 0) / 8) * 100}%
            </Text>
            <Text style={{ color: "#3355FF" }}>
              Male {((8 - (species?.gender_rate ?? 0)) / 8) * 100}%
            </Text>
          </View>
          <View style={styles.rowContainer}>
            {species?.egg_groups.map((g) => {
              return <Text key={g.name}>{toTitleCase(g.name)}</Text>;
            })}
          </View>
          <View style={styles.rowContainer}>
            <Text>{toTitleCase(species?.growth_rate.name ?? "")}</Text>
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
