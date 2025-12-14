export const getValidPage = (
  pageParam: string | null,
  defaultPageNum: number,
  totalPages?: number,
): number => {
  if (!pageParam) return defaultPageNum;
  const pageNum = parseInt(pageParam);
  if (isNaN(pageNum) || pageNum < 1) return defaultPageNum;
  if (totalPages && pageNum > totalPages && totalPages > 0)
    return defaultPageNum;

  return pageNum;
};
