import * as React from "react";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import PokemonDetail from "../components/PokemonDetail";
import { Text, View } from "../components/Themed";
import { Pokemon } from "../interfaces/Pokemon";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <PokemonDetail
        pokemon={{
          id: 1,
          name: "Bulbasaur",
          types: { primary: "Grass", secondary: "Poison" },
          stats: [
            { name: "HP", value: 45 },
            { name: "Attack", value: 49 },
            { name: "Defense", value: 49 },
            { name: "Sp. Atk", value: 65 },
            { name: "Sp. Def", value: 65 },
            { name: "Speed", value: 45 },
          ],
          spriteUrl:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        }}
      ></PokemonDetail>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

//https://github.com/topics/pokedex
