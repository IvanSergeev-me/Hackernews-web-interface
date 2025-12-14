import type { GetMaxPageParams } from "./types";

export const getMaxPageNumber = ({
  totalItems,
  pageSize,
}: GetMaxPageParams): number => {
  return Math.ceil(totalItems / pageSize);
};
