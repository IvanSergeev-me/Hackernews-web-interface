import * as React from 'react';
import style from './Pagination.module.scss';
import { getVisiblePages } from './getVisiblePages';
import { getMaxPageNumber } from './getMaxPageNumber';

interface PaginationProps {
    totalItems: number,
    pageSize: number,
    onPageChange: (pageNum: number) => void,
    pageNum: number,
    pageDelta?: number,
}

const Pagination: React.FunctionComponent<PaginationProps> = ({ totalItems, pageSize, pageDelta = 2, onPageChange, pageNum }) => {

    const maxPageNumber = getMaxPageNumber({ totalItems, pageSize });

    const pageNumbers = getVisiblePages({
        pageNum,
        maxPageNumber,
        pageDelta
    });

    const handlePageClick = (e: React.MouseEvent<HTMLSpanElement>, page: number | string) => {
        e.preventDefault();
        if (typeof page === 'number') {
            onPageChange(page);
        }
    };

    return (
        <div className={style.pagination_container}>
            <ul>
                {pageNumbers.map((number, index) => (
                    <li key={typeof number === 'number' ? number : `delimiter-${index}`}>
                        <span className={pageNum === number ? style.pageNum__active : ''} onClick={(e) => handlePageClick(e, number)}>{number}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Pagination;