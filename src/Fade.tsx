import React from 'react';
import './App.css';

export interface FadeProps {
    render: boolean;
}


export interface FadeState {
    active: boolean;
    render: boolean;
}

export class Fade extends React.Component<FadeProps, FadeState> {
    public constructor(props: FadeProps) {
        super(props);
        this.state = {active: props.render, render: props.render};
    }

    public componentDidUpdate(prevProps: FadeProps): void {
        if (this.props.render && !prevProps.render) {
            this.setState({active: true, render: true})
        } else if (!this.props.render && prevProps.render) {
            this.setState({active: false, render: true});
            setTimeout(() => {
                !this.props.render && this.setState({active: false, render: false})
            }, 400);
        }
    }

    public render() {
        return this.state.render ?
            <div className={this.state.active ? "fadein" : "fadeout"}>
                {this.props.children}
            </div>
            :
            <div/>
    }
}