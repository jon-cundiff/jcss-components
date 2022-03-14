import React, { FC } from "react";
import "@jon-cundiff/jcss/dist/jcss.min.css";

import { RowProps } from "./Row.types";
import ClassNameBuilder from "../Util/ClassNameBuilder";

const Row: FC<RowProps> = ({
    reverse,
    fill,
    align,
    justify,
    fg,
    fgx,
    fgy,
    wrap,
    className,
    children,
}) => {
    let classes = new ClassNameBuilder("parent")
        .add(reverse ? "row-reverse" : "")
        .add(fill ? "row-fill" : "")
        .add(wrap ? "row-wrap" : "")
        .processProps({ align, justify, fg, fgx, fgy })
        .processClassName(className);

    return <div className={classes.getClassString()}>{children}</div>;
};

export default Row;
