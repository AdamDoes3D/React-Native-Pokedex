import React from "react";
import { StyleSheet, Image, Dimensions } from "react-native";
import { Pokemon } from "../interfaces/Pokemon";
import { Text, View } from "./Themed";
import * as Progress from "react-native-progress";
import TypeDetail from "./PokemonTypes";
import GenerationGallery from "./ImagesByGeneration";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { getSpecies } from "../services/pokeAPI";
import { useEffect, useState } from "react";
import { Species } from "../interfaces/Species";
import PokemonAbout from "./PokemonAbout";

export default function PokemonDetail({ pokemon }: { pokemon: Pokemon }) {
  function typeColor(type: string | null) {
    switch (type) {
      case "Normal":
        return { backgroundColor: "#e1e1d1" };
      case "Fighting":
        return { backgroundColor: "#e27a74" };
      case "Grass":
        return { backgroundColor: "#aede96" };
      case "Poison":
        return { backgroundColor: "#cd84cd" };
      case "Fire":
        return { backgroundColor: "#f6b282" };
      case "Flying":
        return { backgroundColor: "#cabcf6" };
      case "Water":
        return { backgroundColor: "#a4bcf6" };
      case "Electric":
        return { backgroundColor: "#fae282" };
      case "Ground":
        return { backgroundColor: "#ecd9a4" };
      case "Psychic":
        return { backgroundColor: "#fa9ab7" };
      case "Rock":
        return { backgroundColor: "#d9c982" };
      case "Ice":
        return { backgroundColor: "#c1e7e7" };
      case "Bug":
        return { backgroundColor: "#d7e468" };
      case "Dragon":
        return { backgroundColor: "#a987fa" };
      case "Ghost":
        return { backgroundColor: "#a898c3" };
      case "Dark":
        return { backgroundColor: "#b29887" };
      case "Steel":
        return { backgroundColor: "#d4d4e2" };
      case "Fairy":
        return { backgroundColor: "#f4c1cd" };
      case "???":
        return { backgroundColor: "#a4c6bc" };
      case null:
        return { backgroundColor: "f5f5f5", borderWidth: 0 };
      default:
        return { backgroundColor: "white" };
    }
  }

  const FirstRoute = () => (
    <PokemonAbout pokemon={pokemon} species={species}></PokemonAbout>
  );

  const SecondRoute = () => (
    <View style={[styles.flex, { alignItems: "center" }]}>{getStats()}</View>
  );

  const ThirdRoute = () => <View style={[{ backgroundColor: "white" }]} />;

  const initialLayout = { width: Dimensions.get("window").width };

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "About" },
    { key: "second", title: "Stats" },
    { key: "third", title: "Moves" },
  ]);

  const [species, setSpecies] = useState<Species>();

  useEffect(() => {
    getSpecies(pokemon.name).then((s) => setSpecies(s));
    return;
  }, []);

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      stlye={styles.flex}
      indicatorStyle={{ backgroundColor: "blue" }}
      style={{ backgroundColor: "gray" }}
    />
  );
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

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
    <View style={[styles.flex, { backgroundColor: "transparent" }]}>
      <View
        style={[
          styles.container,
          typeColor(toTitleCase(pokemon.types[0].type.name)),
        ]}
      >
        <Text style={styles.name}>
          {toTitleCase(pokemon.name)}{" "}
          {"#" + String(pokemon.id).padStart(3, "0")}
        </Text>
        <View
          style={[{ width: 130, height: 130, backgroundColor: "transparent" }]}
        >
          <Image
            style={[{ width: 130, height: 130 }]}
            source={{
              uri: pokemon.sprites.other["official-artwork"].front_default,
            }}
          />
          {/* <GenerationGallery pokemon={pokemon} /> */}
        </View>
        <TypeDetail pokemon={pokemon} />
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderTabBar={renderTabBar}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={{ flex: 3 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
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
  flex: {
    flex: 1,
  },
  flexBasis: {
    flexBasis: "auto",
  },
});
