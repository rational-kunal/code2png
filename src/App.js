import React from 'react';
import './App.css';

import {toPng} from "html-to-image";
import download from 'downloadjs';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

import Editor from "./components/Editor";
import Render from "./components/Render";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            renderContent: ""
        };

        this.editorTextChange = this.editorTextChange.bind(this);
    }

    editorTextChange(text) {
        this.setState({
            renderContent: text
        });
    }

    didRenderPressed() {
        toPng(document.getElementById("render"))
            .then(function (dataUrl) {
                download(dataUrl, 'my-node.png');
            })
            .catch(function (error) {
                console.error('oops, something went wrong!', error);
            });
    }

    render() {
        const theme = createMuiTheme({
            palette: {type: 'dark'},
        });

        return (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container maxWidth="md">
                    <Editor editorTextChange={this.editorTextChange}/>
                    {this.state.renderContent === "" ||
                    [
                        <Button size="medium" type="submit" variant="outlined" onClick={this.didRenderPressed} style={{marginTop: 12, marginBottom: 12}}>render</Button>,
                        <Render content={this.state.renderContent}/>,
                    ]}
                </Container>
            </ThemeProvider>
        );
    }
}

export default App;
