import React, { FC } from "react";
import ClassNameBuilder from "../Util/ClassNameBuilder";
import { FooterProps } from "./Footer.types";

const Footer: FC<FooterProps> = ({
    styleType,
    lighter,
    className,
    children,
}) => {
    const classes = new ClassNameBuilder("footer")
        .processProps({ styleType, lighter }, true)
        .processClassName(className);

    return <footer className={classes.getClassString()}>{children}</footer>;
};

export default Footer;
