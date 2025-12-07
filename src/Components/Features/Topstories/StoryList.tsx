import type { FunctionComponent } from "react";
import type { ItemInfo } from "../../../Pages/Topstories/types";
import Story from "./StoryCard/Story";
import ItemsSkeleton from "../../UI/ItemsSkeleton/ItemsSkeleton";
import { ITEMS_PER_PAGE } from "../../../Config/constants";
import style from './StoryList.module.scss';
import Job from "./JobCard/Job";
import { useFavorites } from "../../../Hooks/useFavorites";

interface StoryListProps {
    isLoading: boolean,
    isError?: boolean,
    stories: ItemInfo[] | undefined;
}

const StoryList: FunctionComponent<StoryListProps> = ({ isLoading, stories }) => {
    const pageSize = ITEMS_PER_PAGE;
     const { isFavorite, toggleFavorite } = useFavorites();
    if (isLoading) return <ItemsSkeleton skeletonItems={Math.ceil(pageSize / 3)} />
    return (
        <div className={style.list_container}>
            {stories?.map(item => {
                switch (item.type) {
                    case 'story': {
                        return <Story
                            isFavorite={isFavorite(item.id)}
                            onToggleFavorite={toggleFavorite}
                            key={item.id}
                            id={item.id}
                            by={item.by}
                            descendants={item.descendants}
                            score={item.score}
                            title={item.title}
                            time={item.time}
                            url={item.url}
                            type={item.type}
                        />
                    }
                    case 'job': {
                        return <Job 
                            isFavorite={isFavorite(item.id)}
                            onToggleFavorite={toggleFavorite}
                            key={item.id}
                            id={item.id}
                            by={item.by}
                            text={item.text}
                            score={item.score}
                            title={item.title}
                            time={item.time}
                            url={item.url}
                            type={item.type}
                        />
                    }
                    case 'comment': {
                        return null
                    }
                    default: {
                        return null;
                    }
                }

            })}
        </div>
    );
}

export default StoryList;