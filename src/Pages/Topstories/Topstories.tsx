import React from 'react';
import { usePaginatedStories } from '../../Hooks/useTopStories';
import Pagination from '../../Components/UI/Pagination/Pagination';
import StoryList from '../../Components/Features/Topstories/StoryList';
import { useItems } from '../../Hooks/useItems';
import ItemsSkeleton from '../../Components/UI/ItemsSkeleton/ItemsSkeleton';
import { ITEMS_PER_PAGE } from '../../Config/constants';
import { useValidPage } from '../../Hooks/useValidPage';


const Topstories: React.FunctionComponent= () => {
    const pageSize = ITEMS_PER_PAGE;

    const {currentPage,setNewPage} = useValidPage();  

    const { stories: storyIds, totalItems, isLoading, isError } = usePaginatedStories({ 
        pageNum: currentPage, 
        pageSize: pageSize 
    });

    const {data, isLoading: isStoriesLoading, isError: isStoriesError} = useItems(storyIds, currentPage);

    if (isError || isStoriesError) return <section>Error</section>;

    if (isLoading) return <ItemsSkeleton skeletonItems={Math.ceil(pageSize/3)}/>

    const onPageChange = (pageNum:number) =>{
        setNewPage(pageNum);
    }

    return ( 
        <section>
            <StoryList stories={data} isLoading={isStoriesLoading}/>
            {storyIds && <Pagination totalItems={totalItems } pageSize={pageSize} pageNum={currentPage} onPageChange={onPageChange}/>}
        </section>
        
     );
}
 
export default Topstories;