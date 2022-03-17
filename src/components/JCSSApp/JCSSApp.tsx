import React, { FC } from "react";
import "@jon-cundiff/jcss/dist/jcss.min.css";

import { JCSSAppProps, AppTheme } from "./JCSSApp.types";
import ClassNameBuilder from "../Util/ClassNameBuilder";

const JCSSApp: FC<JCSSAppProps> = ({
    fg,
    fgx,
    fgy,
    className,
    children,
    theme,
}) => {
    const classes = new ClassNameBuilder("app")
        .processProps({ fg, fgx, fgy })
        .processClassName(className);

    const cssVarStyles: { [key: string]: string } = {};
    if (theme) {
        const colorKeys = ["primary", "secondary", "info", "success", "danger"];
        for (let colorKey of colorKeys) {
            for (let [modKey, val] of Object.entries(
                theme[colorKey as keyof AppTheme]
            )) {
                let keyName = `--color-${colorKey}`;
                if (modKey !== "main") {
                    keyName += `-${modKey}`;
                }
                cssVarStyles[keyName] = val;
            }
        }
    }
    return (
        <div className={classes.getClassString()} style={cssVarStyles}>
            {children}
        </div>
    );
};

export default JCSSApp;
