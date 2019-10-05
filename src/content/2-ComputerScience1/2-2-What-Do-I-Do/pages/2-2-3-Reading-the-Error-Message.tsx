import Page from "../../../Page";
import React from "react";
import CodeBlock from "../../../../CodeBlock";

export default new Page("computerscience1-itisntworking-readingtheerrormessage", "Reading the error message", <div>
    <p>
        You run your code, and it throws an error message. This is how you read it.
    </p>
    <p>
        You compile this:
        <CodeBlock language="c" text={[
            "#include <stdio.h>",
            "",
            "int main(void) {",
            "   printf(hello world);",
            "}"
        ]}/>
        And see this error message:
        <CodeBlock language="gcc" text={[
            "error.c: In function ‘main’:",
            "error.c:4:9: error: ‘hello’ undeclared (first use in this function)",
        ]}/>
        Look for the line(s) that says <CodeBlock language="gcc" text="error:"/>. Then look at the
        <CodeBlock language="gcc" text="error.c:4:9"/>. The <CodeBlock language="gcc" text="4:9"/> means
        "4th line, 9th character". That's where your error is located.
    </p>
    <p>
        You should also try reading the message next to the line number, which in this case says
        <CodeBlock language="gcc" text="‘hello’ undeclared (first use in this function)"/>. By reading this,
        you can determine that somewhere around <CodeBlock text="hello"/>, there is an error. In this case, the quotes
        are missing around <CodeBlock text="hello world"/>. Putting quotes gives us our new program
        <CodeBlock language="c" text={[
            "#include <stdio.h>",
            "",
            "int main(void) {",
            '   printf("hello world");',
            "}"
        ]}/>
        which compiles and runs successfully.
    </p>
    <p>
        Pretty much any language that has errors will tell you what line the error occurs on. However, like in this
        example, the error message can be less than helpful. In that case, plugging the error message into Google
        and clicking on the first Stack Overflow link you see usually fixes the problem.
    </p>
</div>);
