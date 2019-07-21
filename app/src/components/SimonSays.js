import React from 'react';
import './SimonSays.css';

class SimonSays extends React.Component {
    state = {
        answerList: [],
        isLit1: false,
        isLit2: false,
        isLit3: false,
        isLit4: false,
        message: 'hit start to begin',
        difficulty: 1
    }
    questionList = [];
    animationSpeed = 500;
    

    reset() {
        this.questionList = [];
        this.setState({
            answerList: [],
            isLit1: false,
            isLit2: false,
            isLit3: false,
            isLit4: false,
            message: 'hit start to begin'
        })
    }

    boxClickHandler(box) {
        this.setState({answerList: [...this.state.answerList, box]});
    }

    makeNewQuestion() {
        this.reset();
        for(var i=1; i <= this.state.difficulty; i++) {
            this.questionList.push(Math.floor((Math.random()*4) + 1));
        }
        console.log(this.questionList);
        this.showQuestion();
    }

    showQuestion() {
        this.delayedLoop(0);
    }

    delayedLoop(i) {
        setTimeout(function() {
            this.flashBox(this.questionList[i]);
            i++
            if(i < this.questionList.length) this.delayedLoop(i);
        }.bind(this), this.animationSpeed);
    }

    flashBox(box) {
        this.lightBox(box);
        setTimeout(function(){this.dimBox(box)}.bind(this),this.animationSpeed/2);
    }

    lightBox(box) {
        switch(box) {
            case 1: 
            this.setState({isLit1: true});
            break;
            case 2: 
            this.setState({isLit2: true});
            break;
            case 3: 
            this.setState({isLit3: true});
            break;
            case 4: 
            this.setState({isLit4: true});
            break;
            default:
            console.error('box not found');
        }
    }

    dimBox(box) {
        switch(box) {
            case 1: 
            this.setState({isLit1: false});
            break;
            case 2: 
            this.setState({isLit2: false});
            break;
            case 3: 
            this.setState({isLit3: false});
            break;
            case 4: 
            this.setState({isLit4: false});
            break;
            default:
            console.error('box not found');
        }
    }

    checkAnswer() {
        if(this.state.answerList.length !== this.questionList.length) {
            this.setState({message: 'Please select ' + this.state.difficulty + ' boxe(s) for your answer'})
        } else {
            var errorFound = false;
            this.questionList.forEach(function(box,index) {
                if(this.state.answerList[index] !== box) {
                    this.setState({message: 'Wrong Answer!!!'});
                    errorFound = true;
                }
            }.bind(this));
            if(!errorFound) {
                this.setState({message: 'Correct Answer!!!'});
            }
        }
    }

    clearAnswer() {
        this.setState({answerList: []});
    }

    makeDifficulty(max) {
        let options = [];

        for (let i = 1; i <= max; i++) {
            options.push(<option key={i} value={i}>{i}</option>);
        }

        return options;
    }

    difficultyChangeHandler(event) {
        this.setState({difficulty: event.target.value});
    }



    render() {
        return (
            <div className="SimonSays">
                <div className="container">
                    <div id="box1" className={`box ${this.state.isLit1 ? 'lit':'dim'}`} onClick={() => {this.boxClickHandler(1)}}>
                    1
                    </div>

                    <div id="box2" className={`box ${this.state.isLit2 ? 'lit':'dim'}`} onClick={() => {this.boxClickHandler(2)}}>
                    2
                    </div>

                    <div id="box3" className={`box ${this.state.isLit3 ? 'lit':'dim'}`} onClick={() => {this.boxClickHandler(3)}}>
                    3
                    </div>

                    <div id="box4" className={`box ${this.state.isLit4 ? 'lit':'dim'}`} onClick={() => {this.boxClickHandler(4)}}>
                    4
                    </div>
                </div>
                <select name="difficulty" onChange={(event) => this.difficultyChangeHandler(event)}>
                    {this.makeDifficulty(10)}
                </select>
                <p>Your Answer: {this.state.answerList.toString()}</p>
                <p>{this.state.message}</p>
                <button id="start" onClick={() => {this.makeNewQuestion()}}>Start</button>
                <button id="submit" onClick={() => {this.checkAnswer()}}>Submit</button>
                <button id="show" onClick={() => this.showQuestion()}>showQuestion</button>
                <button id="clear" onClick={() => this.clearAnswer()}>Clear Answer</button>
            </div>
        );
    }
}
export default SimonSays;