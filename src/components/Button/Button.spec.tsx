import { fireEvent, render, screen } from "solid-testing-library";
import { describe, expect, it, vi } from "vitest";

import Button from "./Button";

describe("Timer component", () => {
  it("should display child", () => {
    render(() => <Button>Test</Button>);
    const buttonText = screen.getByText("Test");
    expect(buttonText).toBeInTheDocument();
  });

  it("should be clickable", () => {
    const mockClick = vi.fn();
    render(() => <Button onClick={mockClick}>Test</Button>);
    const button = screen.getByText("Test");
    fireEvent.click(button);
    expect(mockClick).toBeCalledTimes(1);
  });
});
