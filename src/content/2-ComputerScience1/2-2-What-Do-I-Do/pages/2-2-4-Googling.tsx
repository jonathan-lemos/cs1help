import Page from "../../../Page";
import React from "react";
import CodeBlock from "../../../../CodeBlock";

export default new Page("computerscience1-itisntworking-googling", "Googling", <div>
    <p>
        This is, by far, the most important thing you'll learn in computer science.
        Computer science is a massive topic, and even the best in the field still forget how to make a for loop
        in X language occasionally. Googling is an invaluable skill for patching up details as well as debugging
        your code. However, do not use Google to explain a concept for you, as Google results tend to be too short
        to adequately explain a concept. Instead use this guide to explain concepts.
    </p>
    <p>
        Always include the language in question:<br/>
        <span className="text-green">Good example:</span>
        <blockquote>
            how do i read a file in C
        </blockquote>
        <span className="text-red">Bad example:</span>
        <blockquote>
            how do i read a file
        </blockquote>
    </p>
    <p>
        Never include details irrelevant to your specific problem:
        <p>
            <span className="text-green">Good example:</span>
            <blockquote>
                what is segmentation fault in C
            </blockquote>
            <span className="text-red">Bad example:</span>
            <blockquote>
                what is segmentation fault in C in my rock paper scissors project
            </blockquote>
        </p>
    </p>
    <p>
        Always include the error message if there is one:
        <p>
            <span className="text-green">Good example:</span>
            <blockquote>
                "hello" undeclared (first use in this function) in C
            </blockquote>
            <span className="text-red">Bad example:</span>
            <blockquote>
                printf(hello world) not working in C
            </blockquote>
        </p>
        <p>
            "hello" is technically an irrelevant detail in the good example, but Google is usually good enough to pick
            up
            on that when you paste in an <i>exact</i> error message.
            However, try not to include too many more irrelevant details, such as:<br/>
            <span className="text-red">Bad example:</span>
            <blockquote>
                error.c:4:9: error: ‘hello’ undeclared (first use in this function)
            </blockquote>
        </p>
    </p>
</div>);