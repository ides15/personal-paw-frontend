import React, { Component } from 'react';
import { init, queryInputKeyDown } from '../../assets/js/layout.js';



class Speech extends Component {
    constructor(props) {
        super(props);
        this.state = {
          inputValue: '',
          resultDiv: null
        };
      }

    _handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            queryInputKeyDown(this.state.inputValue,this.state.resultDiv);
        }
      }

    updateInputValue = (evt) => {
        this.setState({
          inputValue: evt.target.value
        });
      }
    componentDidMount() {
        init(this.resultDiv);
    }

    render() {
        return (
            <div class="content">
            <div id="main-wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="input-field">
                                <input placeholder="Hey, ask me something..." id="q" type="text" value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} onKeyPress={this._handleKeyPress} />
                            </div>
                            <div id="result" ref = {c => this.resultDiv = c}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
export default Speech;