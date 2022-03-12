import React, { FC } from "react";
import "@jon-cundiff/jcss/dist/jcss.min.css";

import { AppProps } from "./App.types";
import { processGaps } from "../Util/gaps";
import { processClassName } from "../Util/classNames";

const App: FC<AppProps> = ({ fg, fgx, fgy, className, children }) => {
    const classNames = ["app"];

    if (className) classNames.push(...className.split(" "));
    processGaps(classNames, fg, fgx, fgy);
    processClassName(classNames, className);

    return <div className={classNames.join(" ")}>{children}</div>;
};

export default App;
