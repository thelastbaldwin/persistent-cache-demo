import { Card, CardContent, Typography } from "@mui/material";
import { ExtendedListItem } from "../api";
import Link from "next/link";

type ListCardProps = {
  pokemon: ExtendedListItem;
};

const ListCard: React.FC<ListCardProps> = ({ pokemon }) => {
  return (
    // overflow visible fixes an odd bug with overflow hidden on the parent
    <Card component="li" style={{ overflow: "visible" }}>
      <CardContent>
        <Link href={`/details?id=${pokemon.id}`}>
          <Typography>{pokemon.name}</Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ListCard;
