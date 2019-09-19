import Page from "../../../Page";
import React from "react";

export default new Page("computerscience1-basicsofc-theosprey", "The Osprey", <div>
    <p>
        All you wanted to know is how to make the next Fortnite,
        but now your professor is putting this "Linux" roadblock in your way.
        Here's the bare minimum you need to know how to use it:
    </p>
    <p>
        To log into the Osprey, open a command prompt or terminal and type the following:
    </p>
    <code>
        ssh [n-number]@osprey.unf.edu
    </code>
    <p className="pt-2">
        Enter your UNF password when prompted. Once you log in, use the following commands:
    </p>
    <table className="table table-striped">
        <tr>
            <th>I want to</th>
            <th>Command</th>
            <th>Notes</th>
        </tr>
        <tr>
            <td>See what's in the current directory</td>
            <td><code>ls</code></td>
        </tr>
        <tr>
            <td>See what directory I'm in</td>
            <td><code>pwd</code></td>
        </tr>
        <tr>
            <td>Make a new directory</td>
            <td><code>mkdir [directory name]</code></td>
        </tr>
        <tr>
            <td>Enter a directory</td>
            <td><code>cd [directory name]</code></td>
        </tr>
        <tr>
            <td>Go up a directory</td>
            <td><code>cd ..</code></td>
        </tr>
        <tr>
            <td>Edit/create a file</td>
            <td><code>pico [file]</code></td>
        </tr>
        <tr>
            <td>Remove a file/directory</td>
            <td><code>rm -r [file or directory]</code></td>
        </tr>
        <tr>
            <td>Compile a C project</td>
            <td><code>gcc [file.c] -o [output]</code></td>
        </tr>
        <tr>
            <td>Run an executable</td>
            <td><code>./executable</code></td>
        </tr>
        <tr>
            <td>Turn in my project</td>
            <td><code>turnin [file] [turnin_code]</code></td>
        </tr>
    </table>
    <p className="pt-2">
        While Linux is undeniably important to know for a computer science major, you really don't need to know it
        if you're an electrical engineering or mechanical engineering major and this is a graduation requirement.
        However, if you are a computer science major, you really should be comfortable with a Linux command line
        by the time you graduate.
    </p>
</div>);
