import React, { Component } from 'react';
import { init, queryInputKeyDown } from '../../assets/js/layout.js';
import $ from 'jquery';



class Speech extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            resultDiv: null
        };
        this._handleKeyPress = this._handleKeyPress.bind(this);
    }

    _handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            queryInputKeyDown(this.state.inputValue, this.state.resultDiv);
        }
        if (e.key === " ") {
            queryInputKeyDown(this.state.inputValue, this.state.resultDiv);
        }
    }

    updateInputValue = (evt) => {
        this.setState({
            inputValue: evt.target.value
        });
    }
    componentDidMount() {
        init(this.resultDiv);
        this.setState({
            resultDiv: this.resultDiv
        })
    }

    render() {
        return (
            <div class="content">
                <div class="input-field">
                    <input placeholder="Hey, ask me something..." id="q" type="text" value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} />
                </div>
                <div id="result" ref={c => this.resultDiv = c}>
                </div>
            </div>
        );
    }
}
export default Speech;