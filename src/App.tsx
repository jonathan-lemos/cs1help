import React from 'react';
import './App.css';
import Module from "./content/Module";

export interface AppProps {
    modules: Module[];
}

export interface AppState {
    module: Number;
    submodule: Number;
    page: Number;
}

export default class App extends React.Component<AppProps, AppState> {

    public constructor(props: AppProps) {
        super(props);
        this.state = {module: 1, submodule: 1, page: 1};
    }

    public setPage(s: Partial<AppState>) {
        const newState = Object.assign(Object.assign(this.state, {}), s);
        this.setState(newState);
    }

    public render() {
        return (
            <div className="container-fluid d-flex flex-row">
                <div className="navbar">

                </div>
                <div className="d-flex flex-column flex-grow-1">
                    {this.props.modules.map(e => e.jsx())}
                </div>
            </div>
        )
    }
}
