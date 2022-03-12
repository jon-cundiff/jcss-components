import { ReactNode } from "react";

export interface RowProps {
    reverse?: boolean;
    align?: "start" | "end" | "center";
    justify?: "start" | "end" | "center" | "between" | "around";
    children: ReactNode;
}
