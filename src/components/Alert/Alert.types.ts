import { MouseEventHandler } from "react";

export interface AlertProps {
    text: string;
    styleType?: "primary" | "secondary" | "danger" | "success" | "info";
    showClose?: boolean;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
