"use client";
import Pokemon from "@/app/api";
import { LoadingContext } from "@/app/context";
import { Box, Stack, Typography } from "@mui/material";
import { useSuspenseQuery } from "@tanstack/react-query";
import { use, useContext, useEffect } from "react";

type DetailsProps = {
  params: Promise<{ id: string }>;
};

const Details: React.FC<DetailsProps> = ({ params }) => {
  const { id } = use(params);
  const { setLoading } = useContext(LoadingContext);

  const { data, isFetching } = useSuspenseQuery({
    queryKey: [`details_${id}`],
    queryFn: async () => {
      const response = await Pokemon.details({
        id: Number(id),
      });
      if (!response) {
        throw new Error("failed to fetch list");
      }

      return response;
    },
  });

  useEffect(() => {
    setLoading(isFetching);
  }, [isFetching, setLoading]);

  return (
    <Stack spacing={2}>
      <Typography>
        {id}: {data.name}
      </Typography>
      {data.sprites.front_default && (
        <Box>
          <img src={data.sprites.front_default} alt={data.name} />
        </Box>
      )}
      <Typography suppressHydrationWarning={true}>uid: {data.uid}</Typography>
    </Stack>
  );
};

export default Details;
