import React, { FC } from "react";
import "@jon-cundiff/jcss/dist/jcss.min.css";

import { AppProps } from "./App.types";

const App: FC<AppProps> = ({ className, children }) => {
    const classNames = ["app"];

    if (className) classNames.push(...className.split(" "));

    return <div className={classNames.join(" ")}>{children}</div>;
};

export default App;
