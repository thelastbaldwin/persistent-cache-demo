import { delay } from "@/app/util";

export const get = async <T>(url: string): Promise<T | null> => {
  const response = await fetch(url);
  await delay(1000);
  if (response.ok) {
    return (await response.json()) as T;
  }
  return null;
};
