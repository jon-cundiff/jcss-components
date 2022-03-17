import { ReactNode } from "react";

interface ThemeShades {
    main: string;
    "medium-light": string;
    lighter: string;
    lightest: string;
    dark: string;
}

export interface AppTheme {
    primary: ThemeShades;
    secondary: ThemeShades;
    info: ThemeShades;
    success: ThemeShades;
    danger: ThemeShades;
}

export interface JCSSAppProps {
    fg?: 0 | 1 | 2 | 3 | 4 | 5;
    fgx?: 0 | 1 | 2 | 3 | 4 | 5;
    fgy?: 0 | 1 | 2 | 3 | 4 | 5;
    className?: string;
    children: ReactNode;
    theme?: AppTheme;
}
