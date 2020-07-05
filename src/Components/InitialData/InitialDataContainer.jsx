import React from 'react';
import {connect} from 'react-redux';
import {InitialData} from './InitialData';
import {areaCalculatedSuccess, setWorkArea} from '../../redux/AppReducer';

const mapStateToProps = (state) => ({

})

export const InitialDataContainer = connect(mapStateToProps, {areaCalculatedSuccess, setWorkArea}) (InitialData);



