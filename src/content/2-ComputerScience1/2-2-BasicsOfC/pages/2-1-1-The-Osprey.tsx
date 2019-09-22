import Page from "../../../Page";
import React from "react";
import CodeBlock from "../../../../CodeBlock";

export default new Page("computerscience1-basicsofc-theosprey", "The Osprey", <div>
    <p>
        All you wanted to know is how to make the next Fortnite,
        but now your professor is putting this "Linux" roadblock in your way.
        Here's the bare minimum you need to know how to use it:
    </p>
    <p>
        To log into the Osprey, open a command prompt or terminal by doing
        <table className="table">
            <tbody>
            <tr>
                <th>OS</th>
                <th>Do This</th>
            </tr>
            <tr>
                <td>Windows</td>
                <td>Click the start menu. Type in <CodeBlock text="cmd"/>.</td>
            </tr>
            <tr>
                <td>OSX</td>
                <td>Press <CodeBlock text="Cmd + Space"/> and then type in "Terminal".</td>
            </tr>
            <tr>
                <td>Linux</td>
                <td>If you're using Linux, you already know how to open a terminal.</td>
            </tr>
            </tbody>
        </table>
        and then type in
    </p>
    <CodeBlock language="text" text="ssh [n-number]@osprey.unf.edu"/>
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
            <td><CodeBlock text="ls"/></td>
        </tr>
        <tr>
            <td>See what directory I'm in</td>
            <td><CodeBlock text="pwd"/></td>
        </tr>
        <tr>
            <td>Make a new directory</td>
            <td><CodeBlock text="mkdir [directory name]"/></td>
        </tr>
        <tr>
            <td>Enter a directory</td>
            <td><CodeBlock text="cd [directory name]"/></td>
        </tr>
        <tr>
            <td>Go up a directory</td>
            <td><CodeBlock text="cd .."/></td>
        </tr>
        <tr>
            <td>Edit/create a file</td>
            <td><CodeBlock text="pico [file]"/></td>
        </tr>
        <tr>
            <td>Remove a file/directory</td>
            <td><CodeBlock text="rm -r [file or directory]"/></td>
        </tr>
        <tr>
            <td>Compile a C project</td>
            <td><CodeBlock text="gcc [file.c] -o [output]"/></td>
        </tr>
        <tr>
            <td>Run an executable</td>
            <td><CodeBlock text="./executable"/></td>
        </tr>
        <tr>
            <td>Turn in my project</td>
            <td><CodeBlock text="turnin [file] [turnin_code]"/></td>
        </tr>
    </table>
    <p className="pt-2">
        While Linux is undeniably important to know for a computer science major, you really don't need to know it
        if you're an electrical engineering or mechanical engineering major and this is a graduation requirement.
        However, if you are a computer science major, you really should be comfortable with a Linux command line
        by the time you graduate.
    </p>
</div>);
