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

    let linkItem;
    if (link) {
        linkItem = external ? (
            <a href={link}>{inner}</a>
        ) : (
            <Link to={link}>{inner}</Link>
        );
    } else if (itemChildren && typeof inner === "string") {
        linkItem = (
            <Dropdown
                title={inner}
                styleType={styleType}
                lighter={lighter}
                alignRight={dropdownEnd}
            >
                {childrenItems}
            </Dropdown>
        );
    } else {
        linkItem = <p>{inner}</p>;
    }

    return <div className={classes.getClassString()}>{linkItem}</div>;
};

export default HeaderItem;
