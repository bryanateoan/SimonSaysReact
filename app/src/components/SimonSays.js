import React from 'react';
import './SimonSays.css';

class SimonSays extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="SimonSays">
                <div class="container">
                    <div id="box1" class="box">
                    1
                    </div>

                    <div id="box2" class="box">
                    2
                    </div>

                    <div id="box3" class="box">
                    3
                    </div>

                    <div id="box4" class="box">
                    4
                    </div>
                </div>
            </div>
        );
    }
}

export default SimonSays