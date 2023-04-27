import type { ComponentProps } from "solid-js";
import type { Meta, StoryObj } from "@storybook/html";

import Button, { type ButtonProps } from "./Button";

type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: {
    children: "Test",
  },
};

export default {
  title: "Components/Button",
  tags: ["autodocs"],
  /**
   * Here you need to render JSX to make HMR work!
   */
  render: (props) => (
    <div class="flex max-w-[200px] flex-col gap-y-10 p-10">
      <Button {...props} />
      <Button {...props} />
      <Button {...props} />
      <Button {...props} />
      <Button {...props} />
      <Button {...props} />
    </div>
  ),
} as Meta<ComponentProps<typeof Button>>;
