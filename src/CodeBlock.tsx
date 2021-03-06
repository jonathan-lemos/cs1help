import React from "react";

export interface CodeBlockProps {
    language: "c" | "gcc" | "text";
    text: string | string[]
}

const patterns: { [key: string]: Array<{ key: RegExp, style: string, nest?: Array<{ key: RegExp, style: string }> }> } = {
    "c": [
        {
            key: /\b_Complex\b|\bauto\b|\bbreak\b|\bcase\b|\bchar\b|\bconst\b|\bcontinue\b|\bdefault\b|\bdo\b|\bdouble\b|\belse\b|\benum\b|\bextern\b|\bfloat\b|\bfor\b|\bgoto\b|\bif\b|\binline\b|\bint\b|\blong\b|\bregister\b|\brestrict\b|\breturn\b|\bshort\b|\bsigned\b|\bsizeof\b|\bstatic\b|\bstruct\b|\bswitch\b|\btypedef\b|\bunion\b|\bunsigned\b|\bvoid\b|\bvolatile\b|\bwhile\b/,
            style: "code-keyword"
        },
        {
            key: /\b[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b/,
            style: "code-number"
        },
        {
            key: /"(?:\\"|[^"])*?"/,
            style: "code-string",
            nest: [
                {
                    key: /\\./,
                    style: "code-string-escape"
                },
                {
                    key: /%.*?[xXfduscp%]/,
                    style: "code-string-percent"
                }
            ]
        },
        {
            key: /'..?'/,
            style: "code-string",
            nest: [
                {
                    key: /\\./,
                    style: "code-string-escape"
                }
            ]
        },
        {
            key: /\/\/.*$|\/\*.*?\*\//m,
            style: "code-comment"
        },
        {
            key: /#.*$/m,
            style: "code-preprocessor",
            nest: [
                {
                    key: /<(.*?)>/,
                    style: "code-string"
                }
            ]
        }
    ],
    "gcc": [
        {
            key: /\b'(?:\\'|[^'])*?"\b/,
            style: "code-string"
        },
        {
            key: /error:/,
            style: "code-error"
        },
        {
            key: /warning:/,
            style: "code-warning"
        },
        {
            key: /\d+:\d+/,
            style: "code-keyword"
        }
    ],
    "text": []
};

const lex = (str: string[], patterns: Array<{ key: RegExp, style: string, nest?: Array<{ key: RegExp, style: string }> }>): JSX.Element[] => {
    const ret: JSX.Element[] = [];
    let buf = str.join("\n");
    while (buf !== "") {
        let best: [string, number] = ["", 99999];
        let res = buf.match(/^\s+/);
        if (res != null) {
            ret.push(<span className="pre">{res[0]}</span>);
            buf = buf.slice(res[0].length);
            continue;
        }
        let buf2: JSX.Element[] = [];
        let cname = "";
        for (const mat of patterns) {
            res = buf.match(mat.key);
            if (res == null) {
                continue;
            }
            const matched = res[res.length - 1];
            if (res.index != null && (res.index < best[1] || (res.index === best[1] && best[0].length < matched.length))) {
                cname = mat.style;
                if (!mat.nest) {
                    best = [matched, res.index + res[0].indexOf(matched)];
                    buf2 = [];
                } else {
                    best = [matched, res.index + res[0].indexOf(matched)];
                    buf2 = lex([matched], mat.nest);
                    break;
                }
            }
        }
        if (best[1] > 0) {
            ret.push(<span className="pre">{buf.slice(0, best[1])}</span>);
        }
        if (buf2.length > 0) {
            ret.push(<span className={cname}>{buf2}</span>);
        }
        else {
            ret.push(<span className={cname}>{best[0]}</span>);
        }
        buf = buf.slice(best[1] + best[0].length);
    }
    return ret;
};

export default class CodeBlock extends React.Component<CodeBlockProps> {
    public static defaultProps: Partial<CodeBlockProps> = {
        language: "text"
    };

    private readonly text: JSX.Element[];
    private readonly inline: boolean;

    public constructor(props: CodeBlockProps) {
        super(props);
        this.inline = !Array.isArray(props.text);
        const input = !Array.isArray(props.text) ? [props.text] : props.text;
        this.text = lex(input, patterns[props.language]);
    }

    public render() {
        return this.inline ? (
            <span className="code-block-inline">{this.text}</span>
        ) : (
            <div className="code-block">{this.text}</div>
        )
    }
}
