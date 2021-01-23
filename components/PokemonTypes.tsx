import React from "react";
import { StyleSheet } from "react-native";
import { Pokemon } from "../interfaces/Pokemon";
import { Text, View } from "./Themed";

export default function TypeDetail({ pokemon }: { pokemon: Pokemon }) {
  function typeColor(type: string | null) {
    switch (type) {
      case "Normal":
        return { backgroundColor: "#CECEB3" };
      case "Fighting":
        return { backgroundColor: "#C03028" };
      case "Grass":
        return { backgroundColor: "#78C850" };
      case "Poison":
        return { backgroundColor: "#A040A0" };
      case "Fire":
        return { backgroundColor: "#F08030" };
      case "Flying":
        return { backgroundColor: "#A890F0" };
      case "Water":
        return { backgroundColor: "#6890F0" };
      case "Electric":
        return { backgroundColor: "#F8D030" };
      case "Ground":
        return { backgroundColor: "#E0C068" };
      case "Psychic":
        return { backgroundColor: "#F85888" };
      case "Rock":
        return { backgroundColor: "#B8A038" };
      case "Ice":
        return { backgroundColor: "#98D8D8" };
      case "Bug":
        return { backgroundColor: "#A8B820" };
      case "Dragon":
        return { backgroundColor: "#7038F8" };
      case "Ghost":
        return { backgroundColor: "#705898" };
      case "Dark":
        return { backgroundColor: "#705848" };
      case "Steel":
        return { backgroundColor: "#B8B8D0" };
      case "Fairy":
        return { backgroundColor: "#EE99AC" };
      case "???":
        return { backgroundColor: "#68A090" };
      case null:
        return { backgroundColor: "#white", borderWidth: 0 };
      default:
        return { backgroundColor: "white" };
    }
  }

  function toTitleCase(name: string) {
    if (name == "hp") return "HP";
    else {
      var titleCase = name.charAt(0).toUpperCase() + name.slice(1);
      return titleCase;
    }
  }

  return (
    <View style={styles.container}>
      {/* <Text style={styles.bold}>{"Type:"}</Text> */}
      <View style={styles.typeContainer}>
        {pokemon.types.map((t) => {
          return (
            <Text
              key={t.type.name}
              style={[styles.typeColors, typeColor(toTitleCase(t.type.name))]}
            >
              {toTitleCase(t.type.name)}
            </Text>
          );
        })}
      </View>
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
    backgroundColor: "transparent",
  },
  bold: {
    fontSize: 16,
    fontWeight: "bold",
  },
  typeContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "transparent",
  },
  typeColors: {
    backgroundColor: "gray",
    color: "white",
    borderRadius: 3,
    borderColor: "black",
    borderWidth: 1,
    paddingHorizontal: 2,
    margin: 2,
  },
});
