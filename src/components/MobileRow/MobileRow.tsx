import React, { FC } from "react";
import "@jon-cundiff/jcss/dist/jcss.min.css";

import { MobileRowProps } from "./MobileRow.types";
import ClassNameBuilder from "../Util/ClassNameBuilder";

const MobileRow: FC<MobileRowProps> = ({
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
        .add("mobile-row")
        .add(wrap ? "row-wrap" : "")
        .processProps({ align, justify, fg, fgx, fgy })
        .processClassName(className);

    return <div className={classes.getClassString()}>{children}</div>;
};

export default MobileRow;
