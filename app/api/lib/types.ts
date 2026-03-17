export type ListItem = {
  name: string;
  url: string;
};

export type ExtendedListItem = ListItem & { id: number };

export type ListItemApiResponse = {
  count: number;
  next: string;
  previous: string | null;
  results: ListItem[];
};

export type ListApiResponse = Pick<
  ListItemApiResponse,
  "count" | "next" | "previous"
> & {
  results: ExtendedListItem[];
};

export type Move = {
  name: string;
  url: string;
};

export type FlavorText = {
  flavor_text: string;
};

export type Sprites = {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
};

export type Details = {
  id: number;
  name: string;
  moves: Move[];
  sprites: Sprites;
};

export type Species = {
  id: number;
  name: string;
  is_legendary: boolean;
  flavor_text_entries: FlavorText[];
};

export type DetailsApiResponse = Details & Species & { uid: string };
