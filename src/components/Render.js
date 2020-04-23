import React from "react";
import Prism from "prismjs";
import "../css/prism.css"

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

export default class Render extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            codeFontSize: "12px"
        }
    }

    componentDidMount() {
        Prism.highlightAll();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        Prism.highlightAll();
    }

    render() {
        return (
            <div>
                <TextField
                    size="small"
                    label="font size"
                    id="outlined-start-adornment"
                    InputProps={{
                        endAdornment: <InputAdornment position="end">px</InputAdornment>,
                    }}
                    variant="outlined"
                    onChange={(e) => this.setState({codeFontSize: e.target.value + "px"})}
                />
                <div id="render" style={{padding: "4px"}}>
                    <pre style={{borderRadius: "12px"}}>
                      <code className="language-javascript" style={{fontSize: this.state.codeFontSize}}>
                      {this.props.content}
                      </code>
                    </pre>
                </div>
            </div>
        )
    }
}