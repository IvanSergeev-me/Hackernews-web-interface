export type PageItem = number | string;

export interface GetVisiblePagesParams {
  pageNum: number;
  maxPageNumber: number;
  pageDelta?: number;
}

export interface GetMaxPageParams {
    totalItems: number, 
    pageSize: number
}