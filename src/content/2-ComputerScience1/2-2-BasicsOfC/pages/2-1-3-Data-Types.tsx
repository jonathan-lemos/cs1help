import Page from "../../../Page";
import React from "react";

export default new Page("computerscience1-basicsofc-datatypes", "Data Types", <div>
    <p>
        The whole point of a program is to process data, so it would benefit you to know what kinds of data you are
        working with (not an exhaustive list):
    </p>
    <table className="table">
        <tr>
            <th>Type</th>
            <th>tl;dr</th>
            <th>Full explanation</th>
        </tr>
        <tr>
            <td><code>int</code></td>
            <td>An integer (such as <code>123456</code>), which is a <i>whole</i> number (no decimals).</td>
            <td>On 99% of systems this integer can range from -2^31 to 2^31 - 1 and is 32 bits in length. Note that this
                is not true on every system.
            </td>
        </tr>
        <tr>
            <td><code>char</code></td>
            <td>A character (such as <code>'A'</code>).</td>
            <td>Even though this is a "character", deep down it really is just an integer from -2^7 to 2^7 -
                1 (on 99% of systems). For example, the character <code>'A'</code> is really just the
                integer <code>65</code>.
            </td>
        </tr>
        <tr>
            <td><code>char*</code></td>
            <td>A string of characters (such as <code>"Hello world"</code>).</td>
            <td>This is technically not a basic type like the others in the table, but is a "pointer" to
                a <code>char</code>.
                Pointers are quite a complex topic, so look <a
                    href={"#soon"}>here (coming soon)</a> for a full explanation.
            </td>
        </tr>
        <tr>
            <td><code>char[]</code></td>
            <td>Also a string of characters (such as <code>"Hello world"</code>).</td>
            <td>Also not a basic type, but an array of <code>char</code>. Arrays are not pointers, but a block of x
                amount of <code>char</code>.
                See <a href={"#soon"}>the section on arrays</a> for details.
            </td>
        </tr>
        <tr>
            <td><code>float</code></td>
            <td>A decimal (such as <code>3.14</code>).</td>
            <td>Floats are slightly imprecise and cannot represent numbers exactly (so <code>0.3</code> will be
                represented as <code>0.3000000004</code>. On 99% of systems floats are 32 bits
                in
                length. They are called "floats" because they represent a "floating-point number". You really should be
                using <code>double</code> instead as
                it is just as fast (on most systems) and much more precise.
            </td>
        </tr>
        <tr>
            <td><code>double</code></td>
            <td>A decimal (such as <code>3.14</code>), but several times more precise than a <code>float</code>.</td>
            <td>Like floats, doubles cannot represent numbers exactly, but with (on 99% of systems) 64 bits instead of
                32 bits, they are more precise by a factor of 2^32. They are called "doubles" because they have double
                the amount of bits as a <code>float</code>.
            </td>
        </tr>
        <tr>
            <td><code>long double</code></td>
            <td>A decimal (such as <code>3.14</code>), but even more precise than a <code>double</code>.</td>
            <td>Like doubles, long doubles cannot represent numbers exactly, but are (on 99% of systems) 128 bits long.
                Do not use these because the precision gain is negligible and the performance hit is serious.
            </td>
        </tr>
        <tr>
            <td><code>long</code></td>
            <td>An integer that is (typically) bigger than an <code>int</code></td>
            <td>On 99% of systems they are 64 bit and therefore can store integers from -2^63 to 2^63 - 1.</td>
        </tr>
        <tr>
            <td><code>long long</code></td>
            <td>An integer that is (sometimes) bigger than an <code>long</code></td>
            <td>On 99% of systems they are 64 bit and therefore can store integers from -2^63 to 2^63 - 1.</td>
        </tr>
        <tr>
            <td><code>short</code></td>
            <td>An integer that is (typically) smaller than an <code>int</code></td>
            <td>On 99% of systems they are 16 bit and therefore can store integers from -2^15 from 2^15 - 1. For the
                love of god use <code>int</code> instead of short even if you expect a 16-bit value. These have a pretty
                bad performance hit due to CPU alignment and whatnot and are generally not worth using in any case.
                Don't try to prematurely optimize by saving 2 bytes here and there. Your code should go nowhere near
                your RAM limit anyway, and if it is, then the 2 bytes you saved from <code>short</code> was the least of
                your concerns.
            </td>
        </tr>
    </table>
</div>);