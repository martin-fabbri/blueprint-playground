import {Button, NonIdealState} from '@blueprintjs/core';
import {Subject} from 'rxjs';
// import {fromPromise} from 'rxjs/observable/fromPromise';
import { fromPromise } from 'rxjs/internal/observable/fromPromise';
import {debounceTime, distinctUntilChanged, filter, switchMap} from 'rxjs/operators';
import {tap} from 'rxjs/operators';

import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

import * as React from 'react';

export interface IProps {
    text?: string;
}

export interface IUser {
    name: string,
    username: string;
    website: string;
}

export interface IState {
    limit?: number;
    loading?: boolean;
    offset?: number;
    results?: IUser[],
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

    private readonly search$: Subject<string> = new Subject<string>();

    constructor(props: IProps) {
        super(props);
        this.state = INITIAL_STATE;
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleClearSearch = this.handleClearSearch.bind(this);
    }

    public componentWillMount() {
        this.search$.subscribe(value => {
            this.setState(
                (value.length === 0)
                    ? ({...INITIAL_STATE})
                    : ({ search: value})
            )
        });

        this.search$
            .pipe(
                tap(search => console.log('pipe is working .... ')),
                filter(search => search.length > 0),
                debounceTime(400),
                distinctUntilChanged(),
                switchMap(search => {
                    console.log('inside ... switchmappppppp');
                    return fromPromise(
                        fetch(`http://jsonplaceholder.typicode.com/users/?q=${search}`)
                    );
                })
            ).subscribe(response => {
                response.json().then(responseResults =>
                    this.setState({
                        results: responseResults ? responseResults : [],
                        search: this.state.search
                    })
                );
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
                                description={(
                                    <p>Your search didn't match any words in our dictionary.</p>
                                )}
                                visual="search"
                            />
                        }

                        {search.length > 0 && results && results.length > 0 &&
                            <div>
                                <div className="">
                                    {results && results.map(item => (
                                        <div key={item.username}>
                                            <span className="pt-tag pt-large pt-minimal">{item.name}</span>
                                        </div>
                                    ))}
                              </div>
                            </div>
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
