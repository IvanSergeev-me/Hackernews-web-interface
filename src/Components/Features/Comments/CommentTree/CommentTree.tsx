import { useState, type FunctionComponent } from "react";
import type {
  CommentId,
  CommentWithChildren,
} from "../../../../Pages/Topstories/types";
import CommentDisplay from "./CommentDisplay";
import { useComment } from "../../../../Hooks/useComments";
import ItemsSkeleton from "../../../UI/ItemsSkeleton/ItemsSkeleton";
import style from "./CommentTree.module.scss";

interface ICommentTreeProps {
  commentId: CommentId;
  depth: number;
  maxDepth: number;
}

const CommentTree: FunctionComponent<ICommentTreeProps> = ({
  commentId,
  depth,
  maxDepth,
}) => {
  const { commentWithChildren, isError, isLoading, error } = useComment({
    commentId,
    depth,
  });
  const [isExpanded, setIsExpanded] = useState(depth < maxDepth - 1);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  console.log("render tree");
  if (isLoading) return <ItemsSkeleton skeletonItems={1} />;
  if (isError && error) return <div>Error loading comment</div>;
  if (!commentWithChildren) return null;

  const canExpand = commentWithChildren?.hasKids;

  const kids = commentWithChildren.kids;

  return (
    <>
      <CommentDisplay
        key={commentId}
        {...(commentWithChildren as CommentWithChildren)}
        toggleExpand={toggleExpand}
        isExpanded={isExpanded}
        canExpand={canExpand}
        maxDepth={maxDepth}
      />
      <div>
        {isExpanded && canExpand && kids && (
          <>
            <ul className={style.comments_list}>
              {kids.map((kidId) => (
                <CommentTree
                  key={kidId}
                  commentId={kidId}
                  depth={depth + 1}
                  maxDepth={maxDepth}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default CommentTree;
