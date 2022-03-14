import { ReactNode } from "react";

export interface CardProps {
    title: string;
    styleType?: "primary" | "secondary" | "danger" | "success" | "info";
    lighter?: boolean;
    sub?: boolean;
    className: string;
    innerClassName: string;
    children: ReactNode;
}
