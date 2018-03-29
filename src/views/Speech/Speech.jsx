import React, { Component } from 'react';
import {Iframe} from 'react-iframe';

class Speech extends Component{
    render() {
        return (
            <div id="speech">
                <iframe width="350" height="430" src="https://console.dialogflow.com/api-client/demo/embedded/4130aeeb-9012-4126-941d-1773e2e08470"></iframe></div>
        );
    }

}

export default Speech;
