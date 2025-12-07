import type { StoryIds } from '../Pages/Topstories/types.ts';
import { instance } from './index.ts';

export const TopStoriesApi = {
    getTopStories(){
        return instance.get<StoryIds>(`topstories.json`);
    },
    getBestStories(){
        return instance.get<StoryIds>(`beststories.json`)
    }
};