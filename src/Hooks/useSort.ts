import { useState } from "react";
import { SORT_TYPES, type SortType } from "../Pages/Topstories/types";
import type { SelectOptionValue } from "../Components/UI/Select/types";

interface IUseSortProps {
  defaultSort?: SortType;
}

interface IUseSortReturn {
  sortBy: SortType;
  onSortChange: (value: SelectOptionValue | SortType) => void;
}

export const useSort = ({
  defaultSort = "newest",
}: IUseSortProps): IUseSortReturn => {
  const [sortBy, setSortBy] = useState<SortType>(defaultSort);

  const handleSortChange = (value: SelectOptionValue) => {
    if (SORT_TYPES.includes(value.toString() as SortType)) {
      setSortBy(value as SortType);
    } else {
      console.log(`Invalid sort value: ${value}`);
    }
  };

  return {
    sortBy,
    onSortChange: handleSortChange,
  };
};
