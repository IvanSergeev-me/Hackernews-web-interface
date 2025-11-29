import type { FunctionComponent } from "react";
import type { CommentId, CommentWithChildren } from "../../../../Pages/Topstories/types";
import CommentDisplay from "./CommentDisplay";
import { useComment } from "../../../../Hooks/useComments";
import ItemsSkeleton from "../../../UI/ItemsSkeleton/ItemsSkeleton";

interface ICommentTreeProps {
    commentId: CommentId;
    depth: number,
    maxDepth: number,
}
 
const CommentTree: FunctionComponent<ICommentTreeProps> = ({commentId, depth, maxDepth}) => {
    const { commentWithChildren, isError, isLoading, error } = useComment({commentId,depth});

    console.log("render tree");
    if (isLoading) return <ItemsSkeleton skeletonItems={1}/>
    if (isError && error) return <div>Error loading comment</div>;
    if (!commentWithChildren) return null;
    
    return ( 
        <>
            <CommentDisplay {...commentWithChildren as CommentWithChildren} maxDepth={maxDepth}/>
        </>
     );
}
 
export default CommentTree;