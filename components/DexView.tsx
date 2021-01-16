import * as React from "react";
import { ImageBackground, StyleSheet, Image, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FlatGrid } from "react-native-super-grid";
import { useEffect, useState } from "react";
import { getPokemon } from "../services/pokeAPI";

import { Text, View } from "../components/Themed";
import { Pokemon } from "../interfaces/Pokemon";

export default function DexView({ navigation }: { navigation: any }) {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [offset, setOffset] = useState<number>(0);

  function loadDexEntries() {
    getPokemon(pokemon, offset).then((items: Pokemon[]) => {
      console.log(items);
      setPokemon([...items]);
    });
    setOffset(offset + 10);
  }

  useEffect(() => {
    loadDexEntries();
    return;
  }, []);

  return (
    <View style={styles.container}>
      <FlatGrid
        itemDimension={130}
        data={pokemon}
        style={styles.gridView}
        spacing={10}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.itemContainer]}
            onPress={() =>
              navigation.navigate("PokemonDetailScreen", { pokemon: item })
            }
          >
            <View style={styles.dexNumberView}>
              <Image
                source={{ uri: "https://freesvg.org/img/Pokeball.png" }}
                style={{ height: 25, width: 25, margin: 2 }}
              ></Image>
              <Text style={styles.dexNumber}>
                {"#" + String(item.id).padStart(3, "0")}
              </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://lh3.googleusercontent.com/proxy/hO0t1Pc7PiGamsnVgHKHUEH4tB7uUCdEsQjXWJCtA5Opwegoez892ja2KV2OMmtU3KjshXHCtjAE_mFGXufoA_ZZ5GjBf_DI2jtGnxEdh9HJMHsato9tmPblaiVTfQTspQ",
              }}
              style={styles.backgroundImage}
              imageStyle={{ opacity: 0.1 }}
            >
              <Image
                source={{
                  uri: item.sprites.other["official-artwork"].front_default,
                }}
                style={styles.image}
              ></Image>
            </ImageBackground>
            <Text style={styles.itemName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <Button onPress={loadDexEntries} title="Load More"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "gray",
    borderRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "#000",
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: "#000",
    fontWeight: "600",
    backgroundColor: "transparent",
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 12,
    color: "#fff",
  },
  image: {
    height: 80,
    width: 80,
    resizeMode: "contain",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  backgroundImage: {
    height: 100,
    width: 100,
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  imageOpacity: {
    backgroundColor: "rgba(255, 255, 255, .1)",
  },
  dexNumber: {
    fontSize: 18,
    color: "#525252",
    fontWeight: "600",
    alignContent: "flex-start",
  },
  dexNumberView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "transparent",
    alignContent: "flex-start",
    borderRadius: 5,
  },
});
