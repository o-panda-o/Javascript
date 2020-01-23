/**
 * Often, several component need to reflect the same changing data. So it is recommended 
 * to lifting the shared state up to their closest common ancestor.
 */
import React, { Component } from 'react'
import BoilingVerdict from './26.BoilingVerdict';
import TemperatureInput from './26.TemperatureInput';

export class Calculator extends Component {

    constructor(props){
        super(props);
        this.state={temperature:'',scale:'c'};
    }

    handleCelsiusChange=(temperature)=>{
        this.setState({scale:'c',temperature})
    }

    handleFahrenheitChange=(temperature)=>{
        this.setState({scale:'f',temperature})
    }

    render() {
        const scale=this.state.scale;
        const temperature=this.state.temperature;
        const celsius=scale==='f'?tryConvert(temperature,toCelsius):temperature;
        const fahrenheit=scale==='c'?tryConvert(temperature,toFahrenheit):temperature;

        return (
            <div>
                <TemperatureInput
                    scale="c" 
                    temperature={celsius} 
                    onTemperatureChange={this.handleCelsiusChange} />

                <TemperatureInput 
                    scale="f" 
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange} />
                
                <BoilingVerdict celsius={parseFloat(celsius)} />

            </div>
        )
    }
}

const toCelsius=(fahrenheit)=>(fahrenheit-32)*5/9;
    
const toFahrenheit=(celsius)=>(celsius*9/5)+32;

const tryConvert=(temperature,convert)=>{
    const input=parseFloat(temperature);
    if(Number.isNaN(input)){
        return '';
    }
    const output=convert(input);
    const rounded=Math.round(output*1000)/1000;
    return rounded.toString();
}

export default Calculator;
