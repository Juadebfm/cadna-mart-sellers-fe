import { Link, type LinkProps } from "react-router-dom";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "white" | "white-glow" | "outline";
export type ButtonSize = "default" | "sm";

const base =
  "inline-flex items-center justify-center rounded-[8px] font-normal transition";

const sizes: Record<ButtonSize, string> = {
  default:
    "h-[54px] w-full sm:w-auto sm:min-w-[245px] py-[18px] text-[16px]",
  sm: "h-[40px] px-5 text-[14px]",
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-[#5B5BD6] to-[#7B61FF] text-white hover:opacity-90",
  white: "bg-white text-indigo-900 hover:bg-white/95",
  "white-glow":
    "bg-white text-[#4B4CC8] shadow-[0_8px_16px_rgba(255,255,255,0.12)] hover:bg-white/95",
  outline:
    "border border-[#D7D7DB] bg-white text-[#4C4D60] hover:bg-[#D7D7DB]/10",
};

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
}

type ButtonLinkProps = BaseProps & Omit<LinkProps, "className" | "children">;

export function ButtonLink({
  variant = "primary",
  size = "default",
  className = "",
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <Link
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Link>
  );
}

type ButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export function Button({
  variant = "primary",
  size = "default",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`.trim()}
      {...rest}
    >
      {children}
    </button>
  );
}
