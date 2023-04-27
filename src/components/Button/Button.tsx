import { JSX, splitProps, type Component } from "solid-js";
import clsx from "clsx";

export interface ButtonProps
  extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: JSX.Element;
  showIcon?: boolean;
}

const Button: Component<ButtonProps> = (props) => {
  const [local, buttonProps] = splitProps(props, ["title", "showIcon"]);

  return (
    <button
      {...buttonProps}
      class={clsx(
        "rounded-md bg-blue-400 px-3 py-2 text-lg hover:bg-blue-300 active:bg-blue-300/80 dark:bg-yellow-500",
        buttonProps.class,
      )}
    >
      {local.showIcon && <p>Icon</p>}
      {props.children}
    </button>
  );
};

export default Button;
