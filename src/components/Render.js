import React from "react";
import Prism from "prismjs";
import "../css/prism.css"

export default class Render extends React.Component {
    componentDidMount() {
        Prism.highlightAll();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        Prism.highlightAll();
    }

    render() {
        return (
            <div id="render">
            <pre>
              <code className="language-javascript">
              {this.props.content}
              </code>
            </pre>
            </div>
        )
    }
}