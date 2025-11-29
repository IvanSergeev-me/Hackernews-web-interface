import { useQuery } from "react-query";
import type { ItemId, ItemInfo } from "../Pages/Topstories/types";
import { ItemsApi } from "../API/ItemsApi";

export const useItems = (ids: ItemId[], page?:number) => {
    return useQuery<ItemInfo[], Error>({
        queryKey: ['use-items', page, ids],
        queryFn: async () => {
            const response = ids.map(id => {
                const item = ItemsApi.getItemInfoById(id).then(res => res.data);
                return item;
            });
            console.log("fetching items")
            const data = Promise.all(response);
            return data;
        }
    });
}

export const useItem = (id: ItemId) =>{
    return useQuery<ItemInfo, Error>({
        queryKey: ['use-items', id],
        queryFn: async () => {
            const response = ItemsApi.getItemInfoById(id).then(res => res.data);
            return response;
        }
    });
}