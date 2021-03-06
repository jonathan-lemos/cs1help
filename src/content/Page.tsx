import React from "react";

export default class Page {
    public readonly id: string;
    public readonly title: string;
    public readonly content: JSX.Element;

    public constructor(id: string, title: string, content: JSX.Element) {
        this.title = title;
        this.content = content;
        this.id = id;
    }

    public jsx(): JSX.Element {
        return (
            <div id={this.id} key={this.id} className="page">
                <a href={`#${this.id}`} className="title-page mt-3 align-self-center">{this.title}</a>
                <hr className="w-100"/>
                <div className="page-content">
                    {this.content}
                </div>
            </div>
        )
    }
}