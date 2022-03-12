import React, { FC } from "react";
import "@jon-cundiff/jcss/dist/jcss.min.css";

import { ColumnProps } from "./Column.types";

const Column: FC<ColumnProps> = ({
    reverse,
    align,
    justify,
    className,
    children,
}) => {
    let classNames = ["parent"];

    classNames.push(reverse ? "column-reverse" : "column");

    if (align) classNames.push(align);
    if (justify) classNames.push(justify);
    if (className) classNames.push(...className.split(" "));

    return <div className={classNames.join(" ")}>{children}</div>;
};

export default Column;
