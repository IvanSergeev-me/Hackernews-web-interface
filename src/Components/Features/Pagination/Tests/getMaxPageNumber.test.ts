import { getMaxPageNumber } from "../getMaxPageNumber";
import { describe, test, expect } from "@jest/globals";

describe("getMaxPageNumber - различные значения", () => {
  test("Количество итемов делится на pageSize без остатка", () => {
    const result = getMaxPageNumber({
      totalItems: 100,
      pageSize: 10,
    });

    expect(result).toBe(10);
  });

  test("Количество итемов делится на pageSize с остатком", () => {
    const result = getMaxPageNumber({
      totalItems: 101,
      pageSize: 10,
    });

    expect(result).toBe(11);
  });

  test("Количество итемов меньше, чем размер страницы", () => {
    const result = getMaxPageNumber({
      totalItems: 5,
      pageSize: 10,
    });

    expect(result).toBe(1);
  });

  test("Количество итемов = 0", () => {
    const result = getMaxPageNumber({
      totalItems: 0,
      pageSize: 10,
    });

    expect(result).toBe(0);
  });
});

describe("getMaxPageNumber эдж кейсы", () => {
  test("Кол-во элементов и пейджсайз равны 0", () => {
    const result = getMaxPageNumber({
      totalItems: 0,
      pageSize: 0,
    });

    expect(result).toBeNaN();
  });

  test("Переданы дробные значения", () => {
    const result = getMaxPageNumber({
      totalItems: 10.5,
      pageSize: 2.5,
    });

    expect(result).toBe(5);
  });

  test("Передано отрицательное значение", () => {
    const result = getMaxPageNumber({
      totalItems: -10,
      pageSize: 5,
    });

    expect(result).toBe(-2);
  });
});
