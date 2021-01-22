export interface Species {
  base_happiness: number;
  capture_rate: number;
  color: { name: string };
  egg_groups: [{ name: string }, { name: string }];
  evolution_chain: { url: string };
  evolves_from_species: null;
  flavor_text_entries: [
    {
      flavor_text: string;
      language: {
        name: string;
        url: string;
      };
      version: {
        name: string;
        url: string;
      };
    }
  ];
  form_descriptions: [];
  forms_switchable: false;
  gender_rate: number;
  genera: [
    {
      genus: string;
      language: {
        name: string;
        url: string;
      };
    }
  ];
  generation: {
    name: string;
    url: string;
  };
  growth_rate: {
    name: string;
    url: string;
  };
  habitat: {
    name: string;
    url: string;
  };
  has_gender_differences: false;
  hatch_counter: number;
  id: number;
  is_baby: false;
  is_legendary: false;
  is_mythical: false;
  name: string;
  names: [
    {
      language: {
        name: string;
        url: string;
      };
      name: string;
    }
  ];
  order: number;
  pal_park_encounters: [
    {
      area: {
        name: string;
        url: string;
      };
      base_score: number;
      rate: number;
    }
  ];
  pokedex_numbers: [
    {
      entry_number: number;
      pokedex: {
        name: string;
        url: string;
      };
    }
  ];
  shape: {
    name: string;
    url: string;
  };
  varieties: [
    {
      is_default: true;
      pokemon: {
        name: string;
        url: string;
      };
    }
  ];
}
