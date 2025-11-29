import { useParams } from "react-router-dom";
import { getValidItemId } from "../Utils/ItemIdValidator/getValidItemId";

interface IUseValidItemIdReturn {
    id: number;
}

export const useValidItemId = ():IUseValidItemIdReturn =>{
    const { id:raw_id } = useParams<{ id: string }>();

    const id = getValidItemId(raw_id);

    return {id};

}