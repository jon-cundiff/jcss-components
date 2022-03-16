import React, { FC } from "react";
import "@jon-cundiff/jcss/dist/jcss.min.css";

import { ButtonProps } from "./Button.types";
import ClassNameBuilder from "../Util/ClassNameBuilder";

const Button: FC<ButtonProps> = ({
    text,
    disabled,
    faIcon,
    iconCircle,
    styleType,
    lighter,
    onClick,
    className,
    children,
}) => {
    let iconclass = "";
    if (iconCircle) {
        iconclass = "icon-circle";
    } else if (!text && !children) {
        iconclass = "icon-only";
    }

    const classes = new ClassNameBuilder("btn")
        .add(iconclass)
        .processProps({ styleType, lighter }, true)
        .processClassName(className);

    return (
        <button
            onClick={onClick}
            className={classes.getClassString()}
            disabled={disabled}
        >
            {faIcon ? <i className={faIcon}></i> : ""}
            {(text || children) && <span>{text ? text : children}</span>}
        </button>
    );
};

export default Button;
