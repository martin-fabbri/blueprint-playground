import {Callout, Intent} from '@blueprintjs/core';
import {IconName} from '@blueprintjs/icons';

import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

import * as React from 'react';

export interface ICalloutExampleState {
    icon?: IconName;
    intent?: Intent;
    showHeader: boolean;
}

class App extends React.Component {
    public state: ICalloutExampleState = {showHeader: true};

    public render() {
        const {showHeader, ...calloutProps} = this.state;

        return (
            <div className="">

                <nav className="pt-navbar">
                    <div className="pt-navbar-group pt-align-left">
                        <div className="pt-navbar-heading">8 Color PBMC Tutorial</div>
                        <span className="pt-navbar-divider"/>
                        <div className="pt-input-group">
                            <span className="pt-icon pt-icon-search"/>
                            <input
                                type="search"
                                className="pt-input"
                                placeholder="Search groups..."
                            />
                        </div>
                        <div className="pt-text-muted pt-small">
                            LD1_NS_+_NS_A1_exp
                        </div>
                    </div>
                    <div className="pt-navbar-group pt-align-right">
                        <button className="pt-button pt-minimal pt-icon-control">Configure Workspace</button>
                        <div className="pt-button-group pt-minimal">
                            <a className="pt-button pt-icon-undo" role="button"/>
                            <a className="pt-button pt-icon-redo" role="button"/>
                        </div>
                        <span className="pt-navbar-divider"/>
                        <button className="pt-button pt-minimal pt-icon-user"/>
                        <button className="pt-button pt-minimal pt-icon-help"/>
                        <button className="pt-button pt-minimal pt-icon-cog"/>
                    </div>
                </nav>

                <div className="pt-callout pt-intent-success pt-icon-tick-circle">
                    <h4>Success</h4>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </div>
                <div className="pt-callout pt-icon-info-sign">
                    <h4>Callout Heading</h4>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </div>

                <Callout {...calloutProps} title={showHeader ? "Callout JS api" : undefined}>
                    Ad, adipisci alias assumenda at dignissimos esse explicabo harum hic.
                </Callout>

            </div>
        );
    }
}

export default App;
