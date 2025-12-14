import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getValidPage } from "../Utils/PageValidator/getValidPage";

export const useValidPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = searchParams.get("pageNum");

  const validPage = getValidPage(pageParam, 1);

  const [currentPage, setCurrentPage] = useState<number>(validPage);

  const setNewPage = (pageNum: number) => {
    setCurrentPage(pageNum);
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("pageNum", pageNum.toString());
    setSearchParams(newSearchParams);
  };

  return {
    currentPage,
    setNewPage,
  };
};
