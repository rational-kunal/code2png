import React from "react";

export default class Editor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {textAreaValue: ""};

        this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
        this.handleTextAreaSubmit = this.handleTextAreaSubmit.bind(this);
    }

    handleTextAreaChange(event) {
        this.setState({
            textAreaValue: event.target.value
        });
    }

    handleTextAreaSubmit(event) {
        this.props.editorDidSubmit(this.state.textAreaValue);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleTextAreaSubmit}>
                    <textarea value={this.state.textAreaValue} onChange={this.handleTextAreaChange}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}