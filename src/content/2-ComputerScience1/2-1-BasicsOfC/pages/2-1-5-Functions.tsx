import Page from "../../../Page";
import React from "react";
import CodeBlock from "../../../../CodeBlock";

export default new Page("computerscience1-basicsofc-functions", "Functions", <div>
    <p>
        Listen up, because this is the most important concept you're going to take away from CS1.
        A function in any programming language takes 0 or more inputs, does something with those inputs, and spits
        out a result. Functions are great because they let you avoid writing the same code to do the same thing multiple
        times.
    </p>
    <p>
        A function declared as <CodeBlock language="c" text="char func(int a, double b)"/> would take an integer
        parameter and a decimal parameter, do something with them, and output an character result.
        The output type, <CodeBlock language="c" text="char"/>, part of this declaration is called the "return type",
        while the <CodeBlock language="c" text="int a"/>, and <CodeBlock language="c" text="double b"/> inputs are
        called "parameters" of the function. A function with a return type of <CodeBlock language="c" text="void"/>
        does not return a value, while a function with a parameter list like
        <CodeBlock language="c" text="int func(void)"/> does not take any parameters.
    </p>
    <p>
        Below are some examples of functions C has built-in:
    </p>
    <table className="table">
        <tbody>
        <tr>
            <th>Name</th>
            <th><CodeBlock language="c" text="#include <this>"/></th>
            <th>Explanation</th>
        </tr>
        <tr>
            <td><CodeBlock language="c" text="int abs(int x)"/></td>
            <td><CodeBlock text="math.h"/></td>
            <td>Takes an integer and returns its absolute value as an integer.</td>
        </tr>
        <tr>
            <td><CodeBlock language="c" text="int atoi(char* str)"/>*</td>
            <td><CodeBlock text="stdlib.h"/></td>
            <td>
                Takes a string of numbers like <CodeBlock language="c" text='"123"'/> and returns the
                equivalent integer <CodeBlock language="c" text="123"/>.
            </td>
        </tr>
        <tr>
            <td><CodeBlock language="c" text="double sqrt(double x)"/></td>
            <td><CodeBlock text="math.h"/></td>
            <td>Takes a decimal and returns its square root.</td>
        </tr>
        <tr>
            <td><CodeBlock language="c" text="char* strcat(char* dst, char* src)"/></td>
            <td><CodeBlock text="string.h"/></td>
            <td>Copies the string <CodeBlock text="src"/> into the string <CodeBlock text="dst"/> and returns <CodeBlock
                text="dst"/></td>
        </tr>
        </tbody>
    </table>
    <p className="text-muted">
       * - I know it's a <i>const</i> char pointer, but that requires explaining a lot.
    </p>
    <p>
        To use these functions, <CodeBlock language="c" text="#include"/> the appropriate header file. So if you
        wanted to use <CodeBlock text="abs"/>, you would <CodeBlock language="c" text="#include <math.h>"/> at
        the top of your C file.
    </p>
    <p>
        You can also declare your own functions like below:
        <CodeBlock language="c" text={[
            "double square(double x) {",
            "   double y = x * x;",
            "   return y;",
            "}"
        ]}/>
        The above function takes a single decimal parameter and outputs the square of that decimal.
        The <CodeBlock language="c" text="return"/> keyword exits the current function and outputs the given value.
        In this case, the <CodeBlock text="square"/> function outputs the value contained in the
        variable <CodeBlock text="y"/>. In the case of a <CodeBlock language="c" text="void"/>-returning function,
        <CodeBlock language="c" text="return;"/> simply exits the function.
    </p>
    <p>
        Note that a function you make must always return a value of the correct type.
    </p>
</div>);