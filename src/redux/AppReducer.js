const AREA_CALCULATED_SUCCESS = 'AREA_CALCULATED_SUCCESS';
const SET_WORK_AREA = 'SET_WORK_AREA';

let initialState = {
    isAreaCalculated: false,
    bottomArea: null,
    overlapArea: null,
    slopeAreaByDepth: null,
    slopeAreaBySlopeAngle: null,
    slopeAreaBySlopeRatio: null,
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case AREA_CALCULATED_SUCCESS: {
            return {
                ...state,
                isAreaCalculated: true
            }
        }
        case SET_WORK_AREA: {
            return {
                ...state,
                ...action.payload,
            };
        }
        default:
            return state;
    }
}

export const areaCalculatedSuccess = () => {
    return {
        type: AREA_CALCULATED_SUCCESS
    }
};
export const setWorkArea = (bottomArea, overlapArea, slopeAreaByDepth, slopeAreaBySlopeAngle, slopeAreaBySlopeRatio) => {
    return {
        type: SET_WORK_AREA, payload: {bottomArea, overlapArea, slopeAreaByDepth, slopeAreaBySlopeAngle, slopeAreaBySlopeRatio}
    }
};
