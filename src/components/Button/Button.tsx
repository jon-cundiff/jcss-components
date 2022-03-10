import React, { FC } from "react";
import "@jon-cundiff/jcss/dist/jcss.min.css";

import { ButtonProps } from "./Button.types";
import { processCommonProps } from "../Util/classNames";

const Button: FC<ButtonProps> = ({
    text,
    faIcon,
    iconCircle,
    styleType,
    modifiers,
    onClick,
    children,
}) => {
    const classNames = ["btn"];
    processCommonProps(classNames, styleType, modifiers);

    if (iconCircle) {
        classNames.push("icon-circle");
    } else if (!text && !children) {
        classNames.push("icon-only");
    }

    return (
        <button onClick={onClick} className={classNames.join(" ")}>
            {faIcon ? <i className={faIcon}></i> : ""}
            <span>{text ? text : children}</span>
        </button>
    );
};

export default Button;
