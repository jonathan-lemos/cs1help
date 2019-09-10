import Page from "./Page";
import React from "react";

export default class Submodule {
    public readonly id: string;
    public readonly title: string;
    public readonly pages: Page[];
    public readonly header: JSX.Element | undefined;

    constructor(id: string, title: string, pages: Page[], header?: JSX.Element) {
        this.title = title;
        this.pages = pages;
        this.id = id;
        this.header = header;
    }

    public jsx(): JSX.Element {
        return (
            <div className="submodule d-flex flex-column align-items-center bg-light-2 my-2 px-2 w-100">
                <a href={`#${this.id}`} id={this.id} className="title-submodule my-2">{this.title}</a>
                {this.header && <hr className="w-100"/>}
                {this.header && this.header}
                {this.pages.map(e => e.jsx())}
            </div>
        )
    }
}