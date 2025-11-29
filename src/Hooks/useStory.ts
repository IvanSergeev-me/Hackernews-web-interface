import type { StoryInfo } from "../Pages/Topstories/types";
import { useItem } from "./useItems";

interface IUseStoryReturn {
    story: StoryInfo,
    isStoryError: boolean,
    storyError: Error|null,
    isStoryLoading: boolean,
}

export const useStory = (id:number):IUseStoryReturn =>{
    const {data, isError, error, isLoading } = useItem(id);

    const story = data as StoryInfo;

    return {
        story,
        isStoryError:isError,
        storyError:error,
        isStoryLoading:isLoading
    }
}