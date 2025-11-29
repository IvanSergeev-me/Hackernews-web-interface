import type { GetVisiblePagesParams, PageItem } from "./types";

export const getVisiblePages = ({
  pageNum,
  maxPageNumber,
  pageDelta = 1
}: GetVisiblePagesParams): PageItem[] => {
  const pages: PageItem[] = [];
  for (let i = 1; i <= maxPageNumber; i++) {
    if (i === 1 || i === maxPageNumber || (i >= pageNum - pageDelta && i <= pageNum + pageDelta)) {
      pages.push(i);
    } 
    else if (i === pageNum - pageDelta - 1 || i === pageNum + pageDelta + 1) {
      if (pages[pages.length - 1] !== '...') {
        pages.push('...');
      }
    }
  }

  return pages;
};