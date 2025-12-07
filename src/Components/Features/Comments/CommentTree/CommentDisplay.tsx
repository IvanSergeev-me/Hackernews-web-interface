import { type FunctionComponent } from "react";
import type { CommentWithChildren } from "../../../../Pages/Topstories/types";
import style from './CommentTree.module.scss';
import { unixTimeToDateTime } from "../../../../Utils/UnixTimeConverter/unixTimeToDateTime";
import ExpandButton from "./ExpandButton";
import CommentTextDisplay from "./CommentTextDisplay";

interface ICommentProps extends CommentWithChildren {
    maxDepth: number;
    canExpand: boolean;
    toggleExpand: () => void;
}

const Comment: FunctionComponent<ICommentProps> = ({ by, kidsCount, text, time ,canExpand,toggleExpand, isExpanded }) => {

    
    const timeToDisplay = unixTimeToDateTime(time);

    

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
                    <CommentTextDisplay htmlText={text} />
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
        </li>
    );
}

export default Comment;