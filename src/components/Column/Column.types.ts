import { ReactNode } from "react";

export interface ColumnProps {
    reverse?: boolean;
    align?: "start" | "end" | "center";
    justify?: "start" | "end" | "center" | "between" | "around";
    children: ReactNode;
}
