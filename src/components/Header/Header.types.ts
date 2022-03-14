import { ReactNode } from "react";

export interface HeaderItem {
    inner: string | ReactNode;
    link?: string;
    external?: boolean;
    className?: string;
    itemChildren?: HeaderItem[];
}

export interface HeaderProps {
    styleType?: "primary" | "secondary" | "danger" | "success" | "info";
    lighter?: boolean;
    logoImg?: string;
    logoText?: string;
    leftChildren?: HeaderItem[];
    rightChildren?: HeaderItem[];
    className?: string;
    children: ReactNode;
}
