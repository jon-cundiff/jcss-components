import React, { FC } from "react";
import "@jon-cundiff/jcss/dist/jcss.min.css";

import { JCSSAppProps } from "./JCSSApp.types";
import ClassNameBuilder from "../Util/ClassNameBuilder";

const JCSSApp: FC<JCSSAppProps> = ({ fg, fgx, fgy, className, children }) => {
    const classes = new ClassNameBuilder("app")
        .processProps({ fg, fgx, fgy })
        .processClassName(className);

    return <div className={classes.getClassString()}>{children}</div>;
};

export default JCSSApp;
