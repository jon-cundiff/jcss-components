interface cbProps {
    align?: "start" | "end" | "center";
    justify?: "start" | "end" | "center" | "between" | "around";
    styleType?: "primary" | "secondary" | "danger" | "success" | "info";
    fg?: 0 | 1 | 2 | 3 | 4 | 5;
    fgx?: 0 | 1 | 2 | 3 | 4 | 5;
    fgy?: 0 | 1 | 2 | 3 | 4 | 5;
}

class ClassNameBuilder {
    private classNames: string[];

    public constructor(initialName: string) {
        this.classNames = [initialName];
    }

    public add(className: string) {
        if (className.length > 0) {
            this.classNames.push(className);
        }

        return this;
    }

    public processProps(props: cbProps) {
        if (props.styleType) {
            this.classNames.push(props.styleType);
        } else {
            this.classNames.push("primary");
        }

        if (props.align) {
            this.classNames.push(`align-${props.align}`);
        }

        if (props.justify) {
            this.classNames.push(`justify-${props.justify}`);
        }

        this.processGaps(props.fg, props.fgx, props.fgy);

        return this;
    }

    private processGaps(
        fg: 0 | 1 | 2 | 3 | 4 | 5 | undefined,
        fgx: 0 | 1 | 2 | 3 | 4 | 5 | undefined,
        fgy: 0 | 1 | 2 | 3 | 4 | 5 | undefined
    ) {
        if (fg) {
            this.classNames.push(`fg-${fg}`);
        } else {
            if (fgx) {
                this.classNames.push(`fgx-${fgx}`);
            }

            if (fgy) {
                this.classNames.push(`fgy-${fgy}`);
            }
        }
    }

    public processClassName(className: string | undefined) {
        if (className) this.classNames.push(...className.split(" "));
        return this;
    }

    public getClassString() {
        return this.classNames.join(" ");
    }
}
