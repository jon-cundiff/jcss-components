import React, { FC } from "react";
import { Link } from "react-router-dom";
import { processClassName, processCommonProps } from "../Util/classNames";
import { HeaderProps } from "./Header.types";
import HeaderItem from "./HeaderItem";

const Header: FC<HeaderProps> = ({
    styleType,
    logoImg,
    logoText,
    leftChildren,
    rightChildren,
    className,
    children,
}) => {
    const classes = new ClassNameBuilder("header")
        .processProps({ styleType })
        .processClassName(className);

    let logoTextItem;
    if (!logoImg) {
        logoTextItem = <h1>{logoText ? logoText : "Home"}</h1>;
    } else if (logoText) {
        logoTextItem = <p>{logoText}</p>;
    }

    const leftChildrenItems = leftChildren
        ? leftChildren.map((child, i) => <HeaderItem key={i} {...child} />)
        : "";

    return (
        <header className={classes.getClassString()}>
            <div className="header-logo">
                <Link to="/">
                    {logoImg && <img src={logoImg} />}
                    {logoTextItem}
                </Link>
            </div>
            <div className="header-items">{children && children}</div>
        </header>
    );
};

export default Header;
