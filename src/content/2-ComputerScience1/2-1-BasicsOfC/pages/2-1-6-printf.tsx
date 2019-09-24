import Page from "../../../Page";
import React from "react";
import Replit from "../../../../Replit";
import CodeBlock from "../../../../CodeBlock";

export default new Page("computerscience1-basicsofc-printf", "printf", <div>
        <p>
            Welcome to the second worst part of C. Unfortunately it's also the first part of C you learn.
            <CodeBlock text="printf"/>, as the name implies, lets you print things to the screen. In its most basic form, it
            can print a simple string to the screen like below:
        </p>
        <CodeBlock language="c" text={[
            'printf("Hello world\n");'
        ]}/>
        <p>
            Which prints <CodeBlock text="Hello world"/> followed by a "newline" to the screen.
            The "newline" does what the enter key does in any editor; it puts you on a new line.
            <CodeBlock text="printf"/> can also be used to print variables to the screen
            like below:
        </p>
        <CodeBlock language="c" text={[
            "int x = 4;",
            "double y = 3.14;",
            "char* z = \"abc\";",
            "printf(\"thing 1: %d, thing 2: %lf, thing 3: %s\\n\", x, y, z);",
        ]}/>
        <p>
            Which prints <CodeBlock text="thing 1: 4, thing 2: 3.14000, thing 3: abc"/> to the screen.
        </p>
        <p>
            A full list of <CodeBlock text="%"/> specifiers can be found <a
            href="http://www.cplusplus.com/reference/cstdio/printf/">here</a>.
        </p>
        <p>
            A more complete list of examples can be found below:
        </p>
        <Replit href="https://repl.it/repls/SparseDigitalGreyware?lite=true" title="Printf Example"/>
    </div>
);