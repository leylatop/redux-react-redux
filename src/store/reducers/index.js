
import { combineReducers } from '../../redux';
import counter1 from './counter1';
import counter2 from './counter2';

let reducers = {
    counter1,
    counter2
}

// // 本质是个reducer函数
// reducers = {

//     counter1: function (state, action) { },
//     counter2: function (state, action) { }
// }

// // 合并后的状态应该是
// combinedState = {
//     counter1: {number: 0},
//     counter2: {number: 0},
// }
// 在这里将众多reducer进行合并,
let combinedReducer = combineReducers(reducers);

export default combinedReducer;


