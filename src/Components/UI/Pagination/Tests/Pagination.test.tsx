// Pagination.test.tsx
import { describe, it, expect, jest, beforeEach } from "@jest/globals";

// 1. ВСЕ МОКИ ДОЛЖНЫ БЫТЬ ДО ИМПОРТА КОМПОНЕНТА!
jest.mock("../Pagination.module.scss", () => ({
  pagination_container: "pagination_container",
  pageNum__active: "pageNum__active",
}));

jest.mock("../getVisiblePages");
jest.mock("../getMaxPageNumber");

// 2. Теперь импортируем компонент и библиотеки
import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "../Pagination";
import * as getVisiblePagesModule from "../getVisiblePages";
import * as getMaxPageNumberModule from "../getMaxPageNumber";

// 3. Приводим моки к типу jest.Mock
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
    jest.clearAllMocks();
    mockGetMaxPageNumber.mockReturnValue(10);
    mockGetVisiblePages.mockReturnValue([1, 2, 3, "...", 10]);
  });

  // ТЕСТ 1: Базовый рендеринг
  it("отображает элементы страниц", () => {
    render(<Pagination {...defaultProps} />);

    // Если эти строки выполняются без ошибок - элементы найдены
    screen.getByText("1");
    screen.getByText("2");
    screen.getByText("3");
    screen.getByText("...");
    screen.getByText("10");

    // Дополнительно можно проверить количество
    const allPages = screen.getAllByRole("listitem");
    expect(allPages.length).toBe(5);
  });

  // ТЕСТ 2: Вызовы вспомогательных функций
  it("корректно вызывает getMaxPageNumber и getVisiblePages", () => {
    render(<Pagination {...defaultProps} />);

    expect(mockGetMaxPageNumber).toHaveBeenCalledWith({
      totalItems: 100,
      pageSize: 10,
    });
    expect(mockGetVisiblePages).toHaveBeenCalledWith({
      pageNum: 1,
      maxPageNumber: 10,
      pageDelta: 2,
    });
  });

  // ТЕСТ 3: Клики на номера страниц
  it("вызывает onPageChange при клике на номер страницы", () => {
    render(<Pagination {...defaultProps} />);

    const page2 = screen.getByText("2");
    fireEvent.click(page2);

    expect(mockOnPageChange).toHaveBeenCalledWith(2);
    expect(mockOnPageChange).toHaveBeenCalledTimes(1);
  });

  // ТЕСТ 4: Клики на разделитель
  it("не вызывает onPageChange при клике на разделитель '...'", () => {
    render(<Pagination {...defaultProps} />);

    const delimiter = screen.getByText("...");
    fireEvent.click(delimiter);

    expect(mockOnPageChange).not.toHaveBeenCalled();
  });

  // ТЕСТ 5: Пограничные случаи - одна страница
  it("работает когда всего одна страница", () => {
    mockGetMaxPageNumber.mockReturnValue(1);
    mockGetVisiblePages.mockReturnValue([1]);

    render(
      <Pagination
        totalItems={5}
        pageSize={10}
        pageNum={1}
        onPageChange={mockOnPageChange}
      />,
    );

    // Используем .toBeInTheDocument или проверяем, что не null
    expect(screen.getByText("1")).toBeTruthy();
    expect(screen.queryByText("...")).toBeNull();
  });

  // ТЕСТ 6: Проверка передачи pageDelta
  it("передает pageDelta во вспомогательную функцию", () => {
    render(<Pagination {...defaultProps} pageDelta={3} />);

    expect(mockGetVisiblePages).toHaveBeenCalledWith(
      expect.objectContaining({
        pageDelta: 3,
      }),
    );
  });
});
