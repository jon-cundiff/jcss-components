import React, { FC } from "react";
import "@jon-cundiff/jcss/dist/jcss.min.css";

import { RowProps } from "./Row.types";
import { processGaps } from "../Util/gaps";
import { processClassName } from "../Util/classNames";

const Row: FC<RowProps> = ({
    reverse,
    fill,
    align,
    justify,
    fg,
    fgx,
    fgy,
    className,
    children,
}) => {
    let classes = new ClassNameBuilder("parent");

    if (reverse) classes.add("row-reverse");
    if (fill) classes.add("row-fill");
    classes.processProps({ align, justify, fg, fgx, fgy });
    classes.processClassName(className);

    return <div className={classes.getClassString()}>{children}</div>;
};

export default Row;
