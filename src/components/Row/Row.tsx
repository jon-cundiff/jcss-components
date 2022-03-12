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
    let classNames = ["parent"];

    if (reverse) classNames.push("row-reverse");
    if (fill) classNames.push("row-fill");
    if (align) classNames.push(`align-${align}`);
    if (justify) classNames.push(`justify-${justify}`);
    processGaps(classNames, fg, fgx, fgy);
    processClassName(classNames, className);

    return <div className={classNames.join(" ")}>{children}</div>;
};

export default Row;
