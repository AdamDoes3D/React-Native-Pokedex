import React from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Pokemon } from "../interfaces/Pokemon";
import { Text, View } from "./Themed";
import { toTitleCase, removeDashSplitter } from "../stringExtensions";

export default function PokemonMoves({ pokemon }: { pokemon: Pokemon }) {
  function getMoves(pokemon: Pokemon) {
    return pokemon.moves
      .sort(
        (m1, m2) =>
          m1.version_group_details[0].level_learned_at -
          m2.version_group_details[0].level_learned_at
      )
      .map((m) => {
        return (
          <View key={m.move.name} style={styles.gridContainer}>
            <View style={styles.rowContainer}>
              <Text>{toTitleCase(removeDashSplitter(m.move.name))}</Text>
            </View>
            <View style={styles.numberContainer}>
              <Text>{m.version_group_details[0].level_learned_at}</Text>
            </View>
            <View style={styles.rowContainer}>
              <Text>
                {toTitleCase(
                  removeDashSplitter(
                    m.version_group_details[0].move_learn_method.name
                  )
                )}
              </Text>
            </View>
          </View>
        );
      });
  }

  return (
    <ScrollView>
      <View style={styles.gridContainer}>
        <View style={styles.rowContainer}>
          <Text style={styles.chartTitle}>{"Move"}</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.chartTitle}>{"Level"}</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.chartTitle}>{"Learning Method"}</Text>
        </View>
      </View>
      {getMoves(pokemon)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "transparent",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "transparent",
    borderColor: "black",
    borderWidth: 1,
    width: "42.5%",
  },
  numberContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "transparent",
    borderColor: "black",
    borderWidth: 1,
    width: "15%",
  },
  chartTitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "navy",
  },
});
