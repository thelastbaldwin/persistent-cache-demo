import {
  get,
  POKEAPI,
  type ListItemApiResponse,
  type ListApiResponse,
  type Details,
  Species,
  DetailsApiResponse,
} from "./lib";

export default class Pokemon {
  static async list(options?: {
    offset?: number;
    limit?: number;
  }): Promise<ListApiResponse | null> {
    const { offset = 0, limit = 20 } = options ?? {};
    const response = await get<ListItemApiResponse>(
      `${POKEAPI}/pokemon?offset=${offset}&limit=${limit}`,
    );

    if (response) {
      const idMatch = /\/(\d+)/;
      return {
        ...response,
        results: response?.results.map((r) => ({
          ...r,
          id: Number(r.url.match(idMatch)?.[1]) || 0,
        })),
      };
    }
    return null;
  }

  static async details({
    id,
  }: {
    id: number;
  }): Promise<DetailsApiResponse | null> {
    const [details, species] = await Promise.all([
      get<Details>(`${POKEAPI}/pokemon/${id}`),
      this.species({ id }),
    ]);

    if (details && species) {
      return {
        ...details,
        ...species,
        uid: crypto.randomUUID(),
      };
    }
    return null;
  }

  static async species({ id }: { id: number }): Promise<Species | null> {
    return await get<Species>(`${POKEAPI}/pokemon-species/${id}`);
  }
}
