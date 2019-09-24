import Page from "../../../Page";
import React from "react";
import Replit from "../../../../Replit";
import CodeBlock from "../../../../CodeBlock";

export default new Page("computerscience1-basicsofc-helloworld", "Hello World", <div>
    <p>
        Now you're ready to make your first C program, and it looks like this:
    </p>
    <Replit href="https://repl.it/repls/BlandCommonTrapezoid?lite=true" title="Hello World Example"/>
    <p>
        and you're wondering, "what the hell is this supposed to mean?" And your professor probably told you: "don't
        worry about that, just copy this code", and now you're in the habit of memorizing a bunch of bullshit that
        really doesn't matter when you should be trying to understand <i>why</i> this code is the way it is,
        so I'm going to give a brief explanation of it here:
    </p>
    <table className="table">
        <tr>
            <th>Part</th>
            <th>tl;dr</th>
            <th>Full explanation</th>
        </tr>
        <tr>
            <td><CodeBlock language="c" text="#include &lt;stdio.h&gt;"/></td>
            <td>This makes the functions in <CodeBlock language="c" text="stdio.h"/> available for use.</td>
            <td>All lines of code beginning with <CodeBlock language="c" text="#"/> are "preprocessor directives". This
                one essentially
                pastes the contents of the given filename
                (<CodeBlock language="c" text="stdio.h"/>) into your current file. On a Linux system, this would be
                located at
                <CodeBlock language="c" text="/usr/include/stdio.h"/>. In this case we only need the <CodeBlock
                    language="c" text="printf"/> function.
            </td>
        </tr>
        <tr>
            <td><CodeBlock language="c" text="int"/></td>
            <td>The type that this function returns. In this case, an integer.</td>
            <td>A function takes zero or more inputs, does things with those inputs, and <i>returns</i> an output.
                For example, <CodeBlock language="c" text="sin(x)"/> takes a single decimal as an input, does some black
                magic with it,
                and <i>returns</i> the sine of the given value. Meanwhile <CodeBlock language="c"
                                                                                     text="strcmp(x, y)"/> (string
                compare)
                takes two text strings and returns an integer comparing them. Just like in math,
                a function can only return a single value.
            </td>
        </tr>
        <tr>
            <td><CodeBlock language="c" text="main"/></td>
            <td>The name of the function. In C, your code always starts executing at a function named <CodeBlock
                language="c" text="main"/>.
            </td>
        </tr>
        <tr>
            <td><CodeBlock language="c" text="(void)"/></td>
            <td>This function takes no parameters.</td>
            <td>Functions take input. The inputs a function takes are described by what's between the parentheses behind
                the function's name. <CodeBlock language="c" text="void"/> is a special keyword meaning "no parameters",
                but normally you
                would
                list the parameters that the function takes.
            </td>
        </tr>
        <tr>
            <td><CodeBlock language="c" text='"{...}"'/></td>
            <td>Denotes the body of a function.</td>
            <td>Curly braces make up a "compound statement", which is just a group of statements.</td>
        </tr>
        <tr>
            <td><CodeBlock language="c" text="printf"/></td>
            <td>Prints something to the screen.</td>
            <td>This is a function that takes an input string of characters, and <i>prints</i> it to the console.
                It returns the number of characters you printed (not that you care).
                <a href={"#computerscience1-basicsofc-printf"}>It's a little more complicated than that</a>, but that's
                the gist.
            </td>
        </tr>
        <tr>
            <td><CodeBlock language="c" text='("Hello world\n")'/>
        </td>
        <td>Calls the <CodeBlock language="c" text="printf"/> function with a single input of a string of characters
            saying "Hello
            world" followed by a newline.
        </td>
        <td><CodeBlock language="c" text="\n"/> means "newline", which is equivalent to pressing the enter key on your
            keyboard.
            Strings of characters are denoted with quotes. The parentheses "call" the function with the inputs you
            put inside.
        </td>
    </tr>
    <tr>
        <td><CodeBlock language="c" text=";"/></td>
        <td>Statements in C need to have a semicolon ending them.</td>
        <td>Most pieces of code in C count as statements.</td>
    </tr>
    <tr>
        <td><CodeBlock language="c" text="return 0;"/></td>
        <td>Ends the function and returns the value <CodeBlock language="c" text="0"/> to the caller.</td>
        <td><CodeBlock language="c" text="return"/> ends your function and outputs the value you provide to it to the
            function that
            called it. In the case of your <CodeBlock language="c" text="main"/> function, the program that executed
            your program
            receives this value.
        </td>
    </tr>
</table>
</div>);