import React from 'react';
import './App.css';

import {toPng, toJpeg} from "html-to-image";

import Editor from "./components/Editor";
import Render from "./components/Render";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            renderContent: null
        };

        this.editorDidSubmit = this.editorDidSubmit.bind(this);
    }

    editorDidSubmit(text) {
        this.setState({
            renderContent: text
        });
    }

    didRenderPressed() {
        toJpeg(document.getElementById("render"))
            .then(function (dataUrl) {
                console.log(dataUrl)
            })
            .catch(function (error) {
                console.error('oops, something went wrong!', error);
            });
    }

    render() {
        return (
            <div>
                <Editor editorDidSubmit={this.editorDidSubmit}/>
                {this.state.renderContent==null ||
                [
                    <button onClick={this.didRenderPressed}>render</button>,
                    <Render content={this.state.renderContent}/>,
                ]}
            </div>
        );
    }
}

export default App;
