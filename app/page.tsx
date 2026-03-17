"use client";
import Pokemon from "./api/pokemon";
import { useSuspenseQuery } from "@tanstack/react-query";
import { PokemonList } from "./components";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { LoadingContext } from "./context";

export default function Home() {
  const { setLoading } = useContext(LoadingContext);
  const router = useRouter();
  const pathname = usePathname();

  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page") ?? 1);
  const limit = Number(searchParams.get("limit") ?? 20);

  const { data, isFetching } = useSuspenseQuery({
    queryKey: [`list_${page}-${limit}`],
    queryFn: async () => {
      const response = await Pokemon.list({
        offset: (page - 1) * limit,
        limit,
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

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    const params = new URLSearchParams([
      ["limit", limit.toString()],
      ["page", value.toString()],
    ]);
    // navigate to same page with updated page parameter and same limit
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <PokemonList
      handleChange={handleChange}
      page={page}
      count={data.count}
      limit={limit}
      pokemon={data.results ?? []}
    />
  );
}
