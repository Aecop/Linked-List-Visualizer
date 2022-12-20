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

    resetScreen() {
        const array = [];
        for (let i = 0; i < 10; i++) {
            array.push(randomIntFromInterval(1, 200));
        }
        this.setState({array});
    }

    render() {
        const {array} = this.state;
    console.log(array)
        return (
            <>
                {array.map((value, index) => (
                    <div className='linkNode' key={index}>
                        {value}
                    </div>
                ))}
            </>
        );
    }
}

function randomIntFromInterval(min,max)
{
    return Math.floor( Math.random()*  ( max - min + 1 ) + min );
}