import type { SelectOptions } from "../../Components/UI/Select/types";

export type StoryId = number;

export type StoryIds = StoryId[];

export type CommentId = number;

export type JobId = number;

export type StoryInfo = {
  by: string;
  descendants: number;
  id: StoryId;
  kids?: CommentId[];
  score: number;
  time: number;
  title: string;
  type: "story";
  url: string;
};

export type CommentInfo = {
  by: string;
  id: CommentId;
  kids?: CommentId[];
  parent: number;
  text: string;
  time: number;
  type: "comment";
};

export type StoryWithComments = StoryInfo & {
  kids?: CommentWithChildren[];
};

export type CommentWithChildren = CommentInfo & {
  hasKids: boolean;
  kids?: CommentWithChildren[];
  kidsCount: number;
  isExpanded?: boolean;
  isLoading?: boolean;
  depth: number;
};

export type JobInfo = {
  by: string;
  id: JobId;
  score: number;
  text: string;
  time: number;
  title: string;
  type: "job";
  url: string;
};

export type SortType = "newest" | "old" | "best" | "worst";
export const SORT_TYPES: SortType[] = ["newest", "old", "best", "worst"];

export const TOP_STORIES_SORT_OPTIONS = [
  { text: "Newest", value: "newest" },
  { text: "Old", value: "old" },
  { text: "Best", value: "best" },
  { text: "Worst", value: "worst" },
] as SelectOptions;

export type StoryShortInfo = Omit<StoryInfo, "kids">;

export type ItemId = JobId | CommentId | StoryId;

export type ItemInfo = JobInfo | CommentInfo | StoryInfo;

export type FavoriteItems = ItemId[];
