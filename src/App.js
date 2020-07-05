import React from 'react';
import './App.css';
import {Header} from './Components/Header/Header';
import {MaterialCalculation} from './Components/MaterialCalculation/MaterialCalculation';
import {InitialDataContainer} from './Components/InitialData/InitialDataContainer';
import {AreaCalculationContainer} from './Components/AreaCalculation/AreaCalculationContainer';

const App = () => {
    return (
        <>
            <Header/>
            <InitialDataContainer/>
            <AreaCalculationContainer/>
            <MaterialCalculation/>
        </>
    );
}

export default App;
