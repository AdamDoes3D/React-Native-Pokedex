import React from "react";
import { Pokemon } from "../interfaces/Pokemon";
import GallerySwiper from "react-native-gallery-swiper";
import { ImageBackground, StyleSheet, Image, Button } from "react-native";

export default function GenerationGallery({ pokemon }: { pokemon: Pokemon }) {
  var images: string[];
  function getImages() {
    Object.keys(pokemon.sprites.versions).forEach((g: string) => {
      console.log({ g });
      Object.keys(g).forEach((n: string) => {
        console.log({ n });
        var x = JSON.parse(JSON.stringify(pokemon.sprites.versions))[g][n][
          "front_default"
        ];
        if (x != null) {
          images.push(x);
        }
      });
    });
    console.log(images);
  }

  //   getImages();

  return (
    <GallerySwiper
      style={styles.image}
      images={[
        {
          uri:
            pokemon.sprites.versions["generation-i"]["red-blue"].front_default,
        },
        {
          uri: pokemon.sprites.versions["generation-ii"].crystal.front_default,
        },
        {
          uri: pokemon.sprites.versions["generation-iii"].emerald.front_default,
        },
        {
          uri:
            pokemon.sprites.versions["generation-iv"]["diamond-pearl"]
              .front_default,
        },
        {
          uri:
            pokemon.sprites.versions["generation-v"]["black-white"]
              .front_default,
        },
        {
          uri:
            pokemon.sprites.versions["generation-vi"]["omegaruby-alphasapphire"]
              .front_default,
        },
        {
          uri:
            pokemon.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"]
              .front_default,
        },
        {
          uri: pokemon.sprites.versions["generation-viii"].icons.front_default,
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    backgroundColor: "transparent",
  },
});
