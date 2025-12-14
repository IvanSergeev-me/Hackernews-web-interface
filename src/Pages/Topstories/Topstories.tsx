import React from "react";
import { usePaginatedStories } from "../../Hooks/useTopStories";
import Pagination from "../../Components/UI/Pagination/Pagination";
import StoryList from "../../Components/Features/Topstories/StoryList";
import { useItems } from "../../Hooks/useItems";
import ItemsSkeleton from "../../Components/UI/ItemsSkeleton/ItemsSkeleton";
import { ITEMS_PER_PAGE } from "../../Config/constants";
import { useValidPage } from "../../Hooks/useValidPage";
import SortSection from "../../Components/Features/SortSection/SortSection";
import { TOP_STORIES_SORT_OPTIONS } from "./types";
import { useSort } from "../../Hooks/useSort";
import type { SelectOptionValue } from "../../Components/UI/Select/types";
import { useFavorites } from "../../Hooks/useFavorites";

const Topstories: React.FunctionComponent = () => {
  const PAGE_SIZE = ITEMS_PER_PAGE;

  const SORT_OPTIONS = TOP_STORIES_SORT_OPTIONS;

  const { currentPage, setNewPage } = useValidPage();

  const { onSortChange, sortBy } = useSort({});

  const { isFavorite, toggleFavorite } = useFavorites();

  const {
    stories: storyIds,
    totalItems,
    isLoading,
    isError,
  } = usePaginatedStories({
    pageNum: currentPage,
    pageSize: PAGE_SIZE,
    sortBy,
  });

  const {
    data,
    isLoading: isStoriesLoading,
    isError: isStoriesError,
  } = useItems(storyIds, currentPage);

  if (isError || isStoriesError) return <section>Error</section>;

  if (isLoading)
    return <ItemsSkeleton skeletonItems={Math.ceil(PAGE_SIZE / 3)} />;

  const onPageChange = (pageNum: number) => {
    setNewPage(pageNum);
  };

  const handleSortChange = (value: SelectOptionValue) => {
    onSortChange(value);
    setNewPage(1);
  };

  return (
    <section>
      <SortSection
        showDivider={true}
        dropdownSelectProps={{
          id: "sort_stories",
          name: "sort_stories",
          options: SORT_OPTIONS,
          onChange: handleSortChange,
          value: sortBy,
        }}
      />
      <StoryList
        stories={data}
        isLoading={isStoriesLoading}
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
      />
      {storyIds && (
        <Pagination
          totalItems={totalItems}
          pageSize={PAGE_SIZE}
          pageNum={currentPage}
          onPageChange={onPageChange}
        />
      )}
    </section>
  );
};

export default Topstories;
