import { delay } from "@/app/test/util";

export const get = async <T>(url: string): Promise<T | null> => {
  const response = await fetch(url);
  await delay(5000);
  if (response.ok) {
    return (await response.json()) as T;
  }
  return null;
};
