import React from 'react';
import './App.css';
import Module from "./content/Module";
import Navbar from "./Navbar";

export interface AppProps {
    modules: Module[];
}

export default class App extends React.Component<AppProps> {
    public constructor(props: AppProps) {
        super(props);
    }

    public render() {
        return (
            <div className="w-100 d-flex flex-row">
                <div className="d-flex flex-column main_content">
                    {this.props.modules.map(e => e.jsx())}
                </div>
                <Navbar modules={this.props.modules} />
            </div>
        )
    }
}
