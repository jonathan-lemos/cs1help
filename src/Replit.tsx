import React from "react";

export interface ReplitProps {
    href: string;
    title: string;
}

export const Replit: React.FC<ReplitProps> = props => <iframe title={props.title} height="400px" width="100%"
                                                              src={props.href}
                                                              scrolling="no" frameBorder="no" allowTransparency={true}
                                                              allowFullScreen={true}
                                                              sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"/>;

export default Replit;