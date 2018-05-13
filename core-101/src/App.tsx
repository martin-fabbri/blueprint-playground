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
            <div className="App">
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
