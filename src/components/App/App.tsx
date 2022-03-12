import React, { FC } from "react";
import "@jon-cundiff/jcss/dist/jcss.min.css";

import { AppProps } from "./App.types";

const App: FC<AppProps> = ({ children }) => {
    return <div className="app">{children}</div>;
};

export default App;
