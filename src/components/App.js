import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            relatives: [
                { key: 'relativeListItem1', name: 'Mom' },
                { key: 'relativeListItem2', name: 'Dad' },
                { key: 'relativeListItem3', name: 'Sister' },
                { key: 'relativeListItem4', name: 'Brother' },
            ],
        };
    }
    render() {
        return (
            <div id="main">
                <h3>Diwali Shopping List</h3>
                <ol key="relativeList">
                    {this.state.relatives.map(relative => (
                        <li key={relative.key}>{relative.name}</li>
                    ))}
                </ol>
            </div>
        )
    }
}

export default App;
