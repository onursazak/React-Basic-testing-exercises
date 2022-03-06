import React from "react";
import Counter from "../Counter";
import { getByTestId, render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("header renders with correct text", () => {
  const { getByTestId } = render(<Counter />);
  // const headerEl = getByTestId("header");
  // veya
  const headerEl = screen.getByTestId("header");

  expect(headerEl.textContent).toBe("My Counter");
});

test("counter initially start with text of 0", () => {
  render(<Counter />);
  const counterEl = screen.getByTestId("counter");

  expect(counterEl.textContent).toBe("0");
});

test("input contains initial value of 1", () => {
  render(<Counter />);
  const inputEl = screen.getByTestId("input");

  expect(inputEl.value).toBe("1");
});

test("add button renders with +", () => {
  render(<Counter />);

  const addBtn = screen.getByTestId("add-btn");
  expect(addBtn.textContent).toBe("+");
});

test("subtract button renders with -", () => {
  render(<Counter />);

  const addBtn = screen.getByTestId("subtract-btn");
  expect(addBtn.textContent).toBe("-");
});

test("change value of input works correctly", () => {
  render(<Counter />);

  const inputEl = screen.getByTestId("input");

  expect(inputEl.value).toBe("1");

  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });

  expect(inputEl.value).toBe("5");
});

test("click on plus button adds 1 to counter", () => {
  render(<Counter />);

  const counterEl = screen.getByTestId("counter");
  const addBtnEl = screen.getByTestId("add-btn");

  fireEvent.click(addBtnEl);
  expect(counterEl.textContent).toBe("1");
});

test("click on subtract button subtracts 1 to counter", () => {
  render(<Counter />);

  const counterEl = screen.getByTestId("counter");
  const subtractBtn = screen.getByTestId("subtract-btn");

  expect(counterEl.textContent).toBe("0");
  fireEvent.click(subtractBtn);
  expect(counterEl.textContent).toBe("-1");
});

test("changing input value then clicking on add btn work correctly", () => {
  render(<Counter />);

  const counterEl = screen.getByTestId("counter");
  const addBtnEl = screen.getByTestId("add-btn");
  const inputEl = screen.getByTestId("input");

  fireEvent.change(inputEl, {
    target: {
      value: 5,
    },
  });

  fireEvent.click(addBtnEl);
  expect(counterEl.textContent).toBe("5");
});

test("changing input value then clicking on subtract btn work correctly", () => {
  render(<Counter />);

  const counterEl = screen.getByTestId("counter");
  const subtractBtnEl = screen.getByTestId("subtract-btn");
  const inputEl = screen.getByTestId("input");

  fireEvent.change(inputEl, {
    target: {
      value: 5,
    },
  });

  fireEvent.click(subtractBtnEl);
  expect(counterEl.textContent).toBe("-5");
});

test("adding and then subtracting leads to the correct counter number", () => {
    
});
