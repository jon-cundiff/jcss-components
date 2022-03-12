export const processCommonProps = (
    classNames: string[],
    styleType: string | undefined,
    modifiers: string[] | undefined
) => {
    if (styleType) {
        classNames.push(styleType);
    } else {
        classNames.push("primary");
    }
    if (modifiers) classNames.push(...modifiers);
};