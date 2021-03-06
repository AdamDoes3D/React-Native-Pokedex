export interface Stat {
  name: string;
  value: number;
}

export interface Type {
  primary: string;
  secondary: string | null;
}

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: true;
  order: number;
  weight: number;
  abilities: [
    {
      is_hidden: true;
      slot: number;
      ability: {
        name: string;
        url: string;
      };
    }
  ];
  forms: [
    {
      name: string;
      url: string;
    }
  ];
  game_indices: [
    {
      game_index: number;
      version: {
        name: string;
        url: string;
      };
    }
  ];
  held_items: [
    {
      item: {
        name: string;
        url: string;
      };
      version_details: [
        {
          rarity: number;
          version: {
            name: string;
            url: string;
          };
        }
      ];
    }
  ];
  location_area_encounters: string;
  moves: [
    {
      move: {
        name: string;
        url: string;
      };
      version_group_details: [
        {
          level_learned_at: number;
          version_group: {
            name: string;
            url: string;
          };
          move_learn_method: {
            name: string;
            url: string;
          };
        }
      ];
    }
  ];
  species: {
    name: string;
    url: string;
  };
  sprites: {
    back_female: string;
    back_shiny_female: string;
    back_default: string;
    front_female: string;
    front_shiny_female: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
    other: {
      dream_world: {};
      "official-artwork": {
        front_default: string;
      };
    };
    versions: {
      "generation-i": {
        "red-blue": { front_default: string };
        yellow: { front_default: string };
      };
      "generation-ii": {
        crystal: { front_default: string };
        gold: { front_default: string };
        silver: { front_default: string };
      };
      "generation-iii": {
        emerald: { front_default: string };
        "firered-leafgreen": { front_default: string };
        "ruby-sapphire": { front_default: string };
      };
      "generation-iv": {
        "diamond-pearl": { front_default: string };
        "heartgold-soulsilver": { front_default: string };
        platinum: {};
      };
      "generation-v": {
        "black-white": { front_default: string };
      };
      "generation-vi": {
        "omegaruby-alphasapphire": { front_default: string };
        "x-y": { front_default: string };
      };
      "generation-vii": {
        icons: {};
        "ultra-sun-ultra-moon": { front_default: string };
      };
      "generation-viii": {
        icons: { front_default: string };
      };
    };
  };
  stats: [
    {
      base_stat: number;
      effort: number;
      stat: {
        name: string;
        url: string;
      };
    }
  ];
  types: [
    {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }
  ];
}
