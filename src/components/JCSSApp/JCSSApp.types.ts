import { ReactNode } from "react";
export interface JCSSAppProps {
    fg?: 0 | 1 | 2 | 3 | 4 | 5;
    fgx?: 0 | 1 | 2 | 3 | 4 | 5;
    fgy?: 0 | 1 | 2 | 3 | 4 | 5;
    className?: string;
    children: ReactNode;
}
