import React, { FC } from "react";
import "@jon-cundiff/jcss/dist/jcss.min.css";

import { RowProps } from "./Row.types";

const Column: FC<RowProps> = ({
    reverse,
    align,
    justify,
    className,
    children,
}) => {
    let classNames = ["parent"];

    if (reverse) classNames.push("row-reverse");
    if (align) classNames.push(align);
    if (justify) classNames.push(justify);
    if (className) classNames.push(...className.split(" "));

    return <div className={classNames.join(" ")}>{children}</div>;
};

export default Column;
