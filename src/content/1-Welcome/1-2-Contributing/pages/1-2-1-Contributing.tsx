import Page from "../../../Page"
import React from 'react'

export default new Page("1-2-1", "Contributing",
    <div>
        <p>The project's source is available on <a href="https://github.com/jonathan-lemos/cs1help">Github</a> if you
            want to contribute.</p>
        <br/>
        <b>If you want to:</b>
        <ul>
            <li>
                Add a page:<br/>
                Go to <code>src/content/</code> to see examples of how pages are laid out. Then send a pull request to
                add your own.
            </li>
            <li>
                Make style changes:<br/>
                The rest of the project is laid out under <code>src/</code>, so make changes there and submit a pull
                request.
            </li>
        </ul>
    </div>
);
