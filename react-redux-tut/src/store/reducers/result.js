import * as actionTypes from '../actions/actionTypes';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            // Change data
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result * 2})
            }
        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const newArr = [...state.results];
            // newArr.splice(id, 1);
            const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            return {
                ...state,
                results: updatedArray
            }
        default:
    }

    return state;
};

export default reducer;