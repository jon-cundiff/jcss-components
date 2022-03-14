import { ReactNode } from "react";

export interface RowProps {
    reverse?: boolean;
    fill?: boolean;
    align?: "start" | "end" | "center";
    justify?: "start" | "end" | "center" | "between" | "around";
    fg?: 0 | 1 | 2 | 3 | 4 | 5;
    fgx?: 0 | 1 | 2 | 3 | 4 | 5;
    fgy?: 0 | 1 | 2 | 3 | 4 | 5;
    wrap?: boolean;
    className?: string;
    children: ReactNode;
}
