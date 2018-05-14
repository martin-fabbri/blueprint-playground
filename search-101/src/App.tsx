import {Button, NonIdealState} from '@blueprintjs/core';
import {Subject} from 'rxjs';

import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

import * as React from 'react';

export interface IProps {
    text?: string;
}

export interface IState {
    limit?: number;
    loading: boolean;
    offset?: number;
    results?: string[] | null,
    search: string;
    total?: number
};

const INITIAL_STATE: IState = {
    limit: 50,
    loading: false,
    offset: 0,
    results: [],
    search: '',
    total: 0
};

class App extends React.Component<IProps, IState> {

    private search$: Subject<string>;

    constructor(props: IProps) {
        super(props);
        this.state = INITIAL_STATE;
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleClearSearch = this.handleClearSearch.bind(this);
    }

    public componentWillMount() {
        this.search$ = new Subject<string>();

        this.search$.subscribe(value => {
            this.setState(
                (value.length === 0)
                    ? ({...INITIAL_STATE})
                    : ({ search: value})
            )
        });
        console.log('componentWillMount COMPLETED!!!');
    }

    public componentWillUnmount() {
        this.search$.complete();
    }

    public render() {
        const {search, results} = this.state;
        console.log(`search ... ${search}`);
        return (
            <div className="">
                <div className="">
                    <div className="pt-input-group pt-large">
                        <span className="pt-icon pt-icon-search"/>
                        <input
                            type="search"
                            className="pt-input"
                            placeholder="Enter search criteria"
                            value={search}
                            onChange={this.handleSearchChange}
                        />
                        <Button
                            className="pt-minimal"
                            icon="cross"
                            onClick={this.handleClearSearch}
                        />
                    </div>
                </div>
                <div>
                    <div className="mt-4">
                        {search.length === 0 &&
                            <NonIdealState
                                title="Give it a try!"
                                description="Search the dictionaty for particular word."
                                visual={(
                                    <div className="pt-non-ideal-state-visual pt-non-ideal-state-icon">
                                        <span className="pt-icon pt-icon-arrow-up"/>
                                    </div>
                                )}
                            />
                        }

                        {search.length > 0 && results && results.length === 0 &&
                            <NonIdealState
                                title="No results!"
                                description="Your search didn't match any words in our dictionary."
                                visual={(
                                    <div className="pt-non-ideal-state-visual pt-non-ideal-state-icon">
                                        <span className="pt-icon pt-icon-arrow-up"/>
                                    </div>
                                )}
                            />
                        }

                    </div>
                </div>
            </div>
        );
    }

    private handleClearSearch() {
        console.log('clear search ... ', this.state);
        this.setState({...INITIAL_STATE});

    }

    private handleSearchChange(event: React.FormEvent<HTMLInputElement>) {
        console.log('Value changed ...', event.currentTarget.value);
        console.log(this.search$);
        this.search$.next(event.currentTarget.value);
    }
}

export default App;
