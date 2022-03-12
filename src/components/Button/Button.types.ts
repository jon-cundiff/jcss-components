import { MouseEventHandler } from "react";
export interface ButtonProps {
    text?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    faIcon?: string;
    iconCircle?: boolean;
    styleType?: "primary" | "secondary" | "danger" | "success" | "info";
    modifiers?: string[];
    className?: string;
}
