import {Callout, Intent} from '@blueprintjs/core';
import {IconName} from '@blueprintjs/icons';
import {Mosaic, MosaicWindow} from 'react-mosaic-component'

import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import 'react-mosaic-component/react-mosaic-component.css';
import './App.css';

import * as React from 'react';

export interface ICalloutExampleState {
    icon?: IconName;
    intent?: Intent;
    showHeader: boolean;
}

export type ViewId = 'a' | 'b' | 'c' | 'new';

const ViewIdMosaic = Mosaic.ofType<ViewId>();
const ViewIdMosaicWindow = MosaicWindow.ofType<ViewId>();

const TITLE_MAP: Record<ViewId, string> = {
    a: 'Graph Window',
    b: 'Groups',
    c: 'Layout',
    new: 'New Window',
};

class App extends React.Component {
    public state: ICalloutExampleState = {showHeader: true};

    public render() {
        const {showHeader, ...calloutProps} = this.state;

        return (
            <div className="antialiased h-screen flex">
                <section className="flex h-screen">
                    <div className="bg-indigo-darkest text-purple-lighter flex-none w-12 p-3 hidden md:block">
                        <div className="cursor-pointer mb-4">
                            <div className="h-6 w-6 flex items-center justify-center text-black text-2xl font-semibold mb-1 overflow-hidden">
                                <img src="fjFavicon.svg" alt="icon"/>
                            </div>
                        </div>
                        <div className="cursor-pointer mb-4">
                            <div
                                className="h-6 w-6 flex items-center justify-center text-white text-xl mb-1 overflow-hidden">
                                <img src="img/ws_sample_plus.svg" alt="icon"/>
                            </div>
                            <div className="text-center text-white opacity-50 text-xs">&#8984;1</div>
                        </div>
                        <div className="cursor-pointer mb-4">
                            <div
                                className="h-6 w-6 flex items-center justify-center text-white text-xl mb-1 overflow-hidden">
                                <img src="img/ws_group_new.svg" alt="icon"/>
                            </div>
                            <div className="text-center text-white opacity-50 text-xs">&#8984;2</div>
                        </div>
                        <div className="cursor-pointer mb-4">
                            <div
                                className="h-6 w-6 flex items-center justify-center text-white text-xl mb-1 overflow-hidden">
                                <img src="img/ws_layout.svg" alt="icon"/>
                            </div>
                            <div className="text-center text-white opacity-50 text-xs">&#8984;3</div>
                        </div>
                    </div>
                </section>

                <section className="flex-none w-screen pb-6 pr-6 hidden md:block">
                    <nav className="pt-navbar pr-8">
                        <div className="pt-navbar-group pt-align-left">
                            <div className="pt-navbar-heading">8 Color PBMC Tutorial</div>
                            <span className="pt-navbar-divider"/>
                            <div className="sm:hidden md:flex pt-input-group">
                                <span className="pt-icon pt-icon-search"/>
                                <input
                                    type="search"
                                    className="pt-input pt-small"
                                    placeholder="Search groups..."
                                />
                            </div>
                            <div className="sm:hidden lg:flex lg:flex-col ml-4">
                                <div className="pt-ui-text ml-2">
                                    LD1_NS_+_NS_A1_exp
                                </div>
                                <div className="pt-ui-text pt-text-muted ml-2 text-xs">
                                    380 events
                                </div>
                            </div>

                        </div>
                        <div className="pt-navbar-group pt-align-right">
                            <button className="pt-button pt-minimal pt-icon-control"><span className="sm:hidden lg:flex">Configure Workspace</span></button>
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

                    <ViewIdMosaic
                            renderTile={(id, path) => (
                                // tslint:disable-next-line jsx-no-lambda
                                <ViewIdMosaicWindow path={path} createNode={() => 'new'} title={TITLE_MAP[id]}>

                                    {id === 'a' &&
                                    <div className="grid max-w-l mx-auto p-8">
                                        <div className="bg-white rounded h-full text-grey-darkest shadow-md">
                                            <img src="img/histogram1.png" alt="Histogran 1"
                                                 className="w-full block rounded-b"/>
                                        </div>
                                        <div className="bg-white rounded h-full text-grey-darkest shadow-md">
                                            <img src="img/dot-plot1.png" alt="Dotplot 1"
                                                 className="w-full block rounded-b"/>
                                        </div>
                                        <div className="bg-white rounded h-full text-grey-darkest shadow-md">
                                            <img src="img/density3.png" alt="Quads 1"
                                                 className="w-full block rounded-b"/>
                                        </div>
                                        <div className="bg-white rounded h-full text-grey-darkest shadow-md">
                                            <img src="img/gate1.png" alt="Gate 1" className="w-full block rounded-b"/>
                                        </div>
                                        <div className="bg-white rounded h-full text-grey-darkest shadow-md">
                                            <img src="img/quad2.png" alt="Quad 2" className="w-full block rounded-b"/>
                                        </div>

                                        <div
                                            className="span-col-2 span-row-2 bg-white rounded h-full text-grey-darkest shadow-md">
                                            <img src="img/quads1.png" alt="Quads 1" className="w-full block rounded-b"/>
                                        </div>

                                        <div className="bg-white rounded h-full text-grey-darkest shadow-md">
                                            <img src="img/cdf1.png" alt="Quad 2" className="w-full block rounded-b"/>
                                        </div>
                                        <div className="bg-white rounded h-full text-grey-darkest shadow-md">
                                            <img src="img/heatmap1.png" alt="Quad 2"
                                                 className="w-full block rounded-b"/>
                                        </div>
                                        <div className="bg-white rounded h-full text-grey-darkest shadow-md">
                                            <img src="img/zebra1.png" alt="Quad 2" className="w-full block rounded-b"/>
                                        </div>
                                        <div className="bg-white rounded h-full text-grey-darkest shadow-md">
                                            <img src="img/density-plot1.png" alt="Quad 2"
                                                 className="w-full block rounded-b"/>
                                        </div>
                                        <div className="bg-white rounded h-full text-grey-darkest shadow-md">
                                            <img src="img/contour-plot1.png" alt="Contour plot"
                                                 className="w-full block rounded-b"/>
                                        </div>
                                        <div className="bg-white rounded h-full text-grey-darkest shadow-md">
                                            <img src="img/density2.png" alt="Contour plot"
                                                 className="w-full block rounded-b"/>
                                        </div>
                                        <div className="bg-white rounded h-full text-grey-darkest shadow-md">
                                            <img src="img/histogram2.png" alt="Contour plot"
                                                 className="w-full block rounded-b"/>
                                        </div>
                                    </div>
                                    }

                                    {id !== 'a' && <h1>{TITLE_MAP[id]}</h1>}

                                </ViewIdMosaicWindow>
                            )}
                            initialValue={{
                                direction: 'row',
                                first: 'a',
                                second: {
                                    direction: 'column',
                                    first: 'b',
                                    second: 'c',
                                },
                            }}
                    />

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
                </section>
            </div>
        );
    }
}

export default App;
