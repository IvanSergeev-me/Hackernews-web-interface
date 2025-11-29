import { useState, type FunctionComponent } from "react";
import type { CommentWithChildren } from "../../../../Pages/Topstories/types";
import CommentTree from "./CommentTree";
import style from './CommentTree.module.scss';
import { unixTimeToDateTime } from "../../../../Utils/UnixTimeConverter/unixTimeToDateTime";
import ExpandButton from "./ExpandButton";

interface ICommentProps extends CommentWithChildren {
    maxDepth: number;
}

const Comment: FunctionComponent<ICommentProps> = ({ by, hasKids, kidsCount, text, time, kids, depth, maxDepth }) => {

    const [isExpanded, setIsExpanded] = useState(depth < maxDepth - 1);
    const timeToDisplay = unixTimeToDateTime(time);

    const canExpand = hasKids;

    const toggleExpand = () =>{
        setIsExpanded(prev=> !prev);
    }

    return (
        <li className={style.tree_container}>
            <div className={style.comment_container}>
                <div className={style.comment_container__top}>
                    <p className={style.commnet_info_wrapper}>
                        <span className={style.commnet_info_wrapper__by}>By {by}</span>
                        <span className={style.commnet_info_wrapper__date}>{timeToDisplay}</span>
                    </p>
                </div>
                <div className={style.comment_container__text_wrapper}>
                    <p>
                        {text}
                    </p>
                </div>
                {canExpand && <div className={style.comment_container__bottom}>
                    <hr></hr>
                    <div>
                        <p className={style.commnet_info_wrapper}>
                            <span className={style.commnet_info_wrapper__text}>Replies: </span>
                            <span className={style.commnet_info_wrapper__value}>{kidsCount}</span>
                        </p>
                        <ExpandButton onButtonClick={toggleExpand} text={isExpanded?"Collapse":"Expand"}/>
                    </div>

                    
                </div>}
            </div>
            <div>
                {isExpanded && canExpand && kids && (
                    <>
                        <ul>
                            {kids.map(kidId => (
                                <CommentTree
                                    key={kidId}
                                    commentId={kidId}
                                    depth={depth + 1}
                                    maxDepth={maxDepth}
                                />
                            ))}
                        </ul></>
                )}
            </div>
        </li>
    );
}

export default Comment;