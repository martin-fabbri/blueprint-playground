// import {Callout, Intent} from '@blueprintjs/core';

import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

import * as React from 'react';


class App extends React.Component {
    public render() {


        return (
            <div className="flex items-center h-screen w-full bg-teal-lighter">
                <div className="w-full bg-white rounded shadow-lg p-8 m-4">
                    <h1 className="block w-full text-center text-grey-darkest mb-6">Sign up</h1>
                    <form action="/" method="post" className="mb-4 md:flex md:flex-wrap md:justify-between">
                        <label className="pt-label md:w-1/2 md:mr-2">
                            First Name
                            <input type="text" name="first_name" id="first_name" className="pt-input w-full md:mr-2" dir="auto"/>
                        </label>

                        <label className="pt-label  md:w-1/2">
                            Last Name
                            <input type="text" name="last_name" id="last_name" className="pt-input w-full" dir="auto"/>
                        </label>

                        <label className="pt-label md:w-full">
                            Email
                            <input type="text" name="email" id="email" className="pt-input w-full" dir="auto"/>
                        </label>

                        <label  className="pt-label md:w-full">
                            Password
                            <input type="password" name="password" id="password" className="pt-input pt-fill" dir="auto"/>
                        </label>

                        <button type="submit" className="flex mx-auto pt-button pt-intent-primary mt-4">Create Account</button>
                    </form>
                    <a href="#" className="block w-full text-center">Already have an account?</a>
                </div>
            </div>
        );
    }
}

export default App;
