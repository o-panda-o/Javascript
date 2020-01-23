import React, { Component } from 'react'

const scaleNames={
    c: 'Celsius',
    f: 'Fahrenheit'
}

export class TemperatureInput extends Component {

    constructor(props) {
        super(props)
    }

    handleChange=(event)=>{
        this.props.onTemperatureChange(event.target.value);
    }
    

    render() {
        const temperature=this.props.temperature;
        const scale=this.props.scale;
        return (
            <div>
                <fieldset>
                    <legend>Enter the temperature in {scaleNames[scale]}</legend>
                    <input value={temperature} onChange={this.handleChange} />
                </fieldset>
            </div>
        )
    }
}

export default TemperatureInput
