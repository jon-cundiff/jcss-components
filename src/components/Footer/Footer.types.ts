import { ReactNode } from "react";

export interface FooterProps {
    styleType?: "primary" | "secondary" | "danger" | "success" | "info";
    lighter?: boolean;
    className?: string;
    children: ReactNode;
}
