import Page from "../../../Page";
import React from "react";
import CodeBlock from "../../../../CodeBlock";

export default new Page("computerscience1-whatdoido-askinggoodquestions", "Asking good questions", <div>
    <p>
        So you want to ask a question, and you type:
        <blockquote>
            how i compare string number in C
        </blockquote>
        and nobody has a clue what you're talking about.
    </p>
    <p>
        <strong>If you have tried to solve the problem</strong> and you still need to ask a question, that's fine, but
        use the below tips to get the best answers:
        <ul>
            <li>
                <p>
                    <strong>
                        Tell us what you tried. If you have tried nothing, then try something before you ask for help.
                        If you have no idea where to start, mention that in your question.
                    </strong>
                </p>
                Telling people what you tried not only helps immensely in solving your problem, but also shows that
                you care enough to actually give a decent effort on your project and you aren't some freeloader
                who just wants to get "their" degree on the back of someone else's effort. At the end of the day,
                your project is your project and 100% your responsibility.
            </li>
            <li>
                <i>Use halfway-decent English.</i> You don't have to capitalize the beginning of each sentence,
                but you should not be any words short of a complete sentence. Punctuation also helps significantly.
                The person helping you should not have to figure out what you're trying to say. For example, if you're
                going to say <q>i code print answer function error</q>, say <q>i have coded the print answer function
                and it errors</q>.
            </li>
            <li>
                <i>Don't be vague.</i> Your question should include enough information so that someone else can get
                a good picture of what your problem is. If you ask <q>Can someone help me with my project 2?
                It isn't working.</q>, how can you expect someone to help you if they have no idea what part of your
                code isn't working, or what the code is designed to do?
                <ul>
                    <li>
                        If someone not in your class is trying to help you, post your project's rubric.
                    </li>
                    <li>
                        If a line of code is erroring, post the function it's in. On Discord, post code like this:
                        <CodeBlock text={[
                            "```c",
                            "int main(void) {",
                            "   return 0;",
                            "}",
                            "```",
                        ]}/>
                        For Java, replace "c" with "java" in this example. The three ticks used are called "backticks"
                        and can be found under your escape key.
                    </li>
                    <li>
                        If your code doesn't error but also does not do what's expected, post the code <i>and</i>
                        the expected output along with the input that produces it.
                    </li>
                </ul>
                Taking these steps makes it much easier for the person helping you, which in turn makes your life
                easier as you aren't peppered with follow-up questions.
            </li>
        </ul>
    </p>
</div>);