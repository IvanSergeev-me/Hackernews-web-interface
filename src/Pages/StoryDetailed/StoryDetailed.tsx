import type { FunctionComponent } from "react";
import { useValidItemId } from "../../Hooks/useValidItemId";
import { useStory } from "../../Hooks/useStory";
import ItemsSkeleton from "../../Components/UI/ItemsSkeleton/ItemsSkeleton";
import StoryDetaiedDisplay from "../../Components/Features/StoryDetailedInfo/StoryDetailedDisplay";
import StoryDetailedErrorDisplay from "../../Components/Features/StoryDetailedInfo/StoryDetailedErrorDisplay";
import CommentSection from "../../Components/Features/Comments/CommentSection";
import style from './StoryDetailed.module.scss';
import { NavLink } from "react-router-dom";

interface StoryDetailedProps {
}
 
const StoryDetailed: FunctionComponent<StoryDetailedProps> = () => {
    const { id } = useValidItemId();

    const {isStoryError,isStoryLoading,story,storyError} = useStory(id);

    if(isStoryLoading) return <ItemsSkeleton skeletonItems={2}/>

    if(isStoryError) return <StoryDetailedErrorDisplay error={storyError!} />

    return ( 
        <div className={style.story_detailed_container}>
            <div className={style.story_detailed_container__nav}><NavLink to={`../`}>Go back</NavLink></div>
            <StoryDetaiedDisplay storyInfo={story}/>
            {story.kids && <CommentSection totalComments={story.descendants} topLevelIds={story.kids}/>}
        </div>
     );
}
 
export default StoryDetailed;