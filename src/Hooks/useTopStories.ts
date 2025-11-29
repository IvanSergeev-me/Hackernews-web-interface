import { useQuery } from 'react-query';
import { TopStoriesApi } from '../API/TopStoriesApi';
import type { StoryIds } from '../Pages/Topstories/types';
import React from 'react';

interface IUseTopStoriesProps {
  pageSize: number;
  pageNum: number;
}

interface IPaginatedTopStoriesResponse {
  stories: StoryIds;
  totalItems: number;
}

interface ITopStoryIdsResponse {
  storyIds: StoryIds;
}

interface IUsePaginatedStoriesResponse {
  stories: StoryIds,
  totalItems: number,
  isLoading: boolean,
  isError: boolean,
  error: Error|null,
}

export const useTopStories = () => {
  return useQuery<ITopStoryIdsResponse, Error>({
    queryKey: ['top-stories'],
    queryFn: async () => {
      const response = await TopStoriesApi.getTopStories();
      console.log("fetching")
      return {storyIds: response.data};
    }
  });
};

export const usePaginatedStories = ({ 
  pageSize = 10, 
  pageNum = 1 
}: IUseTopStoriesProps): IUsePaginatedStoriesResponse => {
  const { data: allStoryIds, isError, isLoading, error } = useTopStories();

  const { stories, totalItems } = React.useMemo(() => {
    const getPaginatedStories = (): IPaginatedTopStoriesResponse => {
      if (!allStoryIds) return { stories: [], totalItems: 0 };
      
      console.log("paginating");
      const startIndex = (pageNum - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const pageStoryIds: StoryIds = allStoryIds.storyIds.slice(startIndex, endIndex);
      
      return {
        stories: pageStoryIds,
        totalItems: allStoryIds.storyIds.length,
      };
    };

    return getPaginatedStories();
  }, [allStoryIds, pageSize, pageNum]);

  return {
    stories,
    totalItems,
    isError,
    isLoading,
    error
  };
};