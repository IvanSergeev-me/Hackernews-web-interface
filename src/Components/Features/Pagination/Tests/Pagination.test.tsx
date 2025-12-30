import { describe, it, expect, jest, beforeEach } from "@jest/globals";

jest.mock("../Pagination.module.scss", () => ({
  __esModule: true,
  default: {
    pagination_container: "pagination_container",
    pageNum__active: "pageNum__active",
  },
}));

jest.mock("../getVisiblePages");
jest.mock("../getMaxPageNumber");

import { fireEvent, render, screen } from "@testing-library/react";
import Pagination from "../Pagination";
import * as getVisiblePagesModule from "../getVisiblePages";
import * as getMaxPageNumberModule from "../getMaxPageNumber";

const mockGetVisiblePages =
  getVisiblePagesModule.getVisiblePages as jest.MockedFunction<
    typeof getVisiblePagesModule.getVisiblePages
  >;
const mockGetMaxPageNumber =
  getMaxPageNumberModule.getMaxPageNumber as jest.MockedFunction<
    typeof getMaxPageNumberModule.getMaxPageNumber
  >;

describe("Pagination Component", () => {
  const mockOnPageChange = jest.fn();
  const defaultProps = {
    totalItems: 100,
    pageSize: 10,
    pageNum: 1,
    onPageChange: mockOnPageChange,
    pageDelta: 2,
  };

  beforeEach(() => {
    mockGetMaxPageNumber.mockReturnValue(10);
    mockGetVisiblePages.mockReturnValue([1, 2, 3, "...", 10]);
  });

  // ТЕСТ 1: Базовый рендеринг
  it("отображает элементы страниц", () => {
    render(<Pagination {...defaultProps} />);

    screen.getByText("1");
    screen.getByText("2");
    screen.getByText("3");
    screen.getByText("...");
    screen.getByText("10");

    const allPages = screen.getAllByRole("listitem");
    expect(allPages.length).toBe(5);
  });

  // ТЕСТ 2: Переключение страницы
  it("переключает страницу", () => {
    const { rerender } = render(<Pagination {...defaultProps} />);
    const clickablePageNumber = screen.getByText("3");
    fireEvent.click(clickablePageNumber);
    expect(mockOnPageChange).toHaveBeenCalledWith(3);
    expect(mockOnPageChange).toHaveBeenCalledTimes(1);

    mockGetVisiblePages.mockReturnValue([1, 2, 3, 4, 5, "...", 10]);

    rerender(<Pagination {...defaultProps} pageNum={3} />);

    screen.getByText("1");
    screen.getByText("2");
    screen.getByText("3");
    screen.getByText("4");
    screen.getByText("5");
    screen.getByText("...");
    screen.getByText("10");
    const allPages = screen.getAllByRole("listitem");
    expect(allPages.length).toBe(7);
  });
});
