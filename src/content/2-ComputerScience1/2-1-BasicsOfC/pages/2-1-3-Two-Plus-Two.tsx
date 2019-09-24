import Page from "../../../Page";
import React from "react";
import CodeBlock from "../../../../CodeBlock";

export default new Page("computerscience1-basicsofc-2+2", "2 + 2", <div>
        <p>
            Computers can do math. Math works pretty intuitively. For example you can add two integers (whole numbers) like
            this: <CodeBlock language="c" text="2 + 2"/>, which evaluates to <CodeBlock language="c" text="4"/>.
            You can also add two decimal numbers like <CodeBlock language="c" text="0.1 + 0.2"/>, which evaluates
            to <CodeBlock language="c" text="0.3"/>
            , or a decimal and an integer like: <CodeBlock language="c" text="0.1 + 1"/>
            , which evaluates to <CodeBlock language="c" text="1.1"/>. However, note that adding a decimal to any other
            number always gives you a decimal in return, even if the decimal is equivalent to an integer, such
            as <CodeBlock language="c" text="2.0 + 2"/>, which evaluates to <CodeBlock language="c" text="4.0"/>, which
            is not the same number as <CodeBlock language="c" text="4"/>, because the computer treats decimals and integers
            differently.
        </p>
        <p>
            Besides adding with <CodeBlock language="c" text="+"/>, you can also subtract
            with <CodeBlock language="c" text="-"/>, multiply with <CodeBlock language="c" text="*"/>,
            and divide with <CodeBlock language="c" text="/"/>. Usual PEMDAS order of operations applies,
            so <CodeBlock language="c" text="a + b * (c / d - e)"/> would do <CodeBlock language="c" text="c / d"/> first,
            then subtract <CodeBlock language="c" text="e"/>, then multiply by <CodeBlock language="c" text="b"/>, and
            finally add <CodeBlock language="c" text="a"/> just like it would be evaluated in algebra.
        </p>
    </div>
);