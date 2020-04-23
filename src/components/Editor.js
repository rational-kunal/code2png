import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export default class Editor extends React.Component {
    constructor(props) {
        super(props);

        this.state = { textAreaValue: '' };

        this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    }

    handleTextAreaChange(event) {
        this.setState({
            textAreaValue: event.target.value,
        });
        this.props.editorTextChange(event.target.value);
    }

    render() {
        return (
            <Card style={{ marginTop: 12 }}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        code2png
                    </Typography>

                    <TextField
                        fullWidth
                        margin="normal"
                        label="code"
                        multiline
                        rows={8}
                        rowsMax={15}
                        value={this.state.textAreaValue}
                        onChange={this.handleTextAreaChange}
                        variant="outlined"
                    />
                </CardContent>
            </Card>
        );
    }
}
