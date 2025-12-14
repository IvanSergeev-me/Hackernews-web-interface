import type { FunctionComponent } from "react";
import type { CommentId } from "../../../Pages/Topstories/types";
import CommentTree from "./CommentTree/CommentTree";
import style from "./CommentsSection.module.scss";

interface ICommentSectionProps {
  topLevelIds: CommentId[];
  totalComments: number;
}

const CommentSection: FunctionComponent<ICommentSectionProps> = ({
  topLevelIds,
  totalComments,
}) => {
  return (
    <div className={style.comments_container}>
      <div className={style.comments_container__summary}>
        <p className={style.summary_wrapper}>
          <span className={style.summary_wrapper__text}>Total comments: </span>
          <span className={style.summary_wrapper__value}>{totalComments}</span>
        </p>
      </div>
      <span className={style.comments_container__divider}></span>
      <ul className={style.comments_container__list}>
        {topLevelIds.map((topLevelId) => (
          <CommentTree
            key={topLevelId}
            depth={0}
            maxDepth={1}
            commentId={topLevelId}
          />
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;
