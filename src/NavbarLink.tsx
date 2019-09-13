import React from 'react';
import './App.css';
import Module from "./content/Module";
import Page from "./content/Page";
import Submodule from "./content/Submodule";

export interface NavbarLinkProps {
    reference: Module | Submodule | Page;
    active: boolean;
}

export interface NavbarLinkState {
    active: boolean;
}

export default class NavbarLink extends React.Component<NavbarLinkProps, NavbarLinkState> {
    public static defaultProps: Partial<NavbarLinkProps> = {
        active: false
    };

    public constructor(props: NavbarLinkProps) {
        super(props);
        this.state = {active: this.props.active}
    }

    public active(): boolean {
        return this.state.active;
    }

    public setActive(active?: boolean): void {
        if (active === undefined) {
            this.setState({active: !this.state.active});
        }
        else {
            this.setState({active});
        }
    }

    public handleScroll = () => {
        const section = document.getElementById(this.props.reference.id);
        if (section === null) {
            return;
        }
        const sectionTop = section.offsetTop;
        const sectionBot = sectionTop + section.offsetHeight;
        const windowTop = window.pageYOffset;
        const windowBot = windowTop + window.innerHeight;
        this.setActive(windowTop <= sectionBot && windowBot >= sectionTop)
    };

    public componentDidMount(): void {
        window.addEventListener("scroll", this.handleScroll);
        this.handleScroll();
    }

    public componentWillUnmount(): void {
        window.removeEventListener("scroll", this.handleScroll);
    }

    public render() {
        if (this.props.reference instanceof Module) {
            return (
                <div className="bg-light-1">
                    <a href={`#${this.props.reference.id}`}
                       className={`nav-link ${this.state.active ? "nav-link-active" : ""}`}
                       style={{fontSize: "100%"}}>{this.props.reference.title}</a>
                    {this.state.active && this.props.reference.submodules.map(e => {
                        return <NavbarLink key={e.id} reference={e}/>
                    })}
                </div>
            );
        }
        if (this.props.reference instanceof Submodule) {
            return (
                <div className="bg-light-2">
                    <a href={`#${this.props.reference.id}`}
                       className={`nav-link ${this.state.active ? "nav-link-active" : ""}`}
                       style={{fontSize: "90%"}}>&nbsp;&nbsp;&nbsp;&nbsp;{this.props.reference.title}</a>
                    {this.state.active && this.props.reference.pages.map(e => {
                        return <NavbarLink key={e.id} reference={e}/>
                    })}
                </div>
            );
        } else {
            return (
                <div className="bg-light-3">
                    <a href={`#${this.props.reference.id}`}
                       className={`nav-link ${this.state.active ? "nav-link-active" : ""}`}
                       style={{fontSize: "80%"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.reference.title}</a>
                </div>
            );
        }
    }
}