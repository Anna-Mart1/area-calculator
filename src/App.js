import React from 'react';
import './App.css';
import {Header} from './Components/Header/Header';
import {InitialData} from './Components/InitialData/InitialData';
import {MaterialCalculation} from './Components/MaterialCalculation/MaterialCalculation';
import {AreaCalculation} from './Components/AreaCalculation/AreaCalculation';

const App = () => {
    return (
        <>
            <Header/>
            <InitialData/>
            <AreaCalculation/>
            <MaterialCalculation/>
        </>
    );
}

export default App;
