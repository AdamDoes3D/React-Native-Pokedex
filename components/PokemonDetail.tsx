import React from "react";
import { StyleSheet, Image } from "react-native";
import { Pokemon } from "../interfaces/Pokemon";
import { Text, View } from "./Themed";
import * as Progress from "react-native-progress";
import TypeDetail from "./Types";
import GenerationGallery from "./ImagesByGeneration";

export default function PokemonDetail({ pokemon }: { pokemon: Pokemon }) {
  const statColors = [
    "#FF0000", //hp
    "#F08030", //attack
    "#F8D030", //def
    "#6890F0", //sp. att
    "#A7DB8D", //sp. def
    "#F85888", //speed
  ];

  const getStats = () =>
    pokemon.stats.map((o, i) => {
      return (
        <View key={o.stat.name} style={styles.statContainer}>
          <View key={i} style={styles.statNameContainer}>
            <Text style={styles.stat}>
              {toTitleCase(removeDashSplitter(o.stat.name))}:{" "}
            </Text>
            <Text>{o.base_stat}</Text>
          </View>
          <Progress.Bar
            progress={o.base_stat / 255}
            width={175}
            height={15}
            color={statColors[i]}
            borderColor="black"
          />
        </View>
      );
    });

  const getAbilities = () =>
    pokemon.abilities.map((a, i) => {
      return (
        <View key={a.ability.name}>
          <Text>{toTitleCase(a.ability.name)}</Text>
        </View>
      );
    });

  function toTitleCase(name: string) {
    if (name == "hp") return "HP";
    else {
      var titleCase = name.charAt(0).toUpperCase() + name.slice(1);
      return titleCase;
    }
  }

  function removeDashSplitter(s: string) {
    var s = s.split("-").join(" ");
    return s;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {toTitleCase(pokemon.name)} {"#" + String(pokemon.id).padStart(3, "0")}
      </Text>
      <View style={[{ width: 130, height: 130, backgroundColor: "white" }]}>
        <Image
          style={[{ width: 130, height: 130 }]}
          source={{
            uri: pokemon.sprites.other["official-artwork"].front_default,
          }}
        />
        {/* <GenerationGallery pokemon={pokemon} /> */}
      </View>
      <TypeDetail pokemon={pokemon} />
      {getAbilities()}
      {getStats()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    opacity: 80,
  },
  bold: {
    fontSize: 16,
    fontWeight: "bold",
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 25,
  },
  stat: {
    fontSize: 18,
    fontWeight: "bold",
  },
  statContainer: {
    flex: 1,
    marginBottom: 10,
  },
  statNameContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  statColors: {
    backgroundColor: "gray",
    color: "white",
    borderRadius: 3,
    borderColor: "black",
    borderWidth: 1,
    paddingHorizontal: 2,
    margin: 2,
  },
});
