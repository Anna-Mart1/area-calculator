import React from 'react';
import {connect} from 'react-redux';
import {AreaCalculation} from './AreaCalculation';

const mapStateToProps = (state) => ({
    isAreaCalculated: state.app.isAreaCalculated,
})

export const AreaCalculationContainer = connect(mapStateToProps, {}) (AreaCalculation);



