import Submodule from "./Submodule";
import React from "react";

export default class Module {
    public readonly id: string;
    public readonly title: string;
    public readonly submodules: Submodule[];
    public readonly header: JSX.Element | undefined;

    constructor(id: string, title: string, submodules: Submodule[], header?: JSX.Element) {
        this.title = title;
        this.submodules = submodules;
        this.id = id;
        this.header = header;
    }

    public jsx(): JSX.Element {
        return (
            <div className="module d-flex flex-column align-items-center shadow-sm bg-light-1 my-4 px-2 w-100">
                <a href={`#${this.id}`} id={this.id} className="title-module my-3">{this.title}</a>
                {this.header && <hr className="w-100"/>}
                {this.header && this.header}
                {this.submodules.map(e => e.jsx())}
            </div>
        )
    }
}