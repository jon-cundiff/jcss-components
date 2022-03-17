import React, { FC } from "react";
import ClassNameBuilder from "../Util/ClassNameBuilder";
import { DropdownProps } from "./Dropdown.types";

const Dropdown: FC<DropdownProps> = ({
    title,
    styleType,
    lighter,
    alignRight,
    className,
    children,
}) => {
    const classes = new ClassNameBuilder("dropdown")
        .processProps({ styleType, lighter }, true)
        .processClassName(className);
    const itemsClasses = new ClassNameBuilder("dropdown-items").add(
        alignRight ? "align-right" : "align-left"
    );
    return (
        <div className={classes.getClassString()}>
            <span>{title}</span>
            <i className="dropdown-caret"></i>
            <div className={itemsClasses.getClassString()}>{children}</div>
        </div>
    );
};

export default Dropdown;
