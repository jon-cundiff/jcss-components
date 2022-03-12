export const processGaps = (
    classNames: string[],
    fg: 0 | 1 | 2 | 3 | 4 | 5 | undefined,
    fgx: 0 | 1 | 2 | 3 | 4 | 5 | undefined,
    fgy: 0 | 1 | 2 | 3 | 4 | 5 | undefined
) => {
    if (fg) {
        classNames.push(`fg-${fg}`);
    } else {
        if (fgx) {
            classNames.push(`fgx-${fgx}`);
        }

        if (fgy) {
            classNames.push(`fgy-${fgy}`);
        }
    }
};
