import { StackScreenProps } from "@react-navigation/stack";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import PokemonDetail from "../components/PokemonDetail";

export default function PokemonDetailScreen({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  return (
    <View style={styles.container}>
      <PokemonDetail pokemon={route.params.pokemon}></PokemonDetail>
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
