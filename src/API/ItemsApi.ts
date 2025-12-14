import type { ItemId, ItemInfo } from "../Pages/Topstories/types.ts";
import { instance } from "./index.ts";

export const ItemsApi = {
  getItemInfoById(id: ItemId) {
    return instance.get<ItemInfo>(`/item/${id}.json`);
  },
};
