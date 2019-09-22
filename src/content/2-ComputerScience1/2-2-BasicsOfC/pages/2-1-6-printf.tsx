import Page from "../../../Page";
import React from "react";
import Replit from "../../../../Replit";
import CodeBlock from "../../../../CodeBlock";

export default new Page("computerscience1-basicsofc-printf", "printf", <div>
        <p>
            Welcome to the second worst part of C. Unfortunately it's also the first part of C you learn.
            <code>printf</code>, as the name implies, lets you print things to the screen. In its most basic form, it
            can print a simple string to the screen like below:
        </p>
        <code>printf("Hello world")</code>
        <p>
            Which prints <code>Hello world</code> to the screen. printf can also be used to print variables to the screen
            like below:
        </p>
        <CodeBlock language="c" text={[
            "int x = 4;",
            "double y = 3.14;",
            "char* z = \"abc\";",
            "printf(\"thing 1: %d, thing 2: %lf, thing 3: %s\\n\", x, y, z);",
        ]}/>
        <p>
            Which prints <code>thing 1: 4, thing 2: 3.14000, thing 3: abc</code> to the screen.
        </p>
        <p>
            A full list of <code>%</code> specifiers can be found <a
            href="http://www.cplusplus.com/reference/cstdio/printf/">here</a>.
        </p>
        <p>
            A more complete list of examples can be found below:
        </p>
        <Replit href="https://repl.it/repls/SparseDigitalGreyware?lite=true" title="Printf Example"/>
    </div>
);