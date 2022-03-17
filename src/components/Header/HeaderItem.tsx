import React, { FC } from "react";
import { HeaderItem } from "./Header.types";
import { Link } from "react-router-dom";
import ClassNameBuilder from "../Util/ClassNameBuilder";
import Dropdown from "../Dropdown";

const HeaderItem: FC<HeaderItem> = ({
    styleType,
    lighter,
    inner,
    link,
    external,
    dropdownEnd,
    className,
    itemChildren,
}) => {
    const classes = new ClassNameBuilder("header-item").processClassName(
        className
    );
    const childrenItems = itemChildren
        ? itemChildren.map((child, i) => <HeaderItem key={i} {...child} />)
        : "";

    if (itemChildren && typeof inner === "string") {
        return (
            <Dropdown
                title={inner}
                className="header-item"
                styleType={styleType}
                lighter={lighter}
                alignRight={dropdownEnd}
            >
                {childrenItems}
            </Dropdown>
        );
    }

    let linkItem;
    if (link) {
        linkItem = external ? (
            <a href={link}>{inner}</a>
        ) : (
            <Link to={link}>{inner}</Link>
        );
    } else if (typeof inner === "string") {
        linkItem = <p>{inner}</p>;
    } else {
        linkItem = inner;
    }

    return <div className={classes.getClassString()}>{linkItem}</div>;
};

export default HeaderItem;
