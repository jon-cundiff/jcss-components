import React, { FC } from "react";
import "@jon-cundiff/jcss/dist/jcss.min.css";

import { ButtonProps } from "./Button.types";

const Button: FC<ButtonProps> = ({ text, onClick, ...props }) => {
    return <button onClick={onClick}>{text}</button>;
};

export default Button;
