import React, { FC } from "react";
import "@jon-cundiff/jcss/dist/jcss.min.css";

import { ColumnProps } from "./Column.types";
import { processGaps } from "../Util/gaps";
import { processClassName } from "../Util/classNames";

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
    let classNames = ["parent"];

    classNames.push(reverse ? "column-reverse" : "column");

    if (align) classNames.push(align);
    if (justify) classNames.push(justify);
    processGaps(classNames, fg, fgx, fgy);
    processClassName(classNames, className);

    return <div className={classNames.join(" ")}>{children}</div>;
};

export default Column;
