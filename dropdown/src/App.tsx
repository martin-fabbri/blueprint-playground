import * as React from 'react';
import Dropzone, {ImageFile} from 'react-dropzone';

export interface IProps {
    text?: string;
}

export interface IState {
    accepted: ImageFile[];
    rejected: ImageFile[];
};

const INITIAL_STATE: IState = {
    accepted: [],
    rejected: []
}

class App extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = INITIAL_STATE;
        this.handleStateUpdate = this.handleStateUpdate.bind(this);
        this.handleDisplayFiles = this.handleDisplayFiles.bind(this);
    }

    public render() {
        return (
            <section>
                <div className="dropzone">
                    <Dropzone
                        accept="image/jpeg, image/png"
                        onDrop={this.handleStateUpdate }
                    >
                        <p>Try dropping some files here, or click to select files to upload.</p>
                        <p>Only *.jpeg and *.png images will be accepted</p>
                    </Dropzone>
                </div>
                <aside>
                    <h2>Accepted files</h2>
                    <ul>
                        {
                            this.state.accepted.map(this.handleDisplayFiles)
                        }
                    </ul>
                    <h2>Rejected files</h2>
                    <ul>
                        {
                            this.state.rejected.map(this.handleDisplayFiles)
                        }
                    </ul>
                </aside>
            </section>
        );
    }

    private handleStateUpdate(accepted: ImageFile[], rejected: ImageFile[]) {
        this.setState({ accepted, rejected });
    }

    private handleDisplayFiles(f: ImageFile) {
        return (
            <li key={f.name}>{f.name} - {f.size} bytes</li>
        );
    }

}


export default App;
