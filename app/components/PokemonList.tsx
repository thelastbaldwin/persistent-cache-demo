import { Stack, Pagination } from "@mui/material";
import { ExtendedListItem } from "../api";
import ListCard from "./ListCard";

type PokemonListProps = {
  handleChange: (_event: React.ChangeEvent<unknown>, value: number) => void;
  page: number;
  limit: number;
  count: number;
  pokemon: ExtendedListItem[];
};

const PokemonList: React.FC<PokemonListProps> = ({
  handleChange,
  pokemon,
  page,
  limit,
  count,
}) => {
  return (
    <Stack style={{ overflow: "hidden" }}>
      <Pagination
        page={page}
        count={Math.ceil(count / limit)}
        onChange={handleChange}
      />
      <Stack spacing={2} component={"ul"} style={{ overflow: "scroll" }}>
        {pokemon.map((r) => (
          <ListCard key={r.url} pokemon={r} />
        ))}
      </Stack>
    </Stack>
  );
};

export default PokemonList;
