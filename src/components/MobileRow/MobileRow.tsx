import React, { FC } from "react";
import "@jon-cundiff/jcss/dist/jcss.min.css";

import { MobileRowProps } from "./MobileRow.types";
import { processGaps } from "../Util/gaps";
import { processClassName } from "../Util/classNames";

const MobileRow: FC<MobileRowProps> = ({
    align,
    justify,
    fg,
    fgx,
    fgy,
    className,
    children,
}) => {
    let classNames = ["parent", "mobile-row"];

    if (align) classNames.push(`align-${align}`);
    if (justify) classNames.push(`justify-${justify}`);
    processGaps(classNames, fg, fgx, fgy);
    processClassName(classNames, className);

    return <div className={classNames.join(" ")}>{children}</div>;
};

export default MobileRow;
