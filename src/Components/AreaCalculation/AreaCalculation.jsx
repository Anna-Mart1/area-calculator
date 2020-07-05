import React from 'react';
import style from './AreaCalculation.module.css';

export const AreaCalculation = ({isAreaCalculated}) => {
    return (<div className={style.areaCalcContainer}>
        {isAreaCalculated && 'AreaCalculation'}
    </div>)
}