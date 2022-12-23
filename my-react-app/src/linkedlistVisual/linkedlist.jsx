import React from 'react';
import '../App.css';

export default class LinkedlistVisual extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };

    }

    componentDidMount() {
        this.resetScreen();
    }

    resetScreen = () => {
        const array = [];
        for (let i = 0; i < 5; i++) {
            array.push(randomIntFromInterval(1, 200));
        }

        this.setState({array});
    }

    addNode = () => {
        const addArray = [...this.state.array, randomIntFromInterval(1, 200)];
        this.setState({array: addArray});
    }

    popNode = () => {
        const popArray = [...this.state.array];
        popArray.pop();
        this.setState({array: popArray})
    }




    render = () => {
        const {array} = this.state;
    console.log(array)
        return (
            <>
                {array.map((value, index) => (
                    <div className='linkNode' key={index}>
                        {value}
                    </div>
                ))}
                <div className='btnContainer'>
                    <button className="btn" onClick={this.resetScreen}>
                        Reset
                    </button>
                    <button className="btn" onClick={this.addNode}>
                        Add Node
                    </button>
                    <button className="btn" onClick={this.popNode}>
                        Pop Node
                    </button>
                </div>

            </>

        );
    }

}

function randomIntFromInterval(min,max)
{
    return Math.floor( Math.random() * ( max - min + 1 ) + min );
}