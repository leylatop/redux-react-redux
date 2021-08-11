import * as types from '../action-types';

let initialState = {
    number: 0
}
/**
 * 处理器函数，每个组件都有自己的reducer
 * @param {*} state 老对象
 * @param {*} action 动作对象，是一个普通的js对象，对象中必须包含type熟悉
 */
function reducer(state = initialState, action) {
    switch (action.type) {
        case types.COUNTER1ADD:
            return {number: state.number + 1};

        case types.COUNTER1MINUS:
            return {number: state.number - 1};

        case types.COUNTERRESET:
            return initialState;
        default: 
            return state;
    }
};

export default reducer;