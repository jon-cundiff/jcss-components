import { ReactNode } from "react";

export interface DropdownProps {
    title: string;
    styleType?: "primary" | "secondary" | "danger" | "success" | "info";
    lighter?: boolean;
    alignRight?: boolean;
    className?: string;
    children: ReactNode;
}
