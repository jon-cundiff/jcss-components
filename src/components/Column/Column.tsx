import React, { FC } from "react";
import "@jon-cundiff/jcss/dist/jcss.min.css";

import { ColumnProps } from "./Column.types";
import ClassNameBuilder from "../Util/ClassNameBuilder";

const Column: FC<ColumnProps> = ({
    reverse,
    align,
    justify,
    fg,
    fgx,
    fgy,
    className,
    children,
}) => {
    let classes = new ClassNameBuilder("parent")
        .add(reverse ? "column-reverse" : "column")
        .processProps({ align, justify, fg, fgx, fgy })
        .processClassName(className);

    return <div className={classes.getClassString()}>{children}</div>;
};

export default Column;
