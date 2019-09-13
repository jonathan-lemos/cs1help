import React from 'react';
import './App.css';
import Module from "./content/Module";
import NavbarLink from "./NavbarLink";

export interface NavbarProps {
    modules: Module[];
}

export default class Navbar extends React.Component<NavbarProps> {
    public constructor(props: NavbarProps) {
        super(props);
    }

    public render() {
        return (
            <div className="sidebar">
                {this.props.modules.map(e => {return (
                    <NavbarLink reference={e} />
                )})}
            </div>
        )
    }
}