import { useMemo } from "react";
import type {
  CommentId,
  CommentInfo,
  CommentWithChildren,
} from "../Pages/Topstories/types";
import { useItem } from "./useItems";

interface IUseCommentProps {
  commentId: CommentId;
  depth: number;
}

interface IUseCommentReturn {
  isError: boolean;
  isLoading: boolean;
  commentWithChildren: CommentWithChildren | null;
  error: Error | null;
}

export const useComment = ({
  commentId,
  depth,
}: IUseCommentProps): IUseCommentReturn => {
  const { data: itemData, isLoading, isError, error } = useItem(commentId);

  const commentWithChildren = useMemo(() => {
    if (isLoading || isError || !itemData) {
      return null;
    }

    if (itemData.type !== "comment") {
      console.log("not comment");
      return null;
    }

    const comment = itemData as CommentInfo;
    const hasKids = !!comment.kids && comment.kids.length > 0;
    const kidsCount = hasKids ? comment.kids!.length : 0;

    return {
      ...comment,
      hasKids,
      kidsCount,
      depth,
      kids: comment.kids || [],
    } as CommentWithChildren;
  }, [itemData, isLoading, isError, commentId, depth]);

  return {
    commentWithChildren,
    isError,
    isLoading,
    error,
  };
};
