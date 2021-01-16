import * as React from "react";
import { ImageBackground, StyleSheet, Image } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import DexView from "../components/DexView";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { Pokemon } from "../interfaces/Pokemon";

export default function Example() {
  const [items, setItems] = React.useState<Pokemon[]>([
    {
      name: "Bulbasaur",
      id: 1,
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
    },
    {
      name: "Ivysaur",
      id: 1,
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
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    },
    {
      name: "Venusaur",
      id: 1,
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
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    },
    {
      name: "Charmander",
      id: 1,
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
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
    {
      name: "Charmeleon",
      id: 1,
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
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    },
    {
      name: "Charizard",
      id: 1,
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
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    },
    {
      name: "Squirtle",
      id: 1,
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
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    },
    {
      name: "Wartortle",
      id: 1,
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
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    },
    {
      name: "Blastoise",
      id: 1,
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
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    },
  ]);

  return <DexView></DexView>;
}

const styles = StyleSheet.create({});
