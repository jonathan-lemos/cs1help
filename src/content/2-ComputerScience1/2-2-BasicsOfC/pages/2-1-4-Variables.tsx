import Page from "../../../Page";
import React from "react";
import CodeBlock from "../../../../CodeBlock";

export default new Page("computerscience1-basicsofc-variables", "Variables", <div>
    <p>
        You did some math, and you want to store the result so you don't have to do it again.
        This is where variables come in.
    </p>
    <p>
        You can save an integer value like this: <CodeBlock language="c" text="int x = 2 + 2;"/>, and you can save a
        decimal value like this: <CodeBlock language="c" text="double x = 0.1 + 0.2;"/>. After you save a value like
        this, you can reuse it like any other number: <CodeBlock language="c" text="int y = x * 4;"/>. Statements like
        these are called "variable declarations", because they declare a variable for later use.
    </p>
    <p>
        Saving an integer
        value to a <CodeBlock language="c" text="double"/> does pretty much what you expect,
        so <CodeBlock language="c" text="double x = 2;"/> saves the value <CodeBlock language="c" text="2.0"/>
        to <CodeBlock language="c" text="x"/>.
        However, saving a decimal to a <CodeBlock language="c" text="int"/> drops the decimal part
        leaving only the integer part, meaning <CodeBlock language="c" text="int x = 2.4;"/> would save the
        value <CodeBlock language="c" text="2"/> to <CodeBlock language="c" text="x"/>.
    </p>
    <p>
        Once you have declared a variable, any code written <i>after your declaration</i>, and <strong>within the
        current set of curly braces</strong> (<CodeBlock text="{...}"/>) can use it. Once a variable has been declared,
        a variable of the same name cannot be redeclared, so
        <CodeBlock language="c" text={[
            "int x = 4;",
            "int x = 2;"
        ]}/>
        is invalid. However, you can reassign a variable like below:
        <CodeBlock language="c" text={[
            "int x = 4;",
            "x = 2;"
        ]}/>
    </p>
    <p>
        You can also declare a variable without giving it a value like <CodeBlock language="c" text="int x;"/>.
        In this case, <CodeBlock text="x"/> is given a random value, so it's always good practice to assign your
        variables like <CodeBlock language="c" text="int x = 0;"/> before use.
    </p>
    <p>
        Below is a list of all basic types you can declare a variable as in C:
    </p>
    <table className="table">
        <tbody>
        <tr>
            <th>Type</th>
            <th>tl;dr</th>
            <th>Full explanation</th>
        </tr>
        <tr>
            <td><CodeBlock language="c" text="int"/></td>
            <td>An integer (such as <CodeBlock language="c" text="123456"/>), which is a <i>whole</i> number (no
                decimals).
            </td>
            <td>On 99% of systems this integer can range from -2^31 to 2^31 - 1 and is 32 bits in length. Note that this
                is not true on every system.
            </td>
        </tr>
        <tr>
            <td><CodeBlock language="c" text="double"/></td>
            <td>A decimal (such as <CodeBlock language="c" text="3.14"/>), but several times more precise than
                a <CodeBlock language="c" text="float"/>.
            </td>
            <td>Like floats, doubles cannot represent numbers exactly, but with (on 99% of systems) 64 bits instead of
                32 bits, they are more precise by a factor of 2^32. They are called "doubles" because they have double
                the amount of bits as a <CodeBlock language="c" text="float"/>.
            </td>
        </tr>
        <tr>
            <td><CodeBlock language="c" text="char"/></td>
            <td>A character (such as <CodeBlock language="c" text="'A'"/>).</td>
            <td>Even though this is meant to represent a "character", deep down it really is just an
                integer from -2^7 to 2^7 - 1 (on 99% of systems). For example, the
                character <CodeBlock language="c" text="'A'"/> is really just the
                integer <CodeBlock language="c" text="65"/>.
            </td>
        </tr>
        <tr>
            <td><CodeBlock language="c" text="char*"/></td>
            <td>A string of characters (such as <CodeBlock language="c" text='"Hello world"'/>).</td>
            <td>This is technically not a basic type like the others in the table, but is a "pointer" to
                a <CodeBlock language="c" text="char"/>.
                Pointers are quite a complex topic, so look <a
                    href={"#soon"}>here (coming soon)</a> for a full explanation.
            </td>
        </tr>
        <tr>
            <td><CodeBlock language="c" text="char[]"/></td>
            <td>Also a string of characters (such as <CodeBlock language="c" text='"Hello world"'/>).</td>
            <td>Also not a basic type, but an array of <CodeBlock language="c" text="char"/>. Arrays are not pointers,
                but a block of x
                amount of <CodeBlock language="c" text="char"/>.
                See <a href={"#soon"}>the section on arrays</a> for details.
            </td>
        </tr>
        <tr>
            <td><CodeBlock language="c" text="float"/></td>
            <td>A decimal (such as <CodeBlock language="c" text="3.14"/>).</td>
            <td>Floats are slightly imprecise and cannot represent numbers exactly (so <CodeBlock language="c"
                                                                                                  text="0.3"/> will be
                represented as <CodeBlock language="c" text="0.3000000004"/>. On 99% of systems floats are 32 bits
                in
                length. They are called "floats" because they represent a "floating-point number". You really should be
                using <CodeBlock language="c" text="double"/> instead as
                it is just as fast (on most systems) and much more precise.
            </td>
        </tr>
        <tr>
            <td><CodeBlock language="c" text="long double"/></td>
            <td>A decimal (such as <CodeBlock language="c" text="3.14"/>), but even more precise than a <CodeBlock
                language="c" text="double"/>.
            </td>
            <td>Like doubles, long doubles cannot represent numbers exactly, but are (on 99% of systems) 128 bits long.
                Do not use these because the precision gain is negligible and the performance hit is serious.
            </td>
        </tr>
        <tr>
            <td><CodeBlock language="c" text="long"/></td>
            <td>An integer that is (typically) bigger than an <CodeBlock language="c" text="int"/></td>
            <td>On 99% of systems they are 64 bit and therefore can store integers from -2^63 to 2^63 - 1.</td>
        </tr>
        <tr>
            <td><CodeBlock language="c" text="long long"/></td>
            <td>An integer that is (sometimes) bigger than an <CodeBlock language="c" text="long"/></td>
            <td>On 99% of systems they are 64 bit and therefore can store integers from -2^63 to 2^63 - 1.</td>
        </tr>
        <tr>
            <td><CodeBlock language="c" text="short"/></td>
            <td>An integer that is (typically) smaller than an <CodeBlock language="c" text="int"/></td>
            <td>On 99% of systems they are 16 bit and therefore can store integers from -2^15 from 2^15 - 1. For the
                love of god use <CodeBlock language="c" text="int"/> instead of short even if you expect a 16-bit value.
                These have a pretty
                bad performance hit due to CPU alignment and whatnot and are generally not worth using in any case.
                Don't try to prematurely optimize by saving 2 bytes here and there. Your code should go nowhere near
                your RAM limit anyway, and if it is, then the 2 bytes you saved from <CodeBlock language="c"
                                                                                                text="short"/> was the
                least of
                your concerns.
            </td>
        </tr>
        </tbody>
    </table>
</div>);