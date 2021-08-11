/**
 * 接收一个reducers对象，返回一个reducer
 * @param {*} reducers 
 * @returns 
 */
export default function combineReducers(reducers) {
    // 返回的是reducer，state是老的state
    // 该方法被调用一次，就会触发所有组件的reducer，达到通知所有组件的目的
    return function (state = {}, action) {
        let nextState = {};
        // state = {
        //     counter1: {number: 0},
        //     counter2: {number: 0},
        // }
        // nextState = {
        //     counter1: {number: 0},
        //     counter2: {number: 0},
        // }
        // reducers = {
        //     counter1: function (state, action) { },
        //     counter2: function (state, action) { }
        // }
        for (let key in reducers) {
            // nextState['counter1'] = counter1(counter1State, action)
            // nextState['counter2'] = counter2(counter2State, action)
            let reducer = reducers[key];
            nextState[key] = reducer(state[key], action);
        }

        return nextState;
    }
}